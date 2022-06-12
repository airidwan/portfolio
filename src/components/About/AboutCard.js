import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ridwdanudin </span>
            from <span className="purple"> Lebak, Banten.</span>
            <br />
            Software Develover who loves to transform ideas into reality using
            code.
            <br />
            Motivated designer and developer with experience creating
            Desktop, Web API with C# .Net
            and Mobile App using Flutter Framework.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
           
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
