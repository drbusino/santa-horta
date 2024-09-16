import "./header.css";
import React, { useState } from "react";



export default function Header() {
  return (
    <div className="Header" style={{
      height:'100px',
      position: "sticky",
      top: '0',
      zIndex:'1'
    }}>
      <img src= '' alt="img-project-logo" />
      <div className="header-root-options">
        <button className="btn-home">Home</button>
        <button className="btn-more">Conheça</button>
        <button className="btn-store">Compre</button>
        <button className="btn-support">Apoie</button>
      </div>
      <button className="btn-flag">
        <img src="" alt="img-flag" />
      </button>
      <button className="btn-login">Login</button>
    </div>
  );
}
