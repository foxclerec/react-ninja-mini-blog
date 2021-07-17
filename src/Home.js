import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading ...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
