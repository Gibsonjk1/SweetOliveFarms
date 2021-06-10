import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

// API class

class SweetOliveApi {

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

   
    const url = `${BASE_URL}/${endpoint}`;
    const headers = {}
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes


  static async getPost(handle="") {
    let res = await this.request(`posts/${handle}`);
    return res;
  }

  static async analyzeComment(comment) {
    console.log('analyze comment')
    let score = await axios.post(`${BASE_URL}/commentanalyzer`, {comment})
    .then(function(res){
        let score = res.data.score
        console.log('Score from api: ', score)
        return score;
    })
    return score
  };

}


export default SweetOliveApi;