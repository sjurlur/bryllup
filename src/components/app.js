import { h, Component } from "preact";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <h1>Lisa og sjur gifter seg!</h1>
        <h2>Program for dagen</h2>
        <p>
          Dagen startar med vigsle i Paulus kyrkje på Birkelunden klokka{" "}
          <strong>14:30</strong>. Det går både trikk og buss som stopper rett
          ved kyrkja. Nytt gjerne ruteplanleggaren på{" "}
          <a href="">https://ruter.no/</a> og skriv inn Birkelunden som
          destinasjon. Det tek om lag 10 min med kollektivtransport frå Oslo S.
        </p>
        <p>Vidare</p>
      </div>
    );
  }
}
