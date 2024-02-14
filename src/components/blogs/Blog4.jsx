const Blog4 = () => {
  return (
    <div className="blogItem-body-right">
      <p className="blogItem-body-p">
        Webhook is an automated server-to-server communication based on events.
        It is an HTTP request with a payload from a sender server to a receiver
        server sent based on some specific events automatically. Webhook is a
        one-way communication in which a sender server notifies a receiving
        server about an event triggered at the sender server maybe along with
        some additional payload.
      </p>
      <p className="blogItem-body-p">
        Imagine if one server needs to use a service from another server, but
        waiting for a response via a traditional HTTP request becomes tedious,
        especially if the second server takes its sweet time. That's where
        webhooks swoop in to save the day. Instead of playing the waiting game
        with HTTP requests and delayed responses, Server A can register a
        webhook on Server B, providing a URL. Then, when Server B finishes its
        task, it notifies Server A via that URL, sending the response along with
        any necessary data payload.
      </p>
      <p className="blogItem-body-p">
        Server A can enhance its interaction with Server B by not only receiving
        notifications upon completion but also at intermediate events if
        required. By registering a webhook along with a URL on Server B, Server
        A can ensure it's triggered for the necessary events, providing greater
        flexibility and real-time communication between the servers.
      </p>
      <p className="blogItem-body-p">
        Ever wondered how those 'Pay' buttons work when you're shopping online?
        Well, a big part of it involves webhooks, especially in payment
        services. Picture this: you're on an e-commerce site, about to buy that
        awesome thing you've been eyeing. When you hit 'Pay,' it's not just
        magic that makes the transaction happen. It's third-party payment
        services like Stripe, RazorPay, or PayTm doing the heavy lifting. But
        here's the thing: between you hitting 'Pay' and the money moving from
        your account to the seller's, there are a bunch of steps -
        authentication, checking your account balance, and whatnot. This can
        take some time, and the e-commerce business doesn't always know what's
        going on in real time. They could keep bugging the payment service with
        HTTP requests to get updates, but that's a bit of a clunky method.
        Luckily, modern payment gateways offer something cooler: webhooks. These
        let businesses sign up for real-time notifications about payment stages,
        so they know exactly what's happening without all the hassle of constant
        polling.
      </p>
    </div>
  );
};

export default Blog4;
