import React, { useState, useRef } from "react";

export default function Form() {
  const [input, setInput] = React.useState('')
  const ref = useRef("");

  const [val, setVal] = useState("[Place Holder]");

  function onClick() {
    setInput(`${input} ${val}`)
  }

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={onClick}>Click</button>
    </div>
  );
}
