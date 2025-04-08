import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { TranslationContext } from "../../context/translation/translationContext";
import "./Menu.module.css";

export const Menu = () => {
  const translation = useContext(TranslationContext);
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
          >
            {translation.menu.main}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
          >
            {translation.menu.about}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/anime-list"
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
          >
            {translation.menu.animeList}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reviews"
            end={true}
            className={({ isActive }) =>
              isActive ? "nav-link-active" : "nav-link"
            }
          >
            {translation.menu.reviews}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
