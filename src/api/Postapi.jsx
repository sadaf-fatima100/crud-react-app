import axios from 'axios'



let api = axios.create({
    baseURL : "https://68c40f5081ff90c8e61b1691.mockapi.io/crud-op"
});

//post mehod

export const addNewPost = (newPost) =>{
    return api.post('/', newPost)
}
//post mehod

export const deletePost = (id) =>{
    return api.delete(`/${id}`)
}
//get method
export const getAllPosts = () =>{
    return api.get('/')
}

// update  method


export const updatePost = (id, updatedPost) => {
    return api.put(`/${id}`, updatedPost);
  };
  