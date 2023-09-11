import "./App.css";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  function handleTextChange(event) {
    setTextIn(event.target.value);
  }

  const defaultText =
    "# Heading 1\n" +
    "## Another heading\n" +
    "[link](www.freecodecamp.org/learn)\n" +
    "\n" +
    "`inline code`\n" +
    "```\n" +
    "multi line code 1\n" +
    "multi line code 2\n" +
    "```\n" +
    "> Block quotes\n" +
    "* A\n" +
    "* B\n" +
    "* C\n" +
    "\n" +
    "![logo](https://svg-files.pixelied.com/1c656c89-67da-4e8b-8584-623127d4310b/thumb-256px.png)\n\n" +
    "__mows__";
  const [textIn, setTextIn] = useState(defaultText); // This is the setState of new react. data is the current data, and setData is the function to update the current state (data). data replaces this.data

  return (
    <div className="App">
      <div>
        <textarea id="editor" value={textIn} onChange={handleTextChange} placeholder={defaultText} />
      </div>

      <div id="preview">
        <ReactMarkdown id="preview">{textIn}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
