import React from 'react';

const Savory = () => {
  return (
    <div className="leftcolumn">
      <div className="card">
        <div className="w3-row-padding w3-padding-16 w3-center" id="food">
          <div className="w3-quarter">
            <img src="https://i.pinimg.com/564x/8f/4a/6d/8f4a6def2b8be81d4f59e9740058427e.jpg" alt="Sandwich" className="full-width"/>
            <h3>Forminhas Recipe (Goan Savory Stuffed Canapés)</h3>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
          <div className="w3-quarter">
            <img src="https://i.pinimg.com/564x/34/1d/49/341d494bea8970bf8ff1706333678362.jpg" alt="Sandwich" className="full-width"/>
            <h3>Prawn balchao</h3>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
          <div className="w3-quarter">
            <img src="https://www.w3schools.com/w3images/popsicle.jpg" alt="Sandwich" className="full-width"/>
            <h3>The Perfect Sandwich, A Real NYC Classic</h3>
            <p>Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Savory;
