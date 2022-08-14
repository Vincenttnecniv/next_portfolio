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
      <Script id="gtm-script" async src="https://www.googletagmanager.com/gtag/js?id=G-SL86BSM10N"></Script>
<Script id="gtm-script">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag(&apos;js&apos;, new Date());

  gtag(&apos;config&apos;, &apos;G-SL86BSM10N&apos;);
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
