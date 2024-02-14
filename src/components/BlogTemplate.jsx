import Ashik from "../images/ashik.jpg";
import Understanding_OSI_Model_img1 from "../images/Understanding_OSI_Model_img1.png";

export const BlogTemplate = ({ date, heading, tags, blogBody: BlogBody }) => {
  return (
    <section className="blogItem-section">
      <div className="wrap blogItem-wrap">
        <div className="blogItem-header-sec">
          <p className="blogItem-date">{date}</p>
          <h1 className="blogItem-header">{heading}</h1>
          <div className="blogItem-body-identifier blogItem-header-identifier-tab">
            <img src={Ashik} alt="" className="blogItem-body-identifier-img" />
            <div className="blogItem-body-identifier-info">
              <p className="blogItem-body-identifier-name">Ashik S Nair</p>
              <p className="blogItem-body-identifier-id">Ashik</p>
            </div>
          </div>
        </div>
        <hr className="blogItem-hr" />
        <div className="blogItem-body-sec">
          <div className="blogItem-body-left">
            <div className="blogItem-body-identifier">
              <img
                src={Ashik}
                alt=""
                className="blogItem-body-identifier-img"
              />
              <div className="blogItem-body-identifier-info">
                <p className="blogItem-body-identifier-name">Ashik S Nair</p>
                <p className="blogItem-body-identifier-id">Ashik</p>
              </div>
            </div>
            <hr />
            <div className="blogItem-body-tag-sec">
              <p className="blogItem-body-tag-header">TAGS</p>
              <p className="blogItem-body-tags">{tags}</p>
            </div>
          </div>
          <BlogBody />
        </div>
      </div>
    </section>
  );
};
