
import React from 'react';

const Comments = ({comments}) => {
    
    return (
        <div>
            {
                comments.map((comment, index) => 
                <h1 className='my-10 mx-10 bg-gray-600 px-5 rounded-lg py-3 text-white' key={comment.id}>Comment: {index + 1} {comment.body}</h1>
                
                )
            }
        </div>
    );
};

// Fetching data
export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();


    return {
        props:{
            comments: data
        }
    }
}

export default Comments;