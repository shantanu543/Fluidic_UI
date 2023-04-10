import { useState, useEffect } from "react";
import { fetchData } from "./fakeApi";
import Loader from "./Loader";
import React from "react";

const CONTENT = {
  tab1: `content tab1`,
  tab2: `content tab2`,
  tab3:`content tab3`
  };

function Content({ page }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().then(() => {
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="tab-content">
      <p>{CONTENT[page]}</p>
    </div>
  );
}

export default Content;
