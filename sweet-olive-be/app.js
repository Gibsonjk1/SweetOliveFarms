"use strict";
/**express app for sweetolivefarms */

const express = require("express")
const cors = require("cors");


const { NotFoundError } = require("./expressError");

const postRoutes = require("./routes/posts");
const commentAnalyzer = require("./routes/commentAnalyzer")

const app = express();

app.use(cors());
app.use(express.json());


app.use("/posts", postRoutes);
app.use("/commentanalyzer", commentAnalyzer)

// Handles 404 errors
app.use(function(req, res, next) {
    return next(new NotFoundError())
})

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;
  
    return res.status(status).json({
      error: { message, status },
    });
  });
  
  module.exports = app;