import { h } from "preact";
import style from "./style";

export const Header = () => (
  <header class={style.header}>
    <picture>
      <source
        srcset="../../assets/header.webp"
        media="(min-width: 600px)"
        type="image/webp"
      />
      <source
        srcset="../../assets/header.png"
        media="(min-width: 600px)"
        type="image/png"
      />
      <source srcset="../../assets/header-small.webp" type="image/webp" />
      <img
        className={style.img}
        src="../../assets/header-small.png"
        alt="Tegning av Lisa og Sjur som skal gifte seg"
      />
    </picture>
    <h1 className={style.visuallyhidden}>Lisa og Sjur giftar seg</h1>
  </header>
);
