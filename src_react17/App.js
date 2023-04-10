import "./style.css";
import { useState,Suspense} from "react";
import React from "react";
import Loader from "./Loader";
import Content from "./Content";

export default function App() {
  const [tab, setTab] = useState(0);

  function handleClick(index) {
    setTab(index);
  }

  return (
    <>
      <ul className="inline">
        <li
          className={tab === 0 ? "selected" : null}
          onClick={() => handleClick(0)}
        >
         Tab1
        </li>
        <li
          className={tab === 1 ? "selected" : null}
          onClick={() => handleClick(1)}
        >
          Tab2
        </li>
        <li
          className={tab === 2 ? "selected" : null}
          onClick={() => handleClick(2)}
        >
          Tab3
        </li>
      </ul>
      <div className="tab">
        <Suspense fallback={<Loader />}>
          {tab === 0 && <Content page="tab1" />}
          {tab === 1 && <Content page="tab2" />}
          {tab === 2 && <Content page="tab3" />}
        </Suspense>
      </div>
    </>
  );
}
