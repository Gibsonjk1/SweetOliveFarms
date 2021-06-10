"use strict"

const express = require('express');
const Post = require("../models/post")

const router = new express.Router()

router.get("/", async function(req, res, next){
    try {
    
        const post = await Post.getNewestPost();
        return res.status(201).json({ post });
      } catch (err) {
        return next(err);
      }
    });

module.exports = router;