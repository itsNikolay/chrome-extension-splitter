import "./style.css";
// import Icon from "./icon.png";

const component = () => {
  const el = document.createElement("div");
  // const myIcon = new Image();
  // myIcon.src = Icon;

  el.innerHTML = "Hello webpack";
  //   el.classList.add("hello");
  //   el.appendChild(myIcon);
  return el;
};

document.body.appendChild(component());
