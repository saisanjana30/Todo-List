import React, { useState } from "react";

function AddInput(props) {
  const [Item, setItem] = useState("");

  function handleItem(event) {
    const newValue = event.target.value;
    setItem(newValue);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleItem} value={Item} />
      <button
        onClick={() => {
          props.add(Item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default AddInput;
