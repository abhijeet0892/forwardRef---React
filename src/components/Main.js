import React, { useRef } from "react";
import MyInput from "./MyInput";

const Main = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
};

export default Main;
