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
    const[hidden, setHidden] = useState(false);
   // console.log(upvote)

    function handleUpvotes (e){
       setUpvotes(upvote + 1)
    }
    function handleDownvotes (e){
       setDownvotes(downvote + 1)
    }

    function handleHidden(e){
        if(hidden) {e.target.textContent = "Hide Comments"}
        else{e.target.textContent = "Show Comments"}
        setHidden(hidden => !hidden)
    }
    
    return(
    <div>
        <p>{views} Views | Uploaded {createdAt}</p> 
        <p> <button onClick={handleUpvotes}>{upvote}👍</button>
        <button onClick={handleDownvotes}>{downvote}👎</button></p>
        <button onClick={handleHidden}>Hide Comments</button>
        

        { hidden ? null: <div>
            <h2>{comments.length} comments</h2>
            {info}
                </div>}
    </div>
    )
}

export default About;