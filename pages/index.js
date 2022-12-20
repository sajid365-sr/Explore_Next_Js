
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";



export default function Home() {

  return (
    <div>
     <Head>
        <title>Home</title>
     </Head>
      <h1>Hello Next Js</h1>
      <Link href="/blog" style={{backgroundColor:'orange', padding:'5px 10px', borderRadius:'5px'}}>blog</Link>

      <Image src="/nature.jpg" width={500} height={300}></Image>
    </div>
  );
}
