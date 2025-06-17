import React, { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  const voteForLanguage = (index) => {
    const updatedLanguages = [...languages];
    updatedLanguages[index].votes += 1;
    setLanguages(updatedLanguages);
  };

  return (
    <div className="App" style={{ padding: "30px", textAlign: "center" }}>
      <h1>Vote For Your Favorite Language</h1>
      {languages.map((lang, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>
            {lang.name} — {lang.votes} vote{lang.votes !== 1 ? "s" : ""}
          </h2>
          <button onClick={() => voteForLanguage(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default App;
