import { h } from "preact";
import style from "./style";

export const Main = () => (
  <div className={style.main}>
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
        Paulus kyrkje ligg på Birkelunden på Grünerløkka.
        <br />
        <br /> Etter vigselen må ein på eiga hand ta seg til festlokalet på
        Voksenkollen. Det tek ca ein time med kollektivtransport frå kyrkja.
      </dd>
      <dt>17:30</dt>
      <dd>
        <span className="listheader">Velkomstdrink på Solstua</span>
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
      Frå t-banestoppet er det ca 15 minutt å gå. Me vil henga opp ballongar som
      markerar vegen.
    </p>
    <p>
      Nyttar du taxi eller eigen bil er addressa: Thorleif Haugs vei 14, 0791
      Oslo. Det er rikeleg med parkeringsplassar på tunet.
    </p>
    <h2>Overnatting</h2>
    <p>
      <a href="http://www.voksenaasen.no/hotell/">Voksenåsen hotell</a> ligg eit
      steinkast frå Solstua. Bryllupsgjestar får ein liten rabatt ved
      bestilling. Dobbeltrom kostar 1190 kr og enkeltrom kostar 880 kr per natt,
      inkludert frokost. Ring 22 81 15 20 og sei at du skal i Lisa og Sjur sitt
      bryllup 9. februar. Ps: antall ledige rom på booking.com stemmer ikkje,
      men det er lurt å bestille i god tid.
    </p>
    <h2>Ofte spurde spørsmål</h2>
    <dl className="faq">
      <dt className="listheader">Kva gjer eg dersom eg vil underhalde?</dt>
      <dd>
        Ta kontakt med visevertane, Maria (995 67 693) og Jon (957 89 288). Me
        set stor pris på underhalding.
      </dd>
      <dt>Kva skal eg ha på meg?</dt>
      <dd>Varme klede som også er fine å sjå på. Bunad er fint.</dd>
      <dt>Korleis kjem eg i kontakt med brureparet?</dt>
      <dd>
        På e-post: sjurlur@gmail.com eller lisasmi@math.uio.no. På telefon: 992
        29 275 (Sjur) eller 924 96 976 (Lisa)
      </dd>
    </dl>
    <h2>Ønskeliste</h2>
    <p>
      Me ønsker oss bidrag til byllupsreise til Sri Lanka. I tillegg har me laga
      ei ønskeliste på Jernia. Den består av service og kjøkkenutstyr.{" "}
      <a
        href="https://www.jernia.no/wishlist/a259f3ef-a012-4daa-b54f-c6fe6f59643e"
        target="_new"
      >
        https://www.jernia.no/wishlist/
      </a>
    </p>
  </div>
);
