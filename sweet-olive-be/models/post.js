"use strict";

const { NotFoundError } = require("../expressError");
const axios = require('axios')
const redis = require("redis");

const client = redis.createClient();
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
        console.log('got to newest post')
        let data=null;
       
            client.get('post', (err, reply) => {
                if (err) throw err;
                if (reply) {
                    data = reply 
                    return reply}
            });
            console.log('data: ', data)
            if (!data){
        try{
            console.log('got into the try')
            
            let res = await axios.get('http://sweetolivefarms.com/wp-json/wp/v2/posts?per_page=1')
            client.set("post", JSON.stringify(res.data), 'EX', 60*60*24)
            client.get('post', (err, reply) => {
                data=reply
                return reply
            });
        
            return data;  
            
        
        }catch(err){
            console.log('catch has caught me')
            return console.log(err)
        }
            }
            return data;
    }



}

module.exports = Post