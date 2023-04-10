import React from "react";

const CONTENT = {
  tab1: `content tab1`,
  tab2: `content tab2`,
  tab3:`content tab3`
  };

function Content({ page, data }) {
  const time = data.delay.read();

  return (
    time && (
      <div className="tab-content">
        <p>{CONTENT[page]}</p>
      </div>
    )
  );
}

export default Content;
