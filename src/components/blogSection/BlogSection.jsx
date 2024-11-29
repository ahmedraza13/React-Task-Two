import { blogsData, tags, cardContent } from "../../constant/blogs";
import TopicItem from "../topicItem/TopicItem";
import BlogCard from "../blogCard/BlogCard";
import SideCard from "../sideCard/SideCard";

export default function BlogSection() {
  return (
    <div className="main">
      <div className="container">
        {/*
      - BLOG SECTION
    */}
        <div className="blog">
          <h2 className="h2">
            {20 > 10 ? "Latest Blogs" : "Condition is false"}
          </h2>
          <div className="blog-card-group">
            {blogsData.map((item, index) => {
              return <BlogCard key={index} data={item} />;
            })}
          </div>
          <button className="btn load-more">Load More</button>
        </div>
        {/*
      - ASIDE
    */}
        <div className="aside">
          <div className="topics">
            <h2 className="h2">Topics</h2>
            <TopicItem title="Database" />
            <TopicItem title="Accessibility" />
            <TopicItem title="Web Performance" />
          </div>
          <div className="tags">
            <h2 className="h2">Tags</h2>
            <div className="wrapper">
              {tags?.map((item, index) => {
                return <button className="hashtag">{item}</button>;
              })}
            </div>
          </div>

          {cardContent?.map((item, index) => {
            return <SideCard key={index} data={item} />; 
          })}
        </div>
      </div>
    </div>
  );
}
