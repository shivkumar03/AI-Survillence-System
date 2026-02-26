import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/status")
      .then(res => setStatus(res.data.status))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>AI Surveillance Dashboard</h1>
      <p>Status: {status}</p>

      <div className="video-container">
        <img
          src="http://127.0.0.1:5000/video_feed"
          alt="Live Feed"
        />
      </div>
    </div>
  );
}

export default App;