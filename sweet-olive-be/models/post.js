"use strict";

const db = require("../db");
const { NotFoundError } = require("../expressError");

// functions for posts

class Post {
    
    static async findAllPosts(searchFilters = {}){
        let query = `SELECT ID,
                            title,
                            slug,
                            content,
                            excerpt,
                            categories,
                            relatedPost1,
                            relatedImg1,
                            relatedPost2,
                            relatedImg2,
                            relatedPost3,
                            relatedImg3,
                            comments
                    FROM posts`
                    
    }
}

module.exports = Post