import { h, Component } from "preact";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import style from "./style";
export default class App extends Component {
  render() {
    return (
      <article id="app">
        <div className={style.margin}>
          <Header />
          <Main />
        </div>
        <Footer />
      </article>
    );
  }
}
