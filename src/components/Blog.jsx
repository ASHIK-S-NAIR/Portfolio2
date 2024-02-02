import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="wrap blog-wrap">
        <div className="blog-header-sec">
          <h1 className="blog-header">All Blogs</h1>
          <hr />
        </div>
        <div className="blog-index-sec">
          <div className="blog-index">
            <div className="blog-index-left">
              <p className="blog-index-date">January 26, 2024</p>
            </div>
            <div className="blog-index-right">
              <Link to="/blog/understading_osi_model">
                <h2 className="blog-index-header">From Physical to Application: Demystifying OSI Model Layers</h2>
              </Link>
              <div className="blog-index-tag-sec">
                <p className="blog-index-tag">NETWORKING BACKEND</p>
              </div>
            </div>
          </div>
          <div className="blog-index">
            <div className="blog-index-left">
              <p className="blog-index-date">February 1, 2024</p>
            </div>
            <div className="blog-index-right">
              <Link to="/blog/Understanding_the_Backbone_of_the_Internet">
                <h2 className="blog-index-header">
                  Understanding the Backbone of the Internet: HTTP, HTTPS, SMTP,
                  DNS, TCP, UDP, and WebSocket Explained
                </h2>
              </Link>
              <div className="blog-index-tag-sec">
                <p className="blog-index-tag">
                  NETWORKING BACKEND INTERNETPROTOCOLS
                </p>
              </div>
            </div>
          </div>
          <div className="blog-index">
            <div className="blog-index-left">
              <p className="blog-index-date">February 1, 2024</p>
            </div>
            <div className="blog-index-right">
              <Link to="/blog/Demystifying_Network_Address_Translation">
                <h2 className="blog-index-header">
                Demystifying Network Address Translation (NAT): Bridging the Gap Between Private and Public IP Addresses
                </h2>
              </Link>
              <div className="blog-index-tag-sec">
                <p className="blog-index-tag">
                  NETWORKING BACKEND
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
