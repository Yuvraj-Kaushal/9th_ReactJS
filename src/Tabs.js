import { useState } from "react";
import "./App.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Quote</h2>
          <hr />
          <p>
          "Someday is not a day of the week."
          <br/>
          - Denise Brennan-Nelson
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>GOD</h2>
          <hr />
          <p>
          G - Generator (Creator) Creator of the universe,
          <br/>
          that is, Brahma
          <br/>
          O - Operator (s) Operator of the universe
          <br/>
          i.e. Vishnu
          <br/>
          D - Destroyer (Destroyer) Destroyer of creation
          <br/>
          i.e. Mahesh
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
