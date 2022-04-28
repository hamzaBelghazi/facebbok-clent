const AppError = require("../utils/appError");
const catchError = require("../utils/catchError");

exports.addOne = (Model) => {
  return catchError(async (req, res, next) => {
    const doc = await Model.create(req.body);
    if (!doc) return next(new AppError("Something went wrong", 500));
    res.status(200).json({
      status: "success",
      data: doc,
    });
  });
};

exports.getOneById = (Model) => {
  return catchError(async (req, res, next) => {
    const doc = await Model.findById(req.params.id);
    if (!doc) return next(new AppError("Something went wrong", 404));
    res.status(200).json({
      status: "success",
      data: doc,
    });
  });
};
exports.getOne = (Model) => {
  return catchError(async (req, res, next) => {
    const doc = await Model.findOne(req.body);
    if (!doc) return next(new AppError("Something went wrong", 404));
    res.status(200).json({
      status: "success",
      data: doc,
    });
  });
};

exports.getALL = (Model) => {
  return catchError(async (req, res, next) => {
    const doc = await Model.find();
    if (!doc) return next(new AppError("Something went wrong", 404));
    res.status(200).json({
      status: "success",
      data: doc,
    });
  });
};

exports.deleteOne = (Model) =>
  catchError(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchError(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.deleteAll = (Model) => {
  return catchError(async (req, res, next) => {
    const doc = await Model.delete();
    if (!doc) return next(new AppError("Something went wrong", 400));
    res.status(203).json({
      status: "success",
    });
  });
};
