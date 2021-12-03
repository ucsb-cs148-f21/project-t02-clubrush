import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import {
  GetComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "../api";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useLocalStorage, getStorageValue } from "../useLocalStorage"

import Container from "react-bootstrap/Container";

const Comments = ({ commentsUrl, currentUserId }) => {
  const user = getStorageValue("user")

  const website = process.env.REACT_APP_website
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const { id } = useParams();

  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {

    if(user == "" || user == undefined) {
      alert("Cannot comment if not logged in. Please log in")
      return "Not logged in";
    }
    createCommentApi(text, parentId).then((comment) => {
      fetch(`${website}/clubs/${id}/comments`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(comment) // body data type must match "Content-Type" header
      })
      setBackendComments([comment, ...backendComments]);
      setActiveComment(null);
    });
  };

  useEffect(() => {
    fetch(`${website}/clubs/${id}/comments`)
      .then(async (res) => {
        const comment = await res.json();
        console.log(comment)
        setBackendComments(comment);

      }
    );
  },[]);

  const updateComment = (text, commentId) => {
    if(user == "" || user == undefined) {
      alert("Cannot bookmark if not logged in. Please log in")
      return "Not logged in";
    }
    updateCommentApi(text).then(() => {

      try{
        console.log(text)
        fetch(`${website}/clubs/change/${id}/${commentId}`, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'text',
            "Access-Control-Allow-Origin": {
              "type": "string"
            }
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(text) // body data type must match "Content-Type" header
        })
      }
      catch(e) {
        console.log(e);
      }

      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      console.log(text)
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if(user == "" || user == undefined) {
      alert("Cannot bookmark if not logged in. Please log in")
      return "Not logged in";
    }
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {

        fetch(`${website}/clubs/update/${id}/${commentId}`, {

        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
      
        setBackendComments(updatedBackendComments);
      });
    }
  };

  // useEffect(async() =>  {
  //   await getCommentsApi(id).then((data) =>  {
  //      setBackendComments(data);
  //   });
  // }, []);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(`${website}/clubs/`)
      response = await response.json()
      setBackendComments(response)
      console.log(response)
    }});
  

  // useEffect(() => {
  //   async function fetchMyAPI() {
  //     let response = await fetch('http://localhost:9000/clubs/')
  //     response = await response.json()
  //     setBackendComments(response)
  //     console.log(response)
  //   }

  //   fetchMyAPI()
  // }, [])

  /*Get the ratings */
  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
  }

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 750,
        padding: 10,
        margin: "20px 0",
        minHeight: 150,
    },
    button:{
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 200,
        padding: 10,
        margin: 20,
    }
}
  const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value => (
        setCurrentValue(value)
    );

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
  
    

      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment.id}
            comment={rootComment}
            replies={getReplies(rootComment.id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={deleteComment}
            updateComment={updateComment}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;