import React, { useState } from "react";

const VideoSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="search">
      <form className="form" onSubmit={submitHandler}>
        <input
          onChange={(e) => setText(e.target.value)}
          type={text}
          placeholder="Search here..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default VideoSearch;
