
import React from 'react';
import Link from "next/link";
import Head from 'next/head';

const Blog = () => {
    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            <h2>This is blog page</h2>
            <Link href="/blog/blog1">Blog Page 1</Link>
        </div>
    );
};

export default Blog;