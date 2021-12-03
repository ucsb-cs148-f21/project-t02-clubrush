import { useLocalStorage, getStorageValue } from "./useLocalStorage.js"
const website = process.env.REACT_APP_website
export const GetComments = async () => {
    fetch(`${website}/clubs/`)
      .then(async (res) => {
        const data = await res.json();
        console.log(data)
        return data;

      }
    );



    // return [
    //   {
    //     id: "1",
    //     body: "First comment",
    //     username: "Jack",
    //     userId: "1",
    //     parentId: null,
    //     createdAt: "2021-08-16T23:00:33.010+02:00",
    //   },
    //   {
    //     id: "2",
    //     body: "Second comment",
    //     username: "John",
    //     userId: "2",
    //     parentId: null,
    //     createdAt: "2021-08-16T23:00:33.010+02:00",
    //   },
    //   {
    //     id: "3",
    //     body: "First comment first child",
    //     username: "John",
    //     userId: "2",
    //     parentId: "1",
    //     createdAt: "2021-08-16T23:00:33.010+02:00",
    //   },
    //   {
    //     id: "4",
    //     body: "Second comment second child",
    //     username: "John",
    //     userId: "2",
    //     parentId: "2",
    //     createdAt: "2021-08-16T23:00:33.010+02:00",
    //   },
    // ];
  };
  
  export const createComment = async (text, parentId = null) => {
    const isSignedIn = getStorageValue("isSignedIn")
    const user = getStorageValue("user")
    if(!isSignedIn) {
      return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "Morgan",
        createdAt: new Date().toISOString(),
      };
    }
    console.log("here before fetch")
    const data = await fetch(`${website}/users/${user}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
      console.log("here after fetch")
    console.log(data)
    const username = await data.json()
    console.log(username)
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: username.firstname,
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };