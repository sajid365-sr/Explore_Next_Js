import Link from "next/link";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";


export default function Home() {

  return (
    <div>
     <Banner/>
     <h1 className="text-3xl font-semibold text-center my-10">This is home page</h1>
     <Link className="btn btn-primary" href='/posts'>Posts</Link>

     <Footer/>
    </div>
  );
}
