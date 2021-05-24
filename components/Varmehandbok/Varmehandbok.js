import styles from './Varmehandbok.styles'
import VarmehandbokNav from './VarmehandbokNav'

const Varmehandbok = () => {
  return (
    <styles.varmehandbok noGutter>
      <img
        src="/img/varmehandbok.png"
        alt="Kvinna som sitter bekvämt i en fåtölj och dricker kaffe"
      />
      <VarmehandbokNav />
      <styles.content>
        <h1>Värmehandbok</h1>
        <h2>Vägen till ett lyckat projekt</h2>
        <p>
          Med mer än 30 års erfarenhet av arbete med injusteringar för bo-stadsrättsföreningar och
          fastighetsbolag har vi på Värmex lärt oss hur viktigt det är med samsyn, att beställare
          och leverantör förstår varandra.
        </p>
        <p>
          Det är inte självklart enkelt. Inomhusklimat är ett rätt komplicerat yrkesområde med många
          facktermer, vilket kan göra en offert eller arbetsbeskrivning svår att förstå, och vi vet
          att missförstånd ibland kan uppstå.
        </p>
        <p>
          För att minska risken för missförstånd – och för att försöka förenkla för dig som står
          inför ett värmeprojekt – har vi därför tagit fram den här lilla handboken. Här beskriver
          vi vad ett värmesystem består av, hur det fungerar och vad de arbeten vi utför innebär för
          inomhuskli-matet och dem som vistas i fastigheten.
        </p>
        <p>
          För att ett projekt ska bli lyckat är det viktigt att båda parter vet vad som ska göras
          och vad det kommer att innebära. När det handlar om ett så komplext område som
          inomhusklimat behöver man också vara förberedd på att det kan hända saker längs vägen.
        </p>
        Vi hoppas den här lilla handboken ska kunna fungera som en länk mellan
        bostadsrättsföreningen och våra medarbetare som utför arbete med värme.
        <h2 id="varfor-uppdatering">Varför uppdatering och injustering?</h2>
        <p>
          Med en injustering kan man förbättra inomhusklimatet och öka komforten i en fastighet –
          samtidigt som man minskar fastighetens energiförbrukning.
        </p>
        <h3>Varför injustera?</h3>
        <p>
          Alla värmeanläggningar behöver emellanåt injusteras för att säker-ställa att de fungerar
          som det var tänkt när de installerades. Under åren förändras nämligen förutsättningar för
          systemet. Slitage, smuts, korrosion och olika ingrepp (som om- och utbyggnader) kan på
          oli-ka sätt påverka systemets inställda dynamik och leda till att exem-pelvis ventiler
          börjar kärva eller läcka.
        </p>
        <h3>Hur veta om injustering behövs?</h3>
        <p>
          Det finns flera sätt att upptäcka att ett system behöver injusteras. Vanligast är att
          temperatu-ren i huset är ojämn, vilket beror på obalans i systemet. Obalans kan uppstå
          mellan plan, lä-genheter eller rum. Det kan också innebära att vissa delar av huset tar
          längre tid på sig att bli varma, jämfört med andra delar. Vid obalans är det oftast
          kallast längst bort från pumpen, ofta högst upp i systemet.
        </p>
        <h3>För varmt</h3>
        <p>
          Med tiden kan man även få för höga temperaturer inomhus, över-temperaturer som det kallas.
          Att temperaturen blir för hög beror ofta på gamla och uttjänta termostater, men kan även
          bero på att man centralt höjt värmen för att kompensera för att vissa har det kallt.
        </p>
      </styles.content>
    </styles.varmehandbok>
  )
}

export default Varmehandbok
