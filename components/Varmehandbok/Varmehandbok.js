import styles from './Varmehandbok.styles'
import VarmehandbokNav from './VarmehandbokNav'

const Varmehandbok = () => {
  return (
    <styles.varmehandbok noGutter>
      <img
        src="/img/varmehandbok.png"
        alt="Kvinna som sitter bekvämt i en fåtölj och dricker kaffe"
      />
      <styles.content>
        <VarmehandbokNav />
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
      </styles.content>
    </styles.varmehandbok>
  )
}

export default Varmehandbok
