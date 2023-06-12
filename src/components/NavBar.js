import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkElements = links.map((linkElement) =>{
    return <a key={linkElement} href={`#${linkElement}`}>{linkElement}</a>
  })
  return <nav>{linkElements}</nav>;
}

export default NavBar;
