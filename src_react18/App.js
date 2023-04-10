import "./style.css";
import React,{ useState, useTransition, Suspense } from "react";
import Loader from "./Loader";
import Content from "./Content";
import { fetchData } from "./fakeApi";

const initialData = fetchData();

export default function App() {
  const [tab, setTab] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState(initialData);

  function handleClick(index) {
    startTransition(() => {
      setTab(index);
      setData(fetchData());
    });
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
      <div className={`tab ${isPending ? "pending" : null}`}>
        <Suspense fallback={<Loader />}>
          {tab === 0 && <Content page="tab1" data={data}  />}
          {tab === 1 && <Content page="tab2" data={data}  />}
          {tab === 2 && <Content page="tab3" data={data}  />}
        </Suspense>
      </div>
    </>
  );
}
