import React, { useState } from "react";

function Toggle({ children }) {
  const [toggle, setToggle] = useState(false);
  return <div onClick={() => setToggle(!toggle)}>{toggle ? children : ""}</div>;
}

export default Toggle;
