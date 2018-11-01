import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

export const Header = () => (
  <header class={style.header}>
    <picture>
      <source srcset="../../assets/header.png" media="(min-width: 600px)" />
      <img className={style.img} src="../../assets/header-small.png" />
    </picture>
  </header>
);
