import { Link } from "react-router-dom";

const Blog = () => {
  const BlogIndex = ({ date, heading, tags, link }) => {
    return (
      <div className="blog-index">
        <div className="blog-index-left">
          <p className="blog-index-date">{date}</p>
        </div>
        <div className="blog-index-right">
          <Link to={`/blog/${link}`}>
            <h2 className="blog-index-header">{heading}</h2>
          </Link>
          <div className="blog-index-tag-sec">
            <p className="blog-index-tag">{tags}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="blog-section">
      <div className="wrap blog-wrap">
        <div className="blog-header-sec">
          <h1 className="blog-header">All Blogs</h1>
          <hr className="blog-hr" />
        </div>
        <div className="blog-index-sec">
          <BlogIndex
            date="January 26, 2024"
            heading="From Physical to Application: Demystifying OSI Model Layers"
            tags="NETWORKING BACKEND"
            link="understading_osi_model"
          />
          <BlogIndex
            date="February 1, 2024"
            heading="Understanding the Backbone of the Internet: HTTP, HTTPS, SMTP,
                  DNS, TCP, UDP, and WebSocket Explained"
            tags="NETWORKING BACKEND INTERNETPROTOCOLS"
            link="Understanding_the_Backbone_of_the_Internet"
          />
          <BlogIndex
            date="February 1, 2024"
            heading="Demystifying Network Address Translation (NAT): Bridging the
                  Gap Between Private and Public IP Addresses"
            tags="NETWORKING BACKEND"
            link="Demystifying_Network_Address_Translation"
          />
          <BlogIndex
            date="February 12, 2024"
            heading="Unveiling the Power of Webhooks in Modern Server Architecture"
            tags="BACKEND COMMUNICATION"
            link="Unveiling_the_Power_of_Webhooks_in_Modern_Server_Architecture"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
