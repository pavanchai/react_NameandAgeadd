import { useEffect, useState } from "react";
import { Component } from "./Component";

export default function App() {
  const [show, setShow] = useState(true);

  const childComponent = show ? <Component /> : null;

  return (
    <div>
      <button onClick={() => setShow((currentShow) => !currentShow)}>
        Show/Hide
      </button>
      {childComponent}
    </div>
  );
}
