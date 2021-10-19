
import React, { useEffect, useState } from "react";
import { Card } from "components/Card";

const Example = () => {
  const [list, setList] = useState([1, 2]);
  const increase = () => {
    setList([...list, list.length])
  }
  const decrease = () => {
    if(list.length > 0) {
      setList([...list.slice(0, -1)])
    }
  }
  useEffect(() => {
    document.title = `You are have ${list.length} cards`;
  }, [list])
  return (
    <div className="container">
      <div className="header"> header nè</div>
      {/* button */}
      <div className="row">
        <div className="col col-sm-6">
          <div className="btn-default" onClick={increase}>
            Thêm nè
          </div>
        </div>
        <div className="col col-sm-6">
          <div className="btn-default" onClick={decrease}>
            Xóa nè
          </div>
        </div>
      </div>
      <br />
      {
        list.map((_, index) => {
          return (
            <Card key={`card-${index}`} text={`card ${index + 1} st`} />
          )
        })
      }
    </div>
  )
};
export default Example;