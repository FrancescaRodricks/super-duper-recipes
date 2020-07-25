import React from 'react';

const SideColumn = () => {
  return(
    <div className="rightcolumn">
    <div className="card">
      <h2>About Me</h2>
      <div className="fakeimg" >Image</div>
      <p>Some text about me and my mama</p>
    </div>
    <div className="card">
      <h3>Popular Post</h3>
      <div className="fakeimg"><p>Image</p></div>
    </div>
    <div className="card">
      <h3>Follow Me</h3>
      <p>Some text</p>
    </div>
  </div>)
}

export default SideColumn;
