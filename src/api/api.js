import axios from "axios";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchPosts = async (page) => {
  const res = await api.get(`/posts?_start=${page}&_limit=2`);
  return res.status === 200 ? res.data : [];
};

export const fetchPostById = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.status === 200 ? res.data : {};
};

// const getPostData = async () => {
//   try {
//     const res = await fetchPosts();
//   } catch (err) {
//     console.log(err);
//     return [];
//   }
// };

// delete post
export const deletePost = async (id) => {
  const res = await api.delete(`/posts/${id}`);
  return res;
};

// update post
export const updatePost = async (id) => {
  const res = await api.patch(`/posts/${id}`, {title:'updated title!'});
  return res;
};

// Infinite scroll
export const fetchUsers = async ({pageParam = 1})=>{
  try {
    const res = await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`);
    return res.data;
  } catch (error) {
    console.log(error)
  }
}