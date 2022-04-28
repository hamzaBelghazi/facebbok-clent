const User = require("../models/userModel");
const catchErrors = require("../utils/catchError");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const responseHandler = (res, status, user) => {
  const token = signToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  user.password = undefined;

  res.status(status).json({
    token,
    status: "success",
    data: { user },
  });
};

// Sign Up New User

exports.signup = catchErrors(async (req, res, next) => {
  const newUser = await User.create(req.body);
  if (!newUser)
    return new AppError("something went wrong please try again", 400);

  responseHandler(res, 201, newUser);
});

// Signin  User

exports.login = catchErrors(async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);
  const user = await User.findOne({ email }).select("+password");

  if (!user) return next(new AppError("This user is not found", 404));
  // compare password and send
  if (!user || !(await user.correctPass(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }
  responseHandler(res, 200, user);
});

exports.protect = catchErrors(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  //Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //  Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  // if user change there password
  // if (currentUser.changedPasswordAfter(decoded.iat)) {
  //   return next(
  //     new AppError("User recently changed password! Please log in again.", 401)
  //   );
  // }

  // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

exports.isLoggedIn = async (req, res, next) => {
  console.log(req.cookies.jwt);
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // 3) Check if user changed password after the token was issued
      // if (currentUser.changedPasswordAfter(decoded.iat)) {
      //   return next();
      // }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      res.status(200).json(currentUser);
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};
