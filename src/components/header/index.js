import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

export const Header = () => (
  <header class={style.header}>
    <img className={style.img} src="../../assets/header.png" />
  </header>
);
