import { h } from "preact";
import style from "./style";

export const Main = () => (
  <main className={style.main}>
    <h2>Bakgrunn</h2>
    <p>
      No har me vore i lag i nesten 8 år. Det er mange, men me vil ha fleire.
      Derfor giftar me oss den 9. februar 2019 og vonar du vil vera på feiringa!
    </p>
    <h2>Program for dagen</h2>
    <dl className="programlist">
      <dt>14:30</dt>
      <dd>
        <span className="listheader">Vigsel i Paulus kyrkje</span>
        Paulus kyrkje ligg på birkelunden på grunerløkka.
        <br />
        <br /> Etter vigselen må ein på eigehand ta seg til festlokalet på
        Voksenkollen. Det tek ca ein time med kollektivtransport frå kyrkja.
      </dd>
      <dt>17:30</dt>
      <dd>
        <span className="listheader">Velkomstdrink på Solstua</span>
      </dd>
      <dt>19:00</dt>
      <dd>
        <span className="listheader">Maten vert servert</span>
      </dd>
      <dt>23:30</dt>
      <dd>
        <span className="listheader">Dans i peisestova</span>
      </dd>
      <dt>02:00</dt>
      <dd>
        <span className="listheader">Nattmat vert servert</span>
      </dd>
    </dl>
    <h2>Transport</h2>
    <em>Legg inn kart</em>
    <h3>Til Paulus kyrkje</h3>
    <p>
      Det går både trikk og buss som stoppar rett ved kyrkja. Nytt gjerne
      ruteplanleggaren på{" "}
      <a href="https://ruter.no/" target="_new">
        https://ruter.no/
      </a>{" "}
      og skriv inn Birkelunden som destinasjon. Det tek om lag 10 minutt med
      kollektivtransport frå Oslo S.
    </p>
    <h3>Til Solstua</h3>
    <p>
      Frå kyrkja til Voksenkollen tek det om lag ein time med
      kollektivtransport. Ta trikk nr. 12 (Majorstuen) eller 13 (Bekkestua) frå
      Birkelunden. Gå av på Jerbanetorget.
    </p>{" "}
    <p>
      På Jerbanetorget byttar du til t-bane linje 1 mot Frognerseteren. Gå av på
      stoppet som heiter Voksenkollen
    </p>
    <p>
      Frå t-bane stoppet er det ca 15 minutt å gå. Me vil henga opp ballongar
      som markerar vegen.
    </p>
    <p>
      Nyttar du taxi eller eigen bil er addressa: Thorleif Haugs vei 14, 0791
      Oslo. Det er rikeleg med parkeringsplassar på tunet.
    </p>
    <h2>Overnatting</h2>
    <p>
      <a href="http://www.voksenaasen.no/hotell/">Voksenåsen hotell</a>
    </p>
    <h2>Ofte spurde spørsmål (FAQ)</h2>
    <dl className="faq">
      <dt className="listheader">Kva gjer eg dersom eg vil underhalde?</dt>
      <dd>
        Ta kontakt med viseverten. Det er framleis uvisst kven dette er, men når
        me veit vil me skriva det her. Me set stor pris på underhalding.
      </dd>
      <dt>Kva skal eg ha på meg?</dt>
      <dd>Varme klede som også er fine å sjå på. Bunad er fint.</dd>
      <dt>Korleis kjem eg i kontakt med brureparet?</dt>
      <dd>
        På e-post: sjurlur@gmail.com eller lisasmi@math.uio.no. På telefon: 992
        29 275 (Sjur) eller 924 96 976 (Lisa)
      </dd>
    </dl>
  </main>
);
