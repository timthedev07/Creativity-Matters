import "./css/master.css";
import React, { useEffect, useState } from "react";
import { generateVideo } from "./utils/Youtube";

function App() {
  const [id, setId] = useState<string>("");
  const [ok, setOk] = useState<boolean>(true);

  useEffect(() => {
    // make it so it's less likely to fetch a youtube video
    generateVideo().then((data) => {
      if (!data) return setOk(false);
      setId(data);
    });
  }, []);

  return (
    <div className="App">
      <div className="app-content">
        <h1 className="heading">Creativity Matters</h1>
        <h1 className="subheading">Do something creative everyday!</h1>

        <div className="video-player-wrapper">
          {ok ? (
            <iframe
              className="video-player"
              title="video"
              src={`https://www.youtube.com/embed/${id}?showinfo=0&enablejsapi=1&origin=https://creativity-matters.netlify.app`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            <h2
              style={{ fontSize: "2.5vw" }}
              id="error-heading"
              className="video-player"
            >
              😭 We are so sorry about the inconvenience, our YouTube quota has
              exceeded, we can't get any videos for you today. But check out the
              content below.
            </h2>
          )}
        </div>
        <div className="all-text-container">
          <div className="text-block">
            <h2 className="block-heading">What is creativity?</h2>
            <p className="block-text">
              "Creativity is the process of making an idea your own by modifying
              something that already exists or combining ideas together to make
              something satisfying."
            </p>
          </div>
          <div className="text-block">
            <h2 className="block-heading">Why does creativity matter?</h2>
            <p className="block-text">
              Creativity allows us to consider things from another perspective,
              and thus creates more possible ways of overcoming a challenge.
              Creativity is also the key to innovation, innovators need open
              minds to create new things. As a matter of fact, statistics show
              that creative people tend to live longer.
            </p>
          </div>
          <div className="text-block">
            <h2 className="block-heading">What activities can I do?</h2>
            <ul className="block-text">
              <li>Make some DIY crafts</li>
              <li>
                Read some interesting books(or even start to write your own
                stories)
              </li>
              <li>Learn a new language if you are a language lover.</li>
              <li>Write a song</li>
              <li>Write a poem</li>
              <li>LEGO</li>
              <li>Design a merch</li>
              <li>Create playlists based on the style of different songs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
