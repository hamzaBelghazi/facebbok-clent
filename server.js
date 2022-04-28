require("dotenv").config({ path: ".env" });
const path = require("path");
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

// Routes;

const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const reactRouter = require("./routes/reactRouter");
const followRouter = require("./routes/followRouter");
const conversationRouter = require("./routes/conversationRouter");
const messageRouter = require("./routes/messagRouter");

// setup app depandencies

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// database connection
const db = process.env.DB_CONNECTION_URL;
mongoose.connect(db, {}, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connection db establich succesfuly");
  }
});

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/reacts", reactRouter);
app.use("/api/follows", followRouter);
app.use("/api/conversations", conversationRouter);
app.use("/api/messages", messageRouter);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log("server running on port");
});

// error handling

app.all("*", (req, res, next) => {
  next(`Can't find ${req.originalUrl} on this server!`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});
