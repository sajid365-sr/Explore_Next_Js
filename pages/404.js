import Image from "next/image";
import Link from 'next/link';


const Error = () => {
    return (
        <div className="h-[100vh] flex flex-col gap-3 justify-center items-center">
            <Image  src='/error.jpg' height={600} width={800}></Image>
            <Link href='/'>
            <button className="btn btn-info">Back to home</button>
            </Link>
        </div>
    );
};

export default Error;