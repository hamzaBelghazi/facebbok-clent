const multer = require("multer");
const sharp = require("sharp");
const catchError = require("./catchError");
const AppError = require("./appError");
module.exports = function uploudFiles(fileName, path) {
  const multerStorage = multer.memoryStorage();

  const multerFilter = (req, file, cb) => {
    if (
      file.mimetype.startsWith("image") ||
      file.mimetype.startsWith("video")
    ) {
      cb(null, true);
    } else {
      cb(new AppError("Not an image! Please upload only images.", 400), false);
    }
  };

  const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
  });

  const uploadMedia = upload.fields([{ name: "media", maxCount: 5 }]);

  const resizeAndSetBody = catchError(async (req, res, next) => {
    if (!req.files.media) return next();
    req.body.media = [];

    await Promise.all(
      req.files.media.map(async (file, i) => {
        const filename = fileName;

        await sharp(file.buffer)
          .toFormat("png")
          .png({ quality: 100 })
          .toFile(`${path}${filename}`);

        req.body.media.push(filename);
      })
    );

    next();
  });

  return {
    uploadMedia,
    resizeAndSetBody,
  };
};
