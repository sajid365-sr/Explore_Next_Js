import Link from "next/link";


export default function Home() {

  return (
    <div>
     
     <h1 className="text-3xl font-semibold text-center my-10">This is home page</h1>
     <Link className="btn btn-primary" href='/posts'>Posts</Link>
    </div>
  );
}
