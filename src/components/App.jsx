import React, { useState } from "react";
import TodoItem from "./TodoItem";
import AddInput from "./AddInput";

function App() {
  const [itemList, setItemList] = useState([]);

  function addItems(item) {
    setItemList((prev) => {
      return [...prev, item];
    });
  }

  function deleteItems(id) {
    setItemList((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <AddInput add={addItems} />
      <div>
        <ol>
          {itemList.map((litem, index) => (
            <TodoItem
              key={index}
              id={index}
              item={litem}
              delete={deleteItems}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
