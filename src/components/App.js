import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((t)=><Note key={t.key} title={t.title} content={t.content} />)}
      <Footer />
    </div>
  );
}

export default App;
