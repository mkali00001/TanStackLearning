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
