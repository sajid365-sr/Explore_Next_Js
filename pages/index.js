import Link from "next/link";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";

export default function Home({ posts }) {
  return (
    <div>
      <Banner />
      <h1 className="text-3xl font-semibold text-center my-10">
        This is home page
      </h1>

      <div className="my-10">
        {posts?.map((post, index) => (
          <div
            key={post.id}
            className="card mt-10 container mx-auto bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title capitalize text-gray-200">{post?.title}</h2>
              <p>{post?.body}</p>
            </div>
          </div>
        ))}
        <div className="text-center">
          <Link
            className="btn btn-sm rounded-none mt-5 text-lg px-5 btn-primary"
            href="/posts"
          >
            See More
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
