import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

export const Footer = () => (
  <footer className={style.footer}>
    <img className={style.img} src="../../assets/footer.png" />
  </footer>
);
