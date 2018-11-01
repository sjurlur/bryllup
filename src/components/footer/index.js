import { h } from "preact";
import style from "./style";

export const Footer = () => (
  <footer className={style.footer}>
    <picture>
      <source srcset="../../assets/footer.webp" type="image/webp" />
      <img className={style.img} src="../../assets/footer.png" alt="" />
    </picture>
  </footer>
);
