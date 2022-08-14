import Nav from "../components/Footer/Nav";
import Head from "next/head";
import Script from "next/script";

const Projects = () => (
  <>
    <style jsx>{`
      h1 {
        color: lightGray;
        text-align: center;
        left: 10%;
        font-size: 80px;
        padding: 40px;
        padding-top: 70px;
      }

      a:hover {
        color: orange;
      }

      img {
        margin-left: 570px;
        margin-top: 30px;
        padding: 30px;
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
      <title>Projects</title>
    </Head>
    <div>
      <Nav />
      <div className="task21">
        <h1>See my music site</h1>
        <a
          href="https://vincenttnecniv.github.io/Search-app/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img
            className="img1"
            src="/static/music.PNG"
            alt="music-site"
            width="550"
            height="450"
          />
        </a>
        <br />
        <div className="task21">
          <h1>See my catalogue site</h1>
          <a
            href="https://vincenttnecniv.github.io/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img
              className="img1"
              src="/static/soft.PNG"
              alt="catalogue-site"
              width="550"
              height="450"
            />
          </a>
        </div>
        <br />
        <div className="task21">
          <h1>See my resume site</h1>
          <a
            href="https://vincenttnecniv.github.io/Vincent_v.d._Westhuizen_resume/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img
              className="img1"
              src="/static/cv.PNG"
              alt="resume-site"
              width="550"
              height="450"
            />
          </a>
        </div>
        <div className="task21">
          <h1>See my crypto site</h1>
          <a
            href="https://vincenttnecniv.github.io/crypto-app/"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img
              className="img1"
              src="/static/crypto.PNG"
              alt="crypto-site"
              width="550"
              height="450"
            />
          </a>
        </div>
      </div>
    </div>
  </>
);
Projects.displayName = "Projects";
export default Projects;
