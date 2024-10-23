import React from "react";

const Articles = ({ articles }) => {
  console.log(articles);
  return (
    <div className="card w-50 mx-auto">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {articles.map((data, index) => (
            <tr key={index}>
              <td>{data.title}</td>
              <td>{data.upvotes}</td>
              <td>{data.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  s;
};

export default Articles;
