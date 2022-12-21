import { useRouter } from "next/router";
import React from "react";



const PostDetails = ({ post }) => {

const router = useRouter();

const handleBack = () => {
    router.push('/posts'); // alternative of <Link>
    
}

  return (
    <div className="card my-10 mx-10 bg-emerald-700 text-primary-content">
      <div className="card-body">
        <p>Post ID: {post?.id}</p>
        <h2 className="card-title">Title: {post?.title}</h2>
        <p>Post: {post?.body}</p>
        <button onClick={handleBack} className="btn btn-outline w-1/2 mx-auto mt-3">Back to post</button>
      </div>
    </div>
  );
};

// Fetch data by dynamic id
export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};

//  Get dynamic id
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  const paths = posts?.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export default PostDetails;
