import React, { useContext } from "react";
import "./BlogPost.css";
import { MdOutlineArrowForward } from "react-icons/md";
import { BlogPosts } from "../Data/Data";
import { ContextApi } from "../ContextApi/ContextApi.js";

const BlogPost = () => {
  const { darkMode } = useContext(ContextApi);
  return (
    <section className={darkMode ? "blog" : "blog-light"}>
      <div className="blog_title">
        <h2>My Blogs</h2>
        <h1>Our Latest BlogPosts</h1>
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-x-[70px] gap-y-[50px]">
        {BlogPosts.map((project, index) => {
          return (
            <section className={darkMode ? "blog_img" : "blog_img-light" }>
              <div className="img_hover">
                <img src={project.img} alt="blog" />
              </div>
              <div className="title">
                 Web Design &bull; <span>August 22 2024</span>
              </div >
              <h2>{project.title}</h2>
              <h3>{project.content}</h3>
              <button>
                Read More <MdOutlineArrowForward className="blog_arrow" />
              </button>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default BlogPost;
