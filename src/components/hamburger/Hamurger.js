import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Hamburger() {
  let [isMenu, setIsMenu] = useState(false);
  let location = useLocation();
  function closeMenu() {
    setIsMenu(false);
    let icon = document.querySelector(".hamburger-icon");
    let menu = document.querySelector(".menu__list");
    let body = document.querySelector("body");
    body.classList.remove("active");
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
  function openMenu() {
    setIsMenu(true);
    let icon = document.querySelector(".hamburger-icon");
    let menu = document.querySelector(".menu__list");
    let body = document.querySelector("body");
    body.classList.toggle("active");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  if (isMenu) {
    window.addEventListener("resize", () => {
      if (window.innerWidth > "770") {
        closeMenu();
      }
    });
  }
  useEffect(() => {
    closeMenu();
  }, [location.key]);
  return (
    <div onClick={() => openMenu()} className="hamburger-icon">
      <span className="hamburger__span"></span>
      <span className="hamburger__span"></span>
      <span className="hamburger__span"></span>
    </div>
  );
}

export default Hamburger;
