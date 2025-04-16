import React from "react";
import { Link, Outlet } from "react-router-dom";

export const About = () => {
  return (
    <div>
      <div>
        <Link to="contacts">Contacts</Link>
      </div>
      <div>
        
      </div>
      <div>
        <Link to="about">About</Link>
        <Outlet />
      </div>
    </div>
  );
};
