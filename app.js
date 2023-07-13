var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

const usersRoutes = require("./app/api/users/router");
const authRoutes = require("./app/api/auth/router");
const jobsRouter = require("./app/api/jobs/router");

const handleErrorMidlaware = require("./app/middleware/handler-error");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", usersRoutes);
app.use("/api", authRoutes);
app.use("/api", jobsRouter);

app.use(handleErrorMidlaware);
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log(err, res, "appjs33");
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
