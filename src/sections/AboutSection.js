import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import './AboutSection.css'

class AboutSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second">
          <h3>{data.sections[0].title}</h3>
          <div className="paragraphs">
            {data.sections[0].items.map(p => {
              return <p>{p.content}</p>;
            })}
          </div>
        </Fullpage>
      </div>
    );
  }
}

export default AboutSection;
