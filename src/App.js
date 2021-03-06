import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./data";

function App() {
  const [date, setDate] = useState(null);
  getData();
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  const ImgWithFallback = ({
    src,
    fallback,
    type = "image/webp",
    ...delegated
  }) => {
    return (
      <picture>
        <source srcSet={src} type={type} />
        <img src={fallback} alt="test" {...delegated} />
      </picture>
    );
  };
  return (
    <main>
      <h1>Create React App + Go API</h1>
      <h2>
        Deployed with{" "}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <picture>
        <source srcSet="./yoyo.jpg" type="image/jpeg" />
        <img src="./yoyo.jpg" alt="Brooklyn Bridge - New York"></img>
      </picture>
      <ImgWithFallback
        src={require("./bg.webp")}
        fallback={require("./bg.jpg")}
        alt="test"
      />
      <p>
        <a
          href="https://github.com/zeit/now/tree/master/examples/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{" "}
        was bootstrapped with{" "}
        <a href="https://facebook.github.io/create-react-app/">
          Create React App
        </a>{" "}
        and contains three directories, <code>/public</code> for static assets,{" "}
        <code>/src</code> for components and content, and <code>/api</code>{" "}
        which contains a serverless <a href="https://golang.org/">Go</a>{" "}
        function. See{" "}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Go
        </a>
        .
      </p>
      <br />
      <h2>The date according to Go is:</h2>
      <p>{date ? date : "Loading date..."}</p>
    </main>
  );
}

export default App;
