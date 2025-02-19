import "./challenge.css";
import { useState } from "react";

export default function CodingChallenge() {
  return (
    <div>
      <TextExpander buttonColor="#ff6622">
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander className="box" buttonColor="#ff6622" expanded="true">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 20,
  expanded = false,
  expandButtonText = "Show more",
  collapseButtonText = "show less",
  buttonColor = "blue",
  className,
}) {
  const [btnState, setBtnState] = useState(expanded);

  const shortText =
    children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const btnStyle = {
    color: buttonColor,
    backgroundColor: "inherit",
    border: "none",
    margin: "5px",
  };

  const handleClick = function () {
    setBtnState((expanded) => !expanded);
    console.log(btnState);
  };

  return (
    <div className={className}>
      {btnState ? children : shortText}
      <button onClick={() => handleClick()} style={btnStyle}>
        <b> {btnState ? collapseButtonText : expandButtonText}</b>
      </button>
    </div>
  );
}
