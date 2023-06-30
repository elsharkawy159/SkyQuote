import Head from "next/head.js";
import React from "react";

function about() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Our website is a platform where you can freely share your favorite quotes and discover new ones from other users. Whether it's a thought-provoking line from a book or a motivational quote from a famous personality, you can easily add it to our collection for everyone to see"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100 text-center profileBg text-light">
        <div className="container">
          <h1>About Us</h1>
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quos voluptas placeat, accusamus beatae, praesentium quae ratione
            inventore nostrum possimus vero ex, itaque facilis iste. Cupiditate
            rerum repudiandae, molestiae numquam dolorem harum cumque porro
            tempore, fugit reiciendis dignissimos tenetur non, a inventore
            laborum praesentium nostrum atque dicta laboriosam. Mollitia,
            similique!
          </p>
        </div>
      </section>
    </>
  );
}

export default about;
