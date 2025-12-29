import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/api";
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const FetchRq = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts",page],
    queryFn: () => fetchPosts(page),
  });

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return <div>Error: {error.message || "Something went wrong!"}</div>;

  return (
    <div>
      <ul className="section-accordion">
        {data?.map((post) => {
          return (
            <li key={post?.id}>
              <p>{post?.id}</p>
              <p>{post?.title}</p>
              <p>{post?.body}</p>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <NavLink to={`/rq/${post?.id}`}>
                  <button>View Detail</button>{" "}
                </NavLink>
              </div>
            </li>
          );
        })}
      </ul>

      <div
        style={{ display: "flex", marginTop: "10px" }}
        className="pagination-section container"
      >
        <button onClick={handlePrev} disabled={page === 0}>Prev</button>
        <h2 style={{ color: "white" }}>{page}</h2>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default FetchRq;
