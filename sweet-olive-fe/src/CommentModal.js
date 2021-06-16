import axios from "axios";
import React, {useState, useContext} from "react";
import './CommentModal.css';
import AppContext from './Context'
import SweetOliveApi from './api'




function CommentModal({post}){

    const {BASE_URL} = useContext(AppContext)

    const [formData, setFormData] = useState({
        "name": '',
        'email': '',
        'content': '',
        "post": post,

    });

    
    function close(){
        let modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    function handleChange(e){
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        document.getElementById('CommentModalForm').reset();

        async function create(){
            let res = await SweetOliveApi.analyzeComment(formData.content)
            
            console.log("Submit res: ", res)
            // let res = await axios.post(`${BASE_URL}/comments?author_name=${formData.name}&author_email=${formData.email}&content=${formData.content}&post=${formData.post}`)
        }
        create();
        close();
    }
    return(
        <>
       <div id="myModal" className="modal">

            <div className="modal-content">
            <span onClick={close} className="close">&times;</span>
            <form id="commentModalForm">
                <div className="form-group">
                <label htmlFor="name">Name:</label>
                    <input className="form-control" type="text" name="name" id="name" onChange={handleChange}></input><br />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                    <input className="form-control" type="email" name="email" id="email" onChange={handleChange}></input><br />
                </div>
                <div className="form-group">
                <label htmlFor="content">Comment:</label>
                    <textarea className="form-control" name="content" id="content" rows="10" columns="30" onChange={handleChange}></textarea><br />
                    <input type="hidden" value={post}></input>
                </div>
                <button className="btn btn-primary" onClick={handleSubmit}>Submit Comment</button>
            </form>
            </div>

        </div>
       
        </>
    );
}


export default CommentModal;