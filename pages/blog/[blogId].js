
import { useRouter } from 'next/router';
import React from 'react';

const blogId = () => {

    const router = useRouter();
    const id = router.query.blogId;
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-10'>This is a dynamic page of {id}</h1>
        </div>
    );
};

export default blogId;