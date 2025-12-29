import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";
import { fetchPostById } from "../../api/api";
import { useParams } from "react-router-dom";

const FetchInd = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["postById"],
    queryFn: async () => {
      return await fetchPostById(id);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return <div>Error: {error.message || "Something went wrong!"}</div>;

  return (
    <div className="section-accordion">
      <p>Individual data</p>
      <p>Post Id : {data?.id} </p>
      <p> UseId : {data?.userId} </p>
      <p>Title : {data?.title} </p>
      <p>Body : {data?.body} </p>
    </div>
  );
};

export default FetchInd;
