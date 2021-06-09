import React, {useState} from 'react'

function CreateComment(createComment){
    const [formData, setFormData] = useState({
        "name": "",
        "email": "",
        "content": ""
    })
    function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value })
    }
    return(
        <form>  
            <input type="text" placeholder="Name" id="name" name="name" onChange={handleChange}/>
            <input type="email" placeholder="email" id="email" name="email" onChange={handleChange}/>
            <input type="textarea" placeholder="Comment Content" id="content" name="content" onChange={handleChange}/>
        </form>
    );
}

export default CreateComment;