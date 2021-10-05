import React, { useState, useRef } from "react";

export default function Form() {
  const ref = useRef("");

  const [val, setVal] = useState("[Place Holder]");

  function onClick() {
    ref.current.value = `${val}  hi!`;
  }

  return (
    <div>
      <input ref={ref} />
      <button onClick={onClick}>Click</button>
    </div>
  );
}
