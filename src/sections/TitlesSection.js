import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import { SocialIcon } from "react-social-icons";
import "./TitlesSection.css";
import DownIcon from "../components/Downicon";
import { Link, Element } from "react-scroll";

class TitleSection extends Component {
  state = {
    color: "white"
  };
  changeColor = _color => {
    this.setState({
      color: _color
    });
  };
  render() {
    return (
      <div>
        <Fullpage className="first">
          <h1
            className="title"
            style={{ color: this.state.color }}
            onMouseOver={() => {
              this.changeColor("yellow");
            }}
            onMouseLeave={() => {
              this.changeColor("white");
            }}
          >
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <DownIcon icon={data.icons.down} />
        </Link>
        <Element name="about" className="element" />
      </div>
    );
  }
}

export default TitleSection;
