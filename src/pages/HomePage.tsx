import React from "react";
import "./Pages.styles.css";

interface Props {
  results: string[];
}

const HomePage = ({ results }: Props) => {
  return (
    <div>
      <ul>
        {results.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
