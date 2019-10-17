import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('/colors')
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="app-cont">
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  );
};

export default BubblePage;
