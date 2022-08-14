import Nav from "../components/Footer/Nav";
import Head from "next/head";
import Script from "next/script";

const Home = () => {
  return (
    <>
      <style jsx>{`
        h1 {
          color: lightGray;
          text-align: center;
          position: fixed;
          top: 25%;
          left: 35%;
          font-size: 60px;
        }
        h2 {
          color: lightGray;
          text-align: center;
          position: fixed;
          top: 50%;
          left: 35%;
          font-size: 40px;
        }
        h1:hover,
        h2:hover {
          color: black;
        }

        img {
          width: 300px;
          height: auto;
          margin-left: 130px;
          margin-top: 70px;
          border-radius: 75px;
          transition: transform 1.5s ease-in-out;
        }

        img:hover {
          transform: rotate(360deg);
        }
      `}</style>
      {/* Google tag (gtag.js)  */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_MESUREMENT_ID}`}
      />

<Script id="ga-script" strategy="lazyOnload">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.GOOGLE_ANALYTICS_MESUREMENT_ID}', {
      page_path: window.location.pathname,
    });
        `}
</Script>
      <Head>
        <title>Vincents&apos;s Portfolio</title>
      </Head>
      <div className="body">
        <Nav />

        <img
          src="/static/me.jpg"
          width={"300px"}
          height={"300px"}
          className="imgs"
          alt="This is me"
        />

        <h1>Hey ! Im Vincent </h1>
        <h2>Welcome to my portfolio !</h2>
      </div>
    </>
  );
};
export default Home;
