//import React from "react"
import React, { useState } from "react"
import CommentItems from "./CommentItems"

function About({views, createdAt, upvotes, downvotes, comments}) {

    let info = comments.map((obj) => (
        <CommentItems
        user = {obj.user}
        comment = {obj.comment}
        />
    ))    

    console.log(info)
    console.log(comments)

    
    //console.log(upvotes)
    const[upvote, setUpvotes] = useState(upvotes);
    const[downvote, setDownvotes] = useState(downvotes);
   // console.log(upvote)

    function handleUpvotes (){
       setUpvotes(upvote + 1)
    }
    function handleDownvotes (){
       setDownvotes(downvote + 1)
    }
    
    return(
    <div>
        <p>{views} Views | Uploaded {createdAt}</p> 
        <p> <button onClick={handleUpvotes}>{upvote}👍</button>
        <button onClick={handleDownvotes}>{downvote}👎</button></p>
        <button>Hide Comments</button>
        

        <div>
            <h2>{comments.length} comments</h2>
            {info}
        </div>
    </div>
    )
}

export default About;