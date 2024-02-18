import { useEffect, useState } from "react";
import { Row } from "@canonical/react-components";

import { getBlogs } from "./api";
import { Blog } from "./types";
import Card from "./components/Card";

function App() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      console.log(data);
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const TitleRenderer = ({ title, link }: { title: string; link: string }) => {
    return <a href={link}>{title}</a>;
  };

  return (
    <>
      <header className="l-navigation-bar">
        <div className="l-navigation__drawer" style={{ background: "red" }}>
          Test
        </div>
        <div className="l-navigation__title">Blogs</div>
      </header>
      <main className="l-main">
        <Row className="u-equal-height main-row">
          {blogs.map((blog) => {
            const Title = <TitleRenderer title={blog.title.rendered} link={blog.link} />;
            const publishDate = new Date(blog.date_gmt).toLocaleDateString();
            return (
              <Card
                key={`blog-card-${blog.id}`}
                title={Title}
                titleString={blog.title.rendered}
                imageLink={blog.featured_media}
                author={blog._embedded.author[0] || null}
                publishDate={publishDate}
                type={blog.type}
                category={blog.parsedCategories?.join(", ")}
              ></Card>
            );
          })}
        </Row>
      </main>
    </>
  );
}

export default App;
