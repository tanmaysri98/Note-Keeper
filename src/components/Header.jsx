import React from "react";


function Header(props) {
  const logo = (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY14YHtoD7Gv90I-_RchQhqNFPH098hjmy4Q&usqp=CAU"
      alt="logo"
      width="125" // Add the desired width (e.g., 200 pixels)
      height="75" // Add the desired height (e.g., 150 pixels)
    />
  );
  
  return (
    <div className='header'>
      {logo}
      <h3>Keeper</h3>
    </div>
  );
}

export default Header;

