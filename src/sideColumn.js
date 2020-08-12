import React from 'react';

const SideColumn = () => {
  return(
    <div className="rightcolumn">
    <div className="card">
      <h2>About Me</h2>
      <div className="w3-card-4">
        <img src="https://www.w3schools.com/w3css/img_avatar5.png" alt="Person" className="full-width"/>
        <div className="w3-container">
          <h4><b>Francesca</b></h4>
          <p>The boss</p>
        </div>
      </div>
    </div>
    <div className="card">
      <h3>Popular Post</h3>
      <div className="fakeimg"><p>Image</p></div>
    </div>
    <div className="card">
      <h3>Connect </h3>
      <ul>
        <li>
           <i className="fab fa-github">
            &nbsp;<a href="https://github.com/FrancescaRodricks"  rel="noopener noreferrer" target="_blank">Github</a>
          </i>
        </li>
        <br/>
        <li>
          <i className="fab fa-linkedin">
            &nbsp;<a href="https://www.linkedin.com/in/francesca-rodricks"  rel="noopener noreferrer" target="_blank">LinkedIn</a>
          </i>
        </li>
        <br/>
        <li>
          <i className="fab fa-twitter">
            &nbsp;<a href="https://twitter.com/franky0388"  rel="noopener noreferrer" target="_blank">Twitter</a>
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
      </ul>
    </div>
  </div>)
}

export default SideColumn;
