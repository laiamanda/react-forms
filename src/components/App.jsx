import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function updateName(event) {
    setHeadingText(name);

    event.preventDefault(); //Prevent Refresh allowing forms
  }
  return (
    <div className="container">
      <form>
        <h1>Hello {headingText}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit" onClick={updateName}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;

/*{
    return (
    <div className="container">
      <h1>Hello {name}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button>Submit</button>
    </div>
  );
}*/

/*   const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function updateName() {
    setHeadingText(name);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={updateName}>Submit</button>
    </div>
  ); */
