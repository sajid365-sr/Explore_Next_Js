
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-gray-400'>
            <div className='max-w-screen-lg mx-auto py-3'>

                <ul className='text-gray-800 flex gap-5 justify-center text-xl font-serif font-semibold'>
                    <Link href="/">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/news">News</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;