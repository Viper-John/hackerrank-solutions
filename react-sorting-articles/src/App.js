import React, { useState, useEffect } from "react";
import "./App.css";
// import "h8k-components";

import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [data, setData] = useState(articles);

  const sortedByVotes = () => {
  };

  const sortListByVotes = () => {
  };

  const sortedByDate = () => {};

  const sortByLeast = () => {};

  return (
    <div className="App">
      {/* <h8k-navbar header={title}></h8k-navbar> */}
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">
          Sort By
        </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => sortedByVotes()}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => sortListByVotes()}
        >
          Least Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => sortedByDate()}
        >
          Most Recent
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => sortByLeast()}
        >
          Least Recent
        </button>
      </div>
      <Articles articles={data} />
    </div>
  );
}

export default App;
