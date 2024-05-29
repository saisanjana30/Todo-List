import React, { useState } from "react";

function todoItem(props) {
  return <li onClick={() => props.delete(props.id)}>{props.item}</li>;
}

export default todoItem;
