export const Blog3 = () => {
  return (
    <div className="blogItem-body-right">
            <p className="blogItem-body-p">
              The primary purpose of NAT is to convert a private address within
              a private or local network to a public address. NAT was originally
              designed to solve the limited IP address problem. Before the rise
              of IPV6 IPV4 was commonly used as the standard version of Internet
              Protocol Address. Since IPV4 Addresses were limited in number
              there was a shortage of public addresses for assigning all the
              devices.
            </p>
            <p className="blogItem-body-p">
              Hence the concept of assigning private addresses within a network
              was introduced. A private address assigned within a network can be
              used as a private address inside a different network because these
              addresses are only valid within their respective networks.
            </p>
            <p className="blogItem-body-p">
              Suppose a student of a University trying to access his/her
              Facebook account from the university computer lab. All the
              computers inside the computer lab are under the university network
              hence all are assigned with private addresses. So the private
              address sends a packet to the public address(Facebook). The packet
              contains the source address as a private IP(eg 10.10.0.1) and the
              destination address as a public IP(eg 255.25.1.1).
            </p>
            <p className="blogItem-body-p">
              But when the packet reaches NAT, NAT replaces the private IP from
              the source to the public IP of the network and forwards the
              packet. And when there is a reply from Facebook (public IP) the
              packet contains the source as public IP(eg 255.25.1.1) and the
              destination address as public IP of the network because it doesn't
              know about the private IP. When this reply packet reaches NAT, NAT
              replaces the destination public IP to the Private IP. NAT uses a
              translation table to store private and public IPs for these
              replacing processes.
            </p>
            <p className="blogItem-body-p">
              NAT provides a level of security by hiding the internal private IP
              addresses of devices from external networks. Only the NAT device's
              public IP address is visible on the Internet, adding a layer of
              obscurity and protection.
            </p>
          </div>
  );
};
