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
      <ul>
        <li>
           <i className="fab fa-github">
            &nbsp;<a href="https://github.com/FrancescaRodricks"  rel="noopener noreferrer" target="_blank">Github</a>
          </i>
        </li>
        <br/>
        <li>
           <i className="fab fa-instagram">
            &nbsp;<a href="https://www.instagram.com/francescarodricks/"  rel="noopener noreferrer" target="_blank">Instagram</a>
          </i>
        </li>
        <br/>
        <li>
          <i className="fab fa-facebook">
            &nbsp;<a href="https://www.facebook.com/francesca.rodricks"  rel="noopener noreferrer" target="_blank">Facebook</a>
          </i>
        </li>
        <br/>
        <li>
          <i className="fab fa-twitter">
            &nbsp;<a href="https://twitter.com/franky0388"  rel="noopener noreferrer" target="_blank">Twitter</a>
          </i>
        </li>
      </ul>
    </div>
  </div>)
}

export default SideColumn;
