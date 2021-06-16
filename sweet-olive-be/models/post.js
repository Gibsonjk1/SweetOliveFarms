"use strict";

const { NotFoundError } = require("../expressError");
const axios = require('axios')
const redis = require("redis");

const { promisify } = require("util");

// Configure redis client
const client = redis.createClient();
// Set it up to return promises to work better with Async
// https://www.npmjs.com/package/redis#promises
const getAsync = promisify(client.get).bind(client);

client.on("error", function(error) {
  console.error(error);
});
client.on('connect', function() {
    console.log('Connected to Redis');
});
// functions for posts

class Post {
    static async findAllPosts(searchTerm){
        searchTerm =searchTerm;
    return sea
    }
    static async getNewestPost(){
        let data = await getAsync('post')
        if (!data){
            console.log('setting post in redis')
            let res = await axios.get('http://sweetolivefarms.com/wp-json/wp/v2/posts?per_page=1')
            data = JSON.stringify(res.data)
            client.set("post", data, 'EX', 60*60*24)
        }
        return data
    }
}
module.exports = Post








