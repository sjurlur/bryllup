import { h, Component } from "preact";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <h1>Lisa og sjur giftar seg!</h1>
        <h2>Bakgrunn</h2>
        <p>
          No har me vore i lag i nesten 8 år. Det er mykje, men i grunn har det
          gått greit. Me tenkte å fortsettje i hop, men under åsyn av Gud :))
          Derfor giftar me oss den niende februar 2019 og vonar du vil vera på
          feiringa!
        </p>
        <h2>Program for dagen</h2>
        <dl>
          <dt>14:30</dt>
          <dd>
            <strong>Vigsel i Paulus kyrkje</strong>
            <br /> Paulus kyrkje ligg på birkelunden på grunerløkka. Etter denne
            må ein på eigehand ta seg til festlokalet på Voksenkollen. Her er
            det viktig å berekne god tid. ca ein time frå Oslo sentrum.
          </dd>
          <dt>18:00</dt>
          <dd>Velkomstdrink på Solstua</dd>
          <dt>19:00</dt>
          <dd>Maten vert servert</dd>
          <dt>23:30</dt>
          <dd>Dans i peisestova</dd>
          <dt>02:30</dt>
          <dd>Nattmat og limbokonkurranse</dd>
        </dl>
        <h2>Transport</h2>
        <em>Legg inn kart</em>
        <h3>Til Paulus kyrkje</h3>
        <p>
          Det går både trikk og buss som stopper rett ved kyrkja. Nytt gjerne
          ruteplanleggaren på{" "}
          <a href="https://ruter.no/" target="_new">
            https://ruter.no/
          </a>{" "}
          og skriv inn Birkelunden som destinasjon. Det tek om lag 10 min med
          kollektivtransport frå Oslo S.
        </p>
        <h3>Til Solstua</h3>
        <p>
          Frå kyrkja til Voksenkollen tek det om lag ein time med
          kollektivtransport. Ta trikk nr. 12 (Majorstuen) eller 13 (Bekkestua)
          frå Birkelunden. Gå av på Jerbanetorget.
        </p>{" "}
        <p>
          På Jerbanetorget byttar du til t-bane linje 1 mot Frognerseteren. Gå
          av på stoppet som heiter Voksenkollen
        </p>
        <p>
          Frå t-bane stoppet er det ca 15min å gå. Me vil henga opp ballongar
          som markerar vegen.
        </p>
        <h2>Overnatting</h2>
        <p>
          <a href="http://www.voksenaasen.no/hotell/">Voksenåsen hotell</a>
        </p>
        <h2>Praktisk informasjon</h2>
        <h3>Bidrag</h3>
        <p>
          Me sett stor pris på underhaldingsbidrag både før, under og etter
          middagen. Ta kontakt med visevert ... på telefon ...
        </p>
        <h3>Kontaktinformasjon</h3>
        <p>
          <strong>Lisa Smith: </strong>
          <em>lisasmi@math.uio.no tlf. 924 96 976</em>
          <br />
          <strong>Sjur Seibt: </strong>
          <em>sjurlur@gmail.com tlf. 992 29 275</em>
        </p>
        <h2>FAQ</h2>
        <dl>
          <dt>Kva gjer eg dersom eg vil underhalde?</dt>
          <dd>Ta kontakt med viseverten ... tlf: 111 11 111</dd>
          <dt>Kva skal eg ha på meg?</dt>
          <dd>Varme klede som også er fine å sjå på. Bunad er fint.</dd>
          <dt>Har du mistet invitasjonen?</dt>
          <dd>Det går bra</dd>
          <dt />
          <dd>Dans i peisestova</dd>
          <dt>02:30</dt>
          <dd>Nattmat og limbokonkurranse</dd>
        </dl>
      </div>
    );
  }
}
