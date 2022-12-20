
import React from 'react';
import Link from "next/link";
import Head from 'next/head';
import Image from 'next/image';

const Blog = () => {
    return (
        <div>
            <Head>
                <title>Blog Page</title>
            </Head>
            <h2>This is blog page</h2>
            <Link href="/blog/blog1">Blog Page 1</Link>
            <Image src='/nature.jpg' width={800} height={500}></Image>
        </div>
    );
};

export default Blog;