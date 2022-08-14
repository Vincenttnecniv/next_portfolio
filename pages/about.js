import Nav from "../components/Footer/Nav";
import Head from "next/head";
import Script from "next/script";

const About = () => {
  return (
    <>
      <style jsx>{`
        h1 {
          color: lightGray;
          text-align: center;
          position: fixed;
          top: 10%;
          left: 25%;
          font-size: 60px;
        }
        h2 {
          color: lightGray;
          text-align: center;
          top: 30%;
          left: 35.5%;
          font-size: 30px;
        }
        .container {
          height: 440px;
          width: 410px;
          border: 5px solid orange;
          margin-top: 190px;
          margin-left: 600px;
          font-align: center;
          white-space: pre-line;
          font-size: 12px;
          display: inline-block;
          border-radius: 25px;
          font-family: cambria;
        }
        a {
          color: lightGray;
        }
        a:hover {
          color: orange;
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
        <title>About</title>
      </Head>
      <div>
        <Nav />
        <h1>
          This is where you can read more <br /> about my portfolio !
        </h1>
      </div>
      <div className="container">
        <h2>
          This is a portfolio created by <br />
          Vincent v.d. Westhuizen.
          <br />
          <br />
          This portfolio is created for <br />
          a task at
          <br />
          <a
            href="https://www.hyperiondev.com/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            HyperionDev
          </a>
          <br />
          and to serve as a portfolio.
          <br />
          <br />
          This task is only created <br />
          with Next.js and uses jsx for styling.
        </h2>
      </div>
    </>
  );
};
export default About;
