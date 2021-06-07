import "./css/master.css";
import React, { useEffect, useState } from "react";
import { fetchVideo } from "./utils/Youtube";

function App() {
  const [id, setId] = useState<string>("");

  useEffect(() => {
    fetchVideo().then((data) => {
      setId(data);
    });
  }, []);

  return (
    <div className="App">
      <div className="app-content">
        <h1 className="heading">Creativity Matters</h1>
        <h1 className="subheading">Do something creative everyday!</h1>
        <div className="video-player-wrapper">
          <iframe
            className="video-player"
            title="video"
            src={`https://www.youtube.com/embed/${id}?showinfo=0&enablejsapi=1&origin=http://localhost:3000`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* https://serpapi.com/search?q=coffee&location=Sweden&google_domain=google.se&gl=se&hl=sv&num=100 */}
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
            Creativity is also the key to innovation, innovators need open minds
            to create new things. As a matter of fact, statistics show that
            creative people tend to live longer.
          </p>
        </div>
        <div className="text-block">
          <h2 className="block-heading">What activities can I do?</h2>
          <p className="block-text">
            <ul className="block-list">
              <li>Do some DIY crafts</li>
              <li>
                Read some interesting books(or even start to write your own
                stories)
              </li>
              <li>Learn a new language if you are a language lover.</li>
              <li>Write a song</li>
              <li>Write a poem</li>
              <li>LEGO</li>
              <li>Design a merch</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
