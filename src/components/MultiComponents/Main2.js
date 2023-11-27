import React, { useRef } from "react";
import FormField from "./FormField";

const Main2 = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <form>
      <FormField label="Enter your name:" ref={ref} isRequired={true} />
      <button type="button" onClick={handleClick}>
        Edit - 2
      </button>
    </form>
  );
};

export default Main2;
