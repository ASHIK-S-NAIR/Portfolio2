import Ashik from "../../images/favicon.png";
import Understanding_OSI_Model_img1 from "../../images/Understanding_OSI_Model_img1.png";

export const Understanding_OSI_Model = () => {
  return (
    <section className="blogItem-section">
      <div className="wrap blogItem-wrap">
        <div className="blogItem-header-sec">
          <p className="blogItem-date">January 26, 2024</p>
          <h1 className="blogItem-header">Understanding OSI Model</h1>
          <div className="blogItem-body-identifier blogItem-header-identifier-tab">
            <img src={Ashik} alt="" className="blogItem-body-identifier-img" />
            <div className="blogItem-body-identifier-info">
              <p className="blogItem-body-identifier-name">Ashik S Nair</p>
              <p className="blogItem-body-identifier-id">Ashik</p>
            </div>
          </div>
        </div>
        <hr />
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
              <p className="blogItem-body-tags">NETWORKING BACKEND</p>
            </div>
          </div>
          <div className="blogItem-body-right">
            <p className="blogItem-body-p">
              The OSI (Open Systems Interconnection) model is a conceptual
              framework for understanding network communication protocols. It is
              divided into seven layers, each responsible for specific functions
              in the network communication process.
            </p>
            <img
              src={Understanding_OSI_Model_img1}
              alt=""
              className="blogItem-body-img"
            />
            <p className="blogItem-body-p">
              1. Physical Layer: This layer is responsible for the movement of
              individual bits from one device to another. It deals with the
              actual physical transmission medium, such as copper cables
              (electrical signals), Fiber optics (Light signals), and Wireless
              communication (Electromagnetic signals). It also defines the
              topological configuration and is responsible for converting
              digital data into signals suitable for transmission over the
              chosen medium.
            </p>
            <p className="blogItem-body-p">
              2. Data Link Layer: This layer is responsible for moving frames
              from one hop (node) to the next hop (node). Its primary
              functionalities include framing, physical addressing, flow
              control, error detection, and correction, and access control.
            </p>
            <p className="blogItem-body-p">
              3. Network Layer: The Network layer is responsible for the
              delivery of individual packets from source to destination. Its
              functionalities include Logical Addressing, Fragmentation,
              Routing, etc.
            </p>
            <p className="blogItem-body-p">
              4. Transport Layer: This layer is responsible for
              process-to-process delivery end-to-end delivery or
              process-to-process. The transport layer ensures the orderly
              delivery of data. The data in the Transport layer are called
              segments.
            </p>
            <p className="blogItem-body-p">
              5. Session Layer: This layer is responsible for establishing,
              managing, and terminating communication sessions between two
              devices.
            </p>
            <p className="blogItem-body-p">
              6. Presentation Layer: This layer is responsible for ensuring that
              the data sent from the application layer of one system can be
              properly read by the application layer of another system. It deals
              with data format translation, encryption, and compression.
            </p>
            <p className="blogItem-body-p">
              7. Application Layer: The topmost layer is responsible for
              providing network services directly to end-users or applications.
              Its primary purpose is to enable communication between software
              applications on different devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};