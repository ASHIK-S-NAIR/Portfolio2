import React from "react";

const Blog2 = () => {
  return (
    <div className="blogItem-body-right">
      <p className="blogItem-body-p">
        HTTP (Hypertext Transfer Protocol ) is a basic protocol used for
        communication between a client and server in the world of the internet.
        HTTP is based on Request and Response model, ie the client initiates a
        request and the server responds to the request. Stateless protocol means
        it does not maintain any user information. Both request and data will be
        only sent in one connection also known as In-band protocol. Port number
        80 is assigned to HTTP.
      </p>
      <p className="blogItem-body-p">
        Two types of HTTP protocols are: Non Persistent(1.0) Persistent(1.1) Non
        Persistent(1.0) In a non-persistent connection, one TCP connection is
        made for each request/response. The client opens a TCP connection and
        sends a request, the server sends a response and closes the connection
        Persistent(1.1) In a persistent connection, the server leaves the
        connection open for more requests after a response. The server closes
        the connection at the request of the client or when time out occurs.
      </p>
      <p className="blogItem-body-p">
        HTTPS (Hypertext Transfer Protocol Secure ) is a secured version of
        HTTP. The data transferred between the user's web browser and the
        website is secured by encryption. HTTPS is based on TLS ( Transport
        Layer Security ) encryption protocol that ensures secured communication
        between two parties.
      </p>
      <p className="blogItem-body-p">
        SMTP(Simple Mail Transport Protocol) is a protocol used for sending an
        email from a sender to a receiver. SMTP is used twice during this
        process, between the sender and the sender's mail server, and between
        the sender's mail server and the receiver's mail server. SMTP is a
        text-based protocol and uses port number 25 at TCP. SMTP can only handle
        text-based messages, ie 7 bit ASCII text. It can't transfer another type
        of data like images, video, audio, binary or executable files.
      </p>
      <p className="blogItem-body-p">
        MIME is a supplementary protocol that allows non-ASCII data to be sent
        through SMTP. SMTP is a connection-oriented and stateless protocol ie it
        doesn't maintain any information of the user. It uses a persistent TCP
        connection ie multiple emails can be sent with a single connection.
      </p>
      <p className="blogItem-body-p">
        DNS(Domain Name System) Domain Name System Protocol helps to discover
        websites using human-readable hostname instead of numeric IP address.
        DNS protocol is based on UDP and uses port number 53. The DNS acts like
        a phone book, ie whenever a user type a domain name like google.com into
        the address bar of the web browser the DNS finds the right IP address
        for the same. DNS is a lightweight, stateless, connectionless and
        non-persistent protocol.
      </p>
      <p className="blogItem-body-p">
        TCP(Transmission Control Protocol) is a connection-oriented Transport
        Layer Protocol. It is responsible for a reliable process to process
        delivery of the entire message. TCP is a connection-oriented protocol
        with 3 phases. Connection establishment Data transfer Connection
        Termination TCP uses a three-way handshake to establish a connection and
        also ensures error control and flow control. TCP is the base protocol
        for many application layer protocols like HTTP, SMTP, FTP etc.
      </p>
      <p className="blogItem-body-p">
        UDP(User Datagram Protocol) is an unreliable and connectionless
        protocol. It is a simple protocol and does not provide flow control,
        error control or congestion control protocol. It has a simple header and
        fixed size and does not have any acknowledgement. UDP is used for DNS
        and SNMP.
      </p>
      <p className="blogItem-body-p">
        WebSocket is a communication protocol that provides full-duplex
        communication channels over a single, long-lived connection. It is
        designed to be implemented in web browsers and web servers but can also
        be used in other contexts. WebSocket is distinct from the traditional
        request-response model of HTTP (Hypertext Transfer Protocol). With
        WebSocket, a persistent connection is established between the client and
        the server, allowing both parties to send messages to each other at any
        time. This makes WebSocket well-suited for real-time applications,
        including chat systems, online gaming, financial trading platforms, and
        other scenarios where low-latency communication is crucial.
      </p>
    </div>
  );
};

export default Blog2;
