import { VirtualDOM, createElement } from "dcbl";
import Game from "./Components/Game";
import "./style.css";

const vd = new VirtualDOM();
vd.createTreeFromRoot(
  <Game />,
  document.querySelector("body") as HTMLBodyElement
);
