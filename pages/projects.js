import Nav from "../components/Footer/Nav";
import Head from "next/head";

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
            src="/static/music.png"
            alt="My Github"
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
              src="/static/soft.png"
              alt="My Github"
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
              src="/static/cv.png"
              alt="My Github"
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
              src="/static/crypto.png"
              alt="My Github"
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
