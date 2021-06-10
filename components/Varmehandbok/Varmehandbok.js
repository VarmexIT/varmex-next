import styles from './Varmehandbok.styles'
<<<<<<< HEAD
// import VarmehandbokNav from './VarmehandbokNav'
=======
import VarmehandbokNav from './VarmehandbokNav'
import WithImage from '../WithImage/WithImage'
>>>>>>> varmehandboken

const Varmehandbok = () => {
  return (
    <styles.varmehandbok noGutter>
      <img
        src="/img/varmehandbok.png"
        alt="Kvinna som sitter bekvämt i en fåtölj och dricker kaffe"
      />
      {/* <VarmehandbokNav /> */}
      <styles.content>
<<<<<<< HEAD
        <p>Kommer inom kort</p>
=======
        <div>
          <h2>Vägen till ett lyckat projekt</h2>
          <p>
            Med mer än 30 års erfarenhet av arbete med injusteringar för bo-stadsrättsföreningar och
            fastighetsbolag har vi på Värmex lärt oss hur viktigt det är med samsyn, att beställare
            och leverantör förstår varandra.
          </p>
          <p>
            Det är inte självklart enkelt. Inomhusklimat är ett rätt komplicerat yrkesområde med
            många facktermer, vilket kan göra en offert eller arbetsbeskrivning svår att förstå, och
            vi vet att missförstånd ibland kan uppstå.
          </p>
          <p>
            För att minska risken för missförstånd – och för att försöka förenkla för dig som står
            inför ett värmeprojekt – har vi därför tagit fram den här lilla handboken. Här beskriver
            vi vad ett värmesystem består av, hur det fungerar och vad de arbeten vi utför innebär
            för inomhuskli-matet och dem som vistas i fastigheten.
          </p>
          <p>
            För att ett projekt ska bli lyckat är det viktigt att båda parter vet vad som ska göras
            och vad det kommer att innebära. När det handlar om ett så komplext område som
            inomhusklimat behöver man också vara förberedd på att det kan hända saker längs vägen.
          </p>
          <p>
            Vi hoppas den här lilla handboken ska kunna fungera som en länk mellan
            bostadsrättsföreningen och våra medarbetare som utför arbete med värme.
          </p>
        </div>

        <div id="varfor-uppdatering-och-injustering">
          <h2>Varför uppdatering och injustering?</h2>
          <p>
            Med en injustering kan man förbättra inomhusklimatet och öka komforten i en fastighet –
            samtidigt som man minskar fastighetens energiförbrukning.
          </p>
          <h3>Varför injustera?</h3>
          <p>
            Alla värmeanläggningar behöver emellanåt injusteras för att säker-ställa att de fungerar
            som det var tänkt när de installerades. Under åren förändras nämligen förutsättningar
            för systemet. Slitage, smuts, korrosion och olika ingrepp (som om- och utbyggnader) kan
            på oli-ka sätt påverka systemets inställda dynamik och leda till att exem-pelvis
            ventiler börjar kärva eller läcka.
          </p>
          <h3>Hur veta om injustering behövs?</h3>
          <p>
            Det finns flera sätt att upptäcka att ett system behöver injusteras. Vanligast är att
            temperatu-ren i huset är ojämn, vilket beror på obalans i systemet. Obalans kan uppstå
            mellan plan, lä-genheter eller rum. Det kan också innebära att vissa delar av huset tar
            längre tid på sig att bli varma, jämfört med andra delar. Vid obalans är det oftast
            kallast längst bort från pumpen, ofta högst upp i systemet.
          </p>
          <WithImage
            hAlign="right"
            src="1"
            alt=""
            caption="Det är inte alls konstigt att gå in och kompensera för att vissa delar är kallare än
                andra, men det kan ge konsekvenser på andra ställen i systemet."
          >
            <h3>För varmt</h3>
            <p>
              Med tiden kan man även få för höga temperaturer inomhus, över-temperaturer som det
              kallas. Att temperaturen blir för hög beror ofta på gamla och uttjänta termostater,
              men kan även bero på att man centralt höjt värmen för att kompensera för att vissa har
              det kallt.
            </p>
            <h3>Låter för mycket</h3>
            <p>
              Onormalt höga strömningsljud (sus) från radiatorerna är ytterligare en vanlig effekt
              av att system inte är ordentligt injusterade. Det be- ror ofta på att någon, till
              exempel en fastighetsskötare, höjt varvta- let på cirkulationspumpen för att vissa
              delar av fastigheten inte får tillräckligt med värme.
            </p>
          </WithImage>
          <h3>Hur veta när det är dags?</h3>
          <p>
            Den här typen av problem kommer ofta smygande och det är därför svårt att veta exakt när
            det är dags att uppdatera värmesystemet. Det är inte onormalt att man behöver byta
            radiatorventiler och ter- mostater var tjugonde år, bara för att bibehålla funktionen i
            värme- systemet. Om man har dålig vattenkvalitet (exempelvis hög syrehalt) kan man
            behöva byta ännu oftare, för att förekomma problem som kan uppstå på grund av korrosion.
          </p>
          <h3>Energibesparingar nästan jämt</h3>
          <p>
            Med en injustering kommer ofta en energibesparing. Hur stor be- sparingen blir beror
            helt och hållet på hur utgångsläget ser ut. I ett dåligt fungerande värmesystem med
            övertemperaturer och höga pumptryck är det inte orimligt att minska sin värmeförbrukning
            med upp emot 15 %.
          </p>
          <h3>Men inte alltid</h3>
          <p>
            Även om energibesparingar hör till vanligheterna, så finns det un- dantag. Om man har
            ett system med väldigt dålig cirkulation och generellt låga inomhustemperaturer, då kan
            värmeförbrukningen i vissa fall i stället öka av en injustering. Vinsten av
            injusteringen är då i stället att man uppnår en fullgod funktion i värmesystemet.
          </p>
          <WithImage
            src="2"
            alt=""
            caption="Det är inte alls konstigt att gå in och kompensera för att vissa delar är kallare än
                andra, men det kan ge konsekvenser på andra ställen i systemet."
          >
            <h3>Rätt målsättning och förväntningar</h3>
            <p>
              I slutänden handlar en injustering om att skapa bästa möjliga värme- system utifrån
              förutsättningarna. Men vägen dit är inte alltid spikrak. Vissa saker är svåra eller
              omöjliga att se utan att plocka isär syste- met, de måste testas fram. Därför måste
              man gå in i injusteringspro- jekt med ”öppna ögon” och vara medveten om att man alltid
              kan upptäcka tidigare okända brister i systemet under arbetets gång.
            </p>
          </WithImage>
        </div>

        <div id="sa-fungerar-ett-varmesystem">
          <h2>Så fungerar ett värmesystem</h2>
          <p>
            I ett vätskeburet (kallas ibland även vattenburet) värmesystem produceras varmt vatten
            för att värma upp en fastighet. Vatten för uppvärmning kallas värmevatten eller
            värmebärare och skiljer sig från det varmvatten vi hämtar ur kranen, som i stället
            kallas tapp- varmvatten. Själva uppvärmningen av vattnet sker i en värmecentral
            (undercentral). Den kan drivas av olika typer av värmekällor – som fjärrvärme,
            värmepumpar, el- eller oljepannor.
          </p>
          <p>
            När vattnet är varmt cirkuleras det ut i värmesystemet med hjälp av en pump. Det är
            viktigt att pumpen klarar att övervinna de tryck- förluster som uppstår när vattnet
            flödar genom rören (hur hårt pumpen behöver jobba har inget med höjden på huset att
            göra). I undercentralen finns ett expansionskärl som säkerställer trycket, så att
            värmevattnet når även de högst belägna delarna i systemet. Ex- pansionskärlet har också
            till uppgift att kompensera för att vattnet expanderar när det värms upp.
          </p>
          <p>
            Systemet sprider sedan värmen via olika stammar, som förgrenar sig genom byggnaden. På
            varje stam finns ett par ventiler, för tillopp och retur. Ventilerna gör det möjligt att
            både kontrollmäta flöden till respektive stam och att stänga av flöden.
          </p>
          <WithImage hAlign="right" placement="top" src="3" alt="">
            <p>
              I lägenheter finns sedan radiatorer (eller andra värmare) kopplade till systemet. När
              radiatorerna värms av vattnet avger de värme till rum- met, vilket innebär att vattnet
              kyls av när det passerar genom radiatorn.
            </p>
          </WithImage>
        </div>

        <div id="radiatorer-konvektorer-och-golvvarme">
          <h2>Radiatorer, konvektorer och golvvärme</h2>
          <WithImage hAlign="right" src="4" caption="Radiator" captionAlign="center">
            <p>
              Det finns olika typer av värmare – några exempel är radiatorer, konvektorer och
              golvvärme. Vanligast är radiatorer, eller element som de oftare brukar kallas.
              Radiatorn har fått sitt namn från engelskans radiation, eftersom värmeavgivningen till
              en viss del bygger på en strålningseffekt (cirka 20%). En konvektor använder sig
              nästan uteslutande av luftströmmar för att sprida värme. När konvektorn värmer upp
              luft stiger den och ersätts av kyligare luft under elementet, vilket skapar en
              cirkulation av luften som värmer upp rummet. Det är det här cirkulationsfenomenet som
              kallas konvektion.
            </p>
          </WithImage>
          <WithImage hAlign="right" src="5" caption="Konvektor" captionAlign="center">
            <p>
              Varken radiatorer eller konvektorer är helt renod- lade, utan båda använder sig (i
              olika grad) av såväl strålning som konvektion för att överföra värme. Moderna
              radiatorer har ofta veckade plåtar på panelerna i syfte att öka konvek-
              tionsövergången till rummet. Äldre radiatorer jobbar dock i högre grad med strålning.
              De kräver oftast mycket högre temperatur på vattnet än vad moderna radiatorer behöver.
              Äldre radiato- rer var ofta designade för en vattentemperatur på 80 °C, medan moderna
              radiatorer kan klara sig med så låga temperaturer som 45 °C.
            </p>
          </WithImage>
          <WithImage hAlign="right" src="6" caption="Äldre radiator" captionAlign="center">
            <p>
              Det tredje exemplet, golvvärme, läggs som vätske- fyllda slingor i golvet. Golvvärmen
              bygger nästan uteslutande på strålning. Den arbetar med lägre temperaturer, ofta runt
              max 35–40 °C, för att inte riskera att skada golvet. Det är inte heller skönt att gå
              på alltför varma golv. De låga temperaturerna kräver att man har relativt stora ytor
              täckta av värmesslingor. Det finns även elek- trisk golvvärme, vilket är vanligt i
              badrum. Badrum kan även innehålla handdukstorkar som är kopplade till olika varmvat-
              tensystem. Idag är det dock inte tillåtet att installera handduk- storkar direkt på
              varmvattensys- temet och det är därför vanligare att man installerar elektriska han-
              dukstorkar.
            </p>
          </WithImage>
          <WithImage hAlign="right" src="7" caption="Golvvärme" captionAlign="center">
            <h3>Om en radiator är kall?</h3>
            <p>
              Om enskilda radiatorer blir kalla kan de behöva luftas. Det är extra vanligt om man
              bor högt upp i huset. Boende bör vid behov ta kontakt med bostadsrättsföreningens
              styrelse eller hyresvärden, som ofta har riktlinjer för hur man ska lufta radiatorer i
              fastigheten. Vid återkommande behov av luftning är det viktigt att säkerställa att
              systemets tryck- hållning (expansionskärl) fungerar som det ska.
            </p>
          </WithImage>

          <h3>Hur varmt kan man få?</h3>
          <p>
            Vid en injustering fördelar man flödet i systemet, så att varje vär- mare får det flöde
            som var tänkt då man dimensionerade syste- met från början. Om systemet är
            överdimensionerat och det finns mer kapacitet än vad som krävs, då kan man (i viss
            utsträckning) välja vilken inomhustemperatur man vill ha. Och tvärtom! En injustering
            kan inte råda bot på ett redan underdimensionerat system, därför utgör dimensioneringen
            ofta en begränsning vad gäller val av temperaturer.
          </p>
        </div>

        <div id="moblering">
          <h2>Möblering, elementskydd, gardiner och fönsterbänkar.</h2>
          <p>
            Hur mycket värme en radiator avger beror till stor del på omgivningen. För att en
            radiator ska funge- ra optimalt ska den vara fritt placerad på en vägg och inte täckt av
            någonting. Verkligheten ser dock ofta annorlunda ut, men det är viktigt att förstå vad
            det är som påverkar radiatorns funktion för att kunna ge den de bästa förutsättningarna.
          </p>
          <WithImage
            src="8"
            caption="Ibland är radiatorer inbyggda i djupa nischer, vilket kan göra det svårt att få till bra värmespridning. Då kan man kan i vissa fall behöva komplettera med fläktar."
          >
            <p>
              Det viktigaste är att aldrig stänga in en radiator bakom ett elementskydd – eftersom
              radiatorn då värmer luften bakom skyddet men spridningen till rummet blir mycket
              dålig. Samma typ av effektbe- gränsning kan man få genom att hänga gardiner framför
              radiatorn. Även fönsterbrädor hämmar luftströmmarna runt radiatorn, vilket påverkar
              värmespridningen till rummet. Ju närmre fönster- brädan radiatorn sitter, desto mer
              påverkas värme- spridningen. En spalt mellan fönsterbräda och vägg kan reducera
              problemet med att fönsterbrädan hämmar värmespridningen.
            </p>
          </WithImage>
          <p>
            Det är också viktigt att inte möblera tätt intill en radiator. Att till exempel ställa
            en soffa alldeles framför radiatorn begränsar värmeeffekten på samma sätt som ett
            elementskydd. Gemensamt för alla fall där radiatorer är inbyggda eller täckta är att
            luften runt radiatorn värms upp – men utan att spridas vidare i rummet. Fenomenet kan då
            också påverka radiatorns termostat, så att den tror att rummet är varmt utan att det är
            det. Då stänger termostaterna ofta av värmetillförseln för tidigt, vil- ket gör rummet
            kallare. Man kan då behöva söka andra lösningar, som en termostat med extern
            temperaturmätare (givare) eller ett vred utan termostatfunktion (handratt).
          </p>
        </div>

        <div id="termostater-och-handrattar">
          <h2>Termostater och handrattar</h2>
          <p>
            En termostat hjälper till att automatiskt reglera flödet till en radia- tor, baserat på
            den omgivande temperaturen. På termostaten finns ett vred med en skala som motsvarar
            olika stängningstemperaturer som gör att man med hjälp av skalan kan reglera vid vilken
            tempe- ratur termostaten ska stänga av flödet till radiatorn. Skalan varierar mellan
            tillverkare, men inställning 3 kan till exempel motsvara en stängningstemperatur på 20
            °C medan inställning 1 kan motsvara 12 °C.
          </p>
          <h3>Högre stängningstemperatur än måltemperatur</h3>
          <p>
            Termostatens stängningstemperatur ska vara högre än den rums- temperatur man
            eftersträvar (måltemperaturen). Det beror på att luften är varmare närmast radiatorn än
            mitt i rummet. Om man har måltemperaturen 21 °C väljer man normalt en
            stängningstemperatur på 23 °C. Om radiatorerna är inbygg- da eller har tjocka
            fönsterbrädor över sig kan man behöva ännu större temperaturskillnad.
          </p>
          <WithImage hAlign="right" src="9" caption="Termostat" captionAlign="center">
            <h3>Tänk på!</h3>
            <p>
              Justera alltid en termostat i små steg. Det tar lång tid (flera timmar) innan man
              märker effekten av en ändrad inställning. Därför gäller det att ha tålamod och bara
              göra små justeringar i taget. Om man exempelvis tycker att det är för varmt bör man
              börja med att sänka ett halvt steg enligt termostatens skala och därefter vänta några
              timmar innan man gör någon ytterligare förändring.
            </p>
          </WithImage>
          <WithImage hAlign="left" src="10">
            <h3>Termostat med extern givare</h3>
            <p>
              För att ta sig runt problemet med att en termostat ”luras” av att stillastående luft
              kring radiatorn blir varm, trots att rumstemperaturen inte är tillräckligt hög, kan
              man i extrema fall använda sig av en ter- mostat med extern temperaturgivare. Det
              innebär att själva känselkroppen flyttats ur termostaten, för att i stället kunna
              monteras på en vägg en bit från radiatorn, där lufttemperaturen inte är direkt
              påverkad av radiatorn. Den externa givaren kom- municerar med termostaten (via ett
              mycket tunt kapillärrör eller på elektronisk väg) om den ska öppna eller stänga.
            </p>
          </WithImage>
          <WithImage hAlign="right" src="11" caption="Handratt" captionAlign="center">
            <h3>Handratt i stället för termostat</h3>
            <p>
              Ett annat alternativ är att montera handrattar på radiatorernas ventiler. En handratt
              är ett vred utan termostatfunktion – vilket ger helt manuell reglering. Man vri- der
              själv upp eller ner för att påverka värmeflödet i radiatorn, beroende på hur varmt man
              tycker att det är och vill ha det. Även handrattar kan vara en lösning då termostater
              blir ”lura- de”. De leder dock ofta till ökad energianvändning, eftersom värmen inte
              automatiskt stängs av när man uppnått önskad temperatur i rummet. På grund av den
              inbyggda fördröjnings- effekten, att det tar tid för all luft i rummet att hinna
              reagera på en ändring, är det också vanligt att man justerar handrat- ten onödigt
              mycket och ofta.
            </p>
            <p>
              <em>
                Att gå från handrattar till termostater är en vanlig energispar- åtgärd, som kan
                betala sig på några månader.
              </em>
            </p>
          </WithImage>
        </div>

        <div id="inomhusklimat">
          <h2>Inomhusklimat</h2>
          <p>
            Hur människors upplever inomhusklimat beror på en mängd faktorer. Lufttemperatur,
            omgivande ytors temperatur, luftfuktighet, drag, hur aktiv man är och vilka kläder man
            har på sig är bara några exempel. Att alla människor uppfattar – och uppskattar –
            enskilda faktorer på olika sätt (som vilken temperatur man föredrar) ökar komplexiteten
            ytterligare. Den upplevda temperaturen, som kallas operativ tempe- ratur, bygger på en
            sammanvägning av flera faktorer som påverkar människors upplevelse av inomhusklimatet.
          </p>
          <h3>Värmesystemet är viktigt – men inte allt</h3>
          <p>
            Värmesystemet påverkar i princip bara en av dessa faktorer: luft- temperaturen. Att
            uppnå ett tillfredsställande inomhusklimat stäl- ler därför krav på att även
            ventilationen fungerar som den ska, att väggar och fönster är välisolerade, och så
            vidare. Under årens lopp kan mycket hända i en fastighet.
          </p>
          <p>
            Statistiska undersökningar av människors upplevelse av inomhus- klimat visar att även
            när man uppnått en operativ temperatur som majoriteten föredrar, då är fortfarande cirka
            6 % av de tillfrågade missnöjda med inomhusklimatet. De tycker antingen att det är för
            varmt eller för kallt. Det är en viktig insikt att ha med sig i arbeten med
            inomhusklimat. Även då man nått så långt det går kommer vissa att vara missnöjda.
          </p>
          <WithImage
            hAlign="right"
            src="12"
            caption="Möblera om möjligt i vistelsezonen. Ytterväggar och fönster är ofta svalare än övriga ytor."
          >
            <p>
              Det går inte att ställa samma krav på inomhusklimat i alla delar av ett rum eller en
              lägenhet. Ytterväggar och fönster är till exempel ofta svalare än övriga ytor och den
              som ställer sig in- till dessa kommer att uppleva att det är kallt. Den del av ett rum
              där man kan ställa krav på inomhusklimatet kallas för vistelsezonen.
            </p>
          </WithImage>
          <WithImage
            src="13"
            caption="Vistelsezonen i hemmiljö definieras i Folkhälsomyndighetens allmänna råd om temperatur inomhus (FoHMFS 2014:17)"
          >
            <h3>Myndighetskrav på inomhusklimat i bostäder</h3>
            <p>
              Vistelsezonen i hemmiljö definieras i Folkhälsomyndighetens allmän- na råd om
              temperatur inomhus (FoHMFS 2014:17): ”zon i ett rum avgränsad horisontellt 0,1 och 2,0
              meter över golv samt vertikalt 0,6 meter från innervägg och 1,0 meter från yttervägg”.
              Folkhälsomyndighetens krav på inomhusklimat i bostäder säger att den operativa
              temperaturen i vistelsezonen bör ligga mellan 20 och 23 °C, men aldrig under 18° C
              eller långvarigt över 24 °C (kortvarigt accepteras upp till 26 °C). Eftersom kraven
              gäller operativ tempera- tur och inte lufttemperatur, som man kan mäta med en vanlig
              termo- meter, kan det vara svårt att veta om man ligger ”rätt”. Ett riktvärde att utgå
              ifrån är om lufttemperaturen understiger 20 °C, då finns skäl att utreda om man
              uppfyller kraven på operativ temperatur.
            </p>
          </WithImage>
        </div>

        <div id="radiatorventiler">
          <h2>Radiatorventiler</h2>
          <p>
            Radiatorventilen reglerar flödet till respektive radiator – och det är radiatorventilens
            maximala öppning man ställer in vid en injustering. Därefter monterar man en termostat
            utanpå ventilen, som gör att man kan öppna eller stänga ventilen beroende på omgivande
            tem- peratur. I ett värmesystem är radiatorventilen den komponent som oftast har kortast
            livslängd – därför är det vanligt att man ser till att byta alla radiatorventiler vid en
            injustering. Eftersom det finns många olika både typer och fabrikat av ventiler kan det
            skilja stort i såväl arbets- insats som kostnad, beroende på vilken typ av ventiler man
            har.
          </p>
          <div className="flexedContent">
            <WithImage placement="top" src="14">
              <h4>Byte av ventil</h4>
              <p>
                Vanligast är att man byter själva ventilen, alltså hela ventilhuset inklusive den
                inre mekaniken.
              </p>
            </WithImage>
            <WithImage placement="top" src="15">
              <h4>Byte av ventilinsats</h4>
              <p>
                Ibland är det möjligt att bara byta den inre mekaniken, som kallas för ventilinsats.
              </p>
            </WithImage>
            <WithImage placement="top" src="16">
              <h4>Byte av ventilkoppel</h4>
              <p>
                I vissa fall räcker det inte att byta bara ventilen eller ven- tilinsatsen – utan
                man behö- ver byta hela ventilkopplet. I ventilkopplet ingår, utöver själva
                ventilen, även kringlig- gande rör och kopplingar.
              </p>
            </WithImage>
          </div>

          <h3>Förstudie säkerställer</h3>
          <p>
            För att redan innan arbetet påbörjas kunna presentera vad som krävs inleder vi med en
            förstudie, då vi utreder vilken åtgärd situatio- nen och systemet är i behov av.
          </p>
          <h3>Ljud i radiatorventiler</h3>
          <p>
            Kraftigt susande ljud är symtom på att ett värmesystem behöver in- justering. Även helt
            fungerande och moderna ventiler är dock sällan helt tysta. Dagens krav på
            energibesparing gör att man jobbar med mycket mindre ventilöppningar än vad man gjorde i
            äldre system, för att effektivt kunna reglera flödena. Om man byter från riktigt gamla
            radiatorventiler till moderna kan man därför uppleva att det tillkom- mer ett svagt
            susande ljud som tidigare inte funnits där. Det är helt normalt, men kan upplevas
            störande innan man vant sig.
          </p>
        </div>

        <div id="stamventiler">
          <h2>Stamventiler</h2>
          <p>
            På alla de stammar som förgrenar sig genom byggnaden för att spri- da värmen, sitter det
            normalt ventiler. De så kallade stamventilerna har två uppgifter: Dels gör de det
            möjligt att stänga av vätskeflöden i delar av systemet (till exempel vid lokala
            arbeten). Dels gör de det möjligt att kontrollmäta vätskeflöden.
          </p>
          <p>
            Vanligast är att tilloppsledningen har en avstängningsventil och att returledningen har
            en injus- teringsventil (även kallad regler- ventil). Avstängningsventilen är bara till
            för att kunna stänga av flödet, medan injusteringsventi- len har ett särskilt mättuttag
            för att man ska kunna mäta flödet genom ventilen. Med injusteringsventilen kan man
            säkerställa att man uppnår balans i tryck och flöde mellan olika stammar, så att varje
            stam får rätt flöde.
          </p>
          <p>
            Det förekommer även att stammar saknar injusteringsventiler och bara har
            avstängningsventiler. Det kan till exempel handla om stam- mar som har få radiatorer
            kopplade till sig och/eller där man inte ser behov av att kunna mäta flödet i stammarna.
          </p>
          <div className="flexedContent">
            <WithImage
              src="17"
              caption="Insjusteringsventil & Avstängningsventil"
              captionAlign="center"
            />
            <WithImage src="18" caption="Differenstrycksventil" captionAlign="center" />
          </div>
          <h3>Självreglerande ventiler</h3>
          <p>
            Det finns även ventiler som har en viss självreglerande funktion, man brukar då tala om
            differenstryck- sventiler eller differenstrycksre- gulatorer. Då sitter det en injuste-
            ringsventil i tilloppsledningen och en differenstrycksregulator i retur- ledningen. De
            båda ventilerna är sammanbundna via ett mycket tunt kapillärrör, för att kunna känna av
            tryckfall i stammen. Ökat tryckfall innebär att flödet är högre än tänkt – och ventilen
            kan då automatiskt strypa flödet. I mindre värmesystem finns sällan behov av den här
            ventiltypen eftersom tryckvariationerna i små värmesystem ofta är små.
          </p>
          <p>
            Differenstrycksventiler är emellertid användbara i större värmesys- tem samt i kylsystem
            eftersom behoven av värme och kyla då är mer skiftande vilket ger större
            tryckvariationer.
          </p>
          <p>
            Det finns även differenstrycksreglerade ventiler för radiatorer, som fungerar ungefär
            som differenstrycksventiler som sitter på stammar. De säkerställer att flödet inte
            förändras även om trycket skulle göra det. Differenstrycksreglerade ventiler underlättar
            injusteringsarbe- tet och är bra framförallt i äldre anläggningar, där det kan finnas
            bristfälliga ritningsunderlag eller vara svårt att följa hur rören är dragna.
          </p>
          <p>
            Viktigt att veta är att värmesystem alltid behöver injusteras – även om man har
            självreglerande differenstrycksventiler.
          </p>
          <WithImage src="19" caption="Avstängningsventiler" captionAlign="center" />
          <WithImage src="20" caption="Tvårörssystem" captionAlign="center" />
          <WithImage src="21" caption="Ettrörssystem" captionAlign="center" />
        </div>

        <div id="olika-kopplingsprinciper">
          <h2>Olika kopplingsprinciper</h2>
          <p>
            Radiatorer kan vara inkopplade på olika sätt. Vanligaste kopplings- principen är ett så
            kallat tvårörssystem, där alla radiatorer är paral- lellkopplade på värmestammar som
            förgrenar sig genom byggna- den. Men radiatorer kan även vara seriekopplade i slingor om
            4–6 radiatorer, vilket kallas ettrörssystem. Slingorna är sedan parallellk- opplade på
            värmestammarna. Ju längre ut i ettrörssystemets radia- torslinga man kommer, desto lägre
            blir temperaturen på vattnet – till skillnad från i tvårörssystemet, där alla radiatorer
            får samma vattent- emperatur. Ettrörssystemen är ovanliga i nya hus, men installerades
            ofta under 1970-talets miljonprogram.
          </p>
          <p>
            De vanligaste kopplingsprinciperna är alltså så kallade ett- och två- rörssystem, men
            det förekommer även blandningar av de två och andra varianter.
          </p>
          <p>
            OBS! <br />
            Det är viktigt att alltid utreda vilken kopplingsprincip som finns i byggnaden, eftersom
            olika system kräver olika åtgärder och tillvägagångssätt för injustering.
          </p>
        </div>

        <div id="vattenkvalitet">
          <h2>Vattenkvalitet</h2>
          <p>
            Det är lätt att förbise en av värmesystemets viktigaste komponenter: vatten. Men
            eftersom värmesystemets alla tekniska komponenter kommer i kontakt med vattnet som ska
            föra värmen från centralen ut i systemet är det viktigt att det håller rätt kvalitet.
            Ett bra vatten ska vara fritt från både föroreningar och gaser.
          </p>
          <h3>Föroreningar</h3>
          <p>
            Orenheter kan sätta igen ventiler och skapa beläggningar i till ex- empel rör och
            värmeväxlare, vilket kan leda till att ventiler fastnar i stängt läge och att såväl
            värmeväxlare som radiatorer tappar vär- meöverförande förmåga. En vanlig förorening i
            värmesystem är magnetit som ofta uppstår på grund av invändig korrosion. Magnetit
            upptäcker man ofta när man luftar radiatorer, eftersom vatten som är förorenat med
            magnetit blir svart. Att ha vatten med hög syrehalt i ett värmesystem ökar risken för
            invändig korrosion.
          </p>
          <h3>Gaser</h3>
          <p>
            Gaser, som kväve och syre, i vattnet kan leda till en rad problem. Mik- robubblor av
            luft kan till exempel sätta sig i små ventilöppningar och hämma flödet. Det kan också
            uppstå problem med ljud i ventiler, om mikrobubblor strömmar genom ventilöppningar.
          </p>
          <h3>Rena system fungerar bättre</h3>
          <p>
            Man tjänar på att se över och vårda sina värmesystem. Rena system leder såväl till
            effektivare värmeöverföring som bättre vattenflöde genom ventiler, radiatorer och
            rörsystem. Det finns idag bra tekniska lösningar för att säkerställa god vattenkvalitet.
          </p>
          <h3>Avgasare</h3>
          <p>
            När man fyller på ett värmesystem använder man normalt färskvat- ten (kall- eller
            varmvatten), men eftersom vatten innehåller syre så syresätter man samtidigt systemet.
            För att få bort luften ur vatt- net bör man montera en avgasare, en form av
            avluftningsapparat, i värmecentralen. Avgasaren avluftar vattnet när det passerar
            centra- len, ofta genom att sänka trycket med hjälp av vakuum. När trycket sjunker
            frigörs gaserna, som då kan ledas bort. Avgasare kan monte- ras tillfälligt i ett system
            och det finns mobila avgasare att hyra. Vår rekommendation är dock att man köper en egen
            avgasare för per- manent installation, eftersom gaser kommer att leta sig in i systemet
            igen när den mobila avgasaren demonterats.
          </p>
          <WithImage hAlign="right" src="22">
            <h3>Filter</h3>
            <p>
              För att ta bort föroreningar finns effektiva finmaskiga filter som man kan installera
              permanent i systemet. Välj helst filter med magnetsta- var, eftersom de effektivt
              filtrerar bort magnetit.
            </p>
            <h3>Rengöring</h3>
            <p>
              Om man genomför byte av ventiler eller liknande ingrepp i ett system som tidigare inte
              haft filter och avgasnings- utrustning – då kan man med fördel passa på att göra en
              mer omfattande rengöring av systemet. För att göra rent ett värmesystem ansluter man
              ett särskilt tvättaggregat med filter och magnetfällor, ibland använder man även en
              mild kemikalie för att lösa eventuella beläggningar.
            </p>
          </WithImage>

          <WithImage src="23" caption="Fjärrvärme" captionAlign="center" />
          <WithImage src="24" caption="Bergvärme" captionAlign="center" />
        </div>

        <div id="varmecentralen">
          <h2>Värmecentralen</h2>
          <p>
            Från vilken källa man hämtar sin värme och hur värmen produceras kan skilja. Den kan
            hämtas utifrån eller produceras i husets egen värmecentral. Förutsättningarna har också
            förändrats genom åren. Fram till 1970-talet var det till exempel mycket vanligt med
            oljepan- nor, medan det är fjärrvärmen som dominerat på senare tid.
          </p>
          <p>
            Den som har fjärrvärme får varmt vatten som producerats i ett värmeverk och sedan
            distribuerats genom nedgrävda rör. Värmen överförs till abonnenterna via
            fjärrvärmecentralens värmeväxlare till husets värmesystem. Det är alltså inte samma
            vatten som cirkulerar i rören i gatan som i husets värmesystem.
          </p>
          <p>
            Den som inte har fjärrvärme producerar i stället värmen lokalt. Van- ligt är till
            exempel att ha bergvärme, då man hämtar värmeenergi ur ett djupt borrhål. Med hjälp av
            en värmepump höjer man tempera- turen på värmen från berget (som håller cirka 6 °C), så
            den går att nyttja i värmesystemet. Liksom i fjärrvärmesystemet är vätskan som
            cirkulerar i berget skild från den vätska som finns i själva värmesys- temet.
          </p>
          <p>
            Även el- och oljepannor förekommer fortfarande. Det är idag också vanligt att kombinera
            olika värmekällor, exempelvis fjärrvärme och bergvärme.
          </p>
        </div>

        <div id="reglering-och-overvakning">
          <h2>Reglering och övervakning</h2>
          <p>
            Inomhustemperaturen i ett hus regleras såväl lokalt i enskilda rum som centralt i
            värmesystemet. Lokalt har varje radiator ofta en termostat, vilken reglerar värmen genom
            att strypa vätskeflödet till radiatorn när rumstemperaturen överstiger en viss nivå. På
            så sätt tillförs inte onödig värme till ett rum som för stunden har värmetillskott från
            annat håll, om till exem- pel solen strålar in eller om det vistas många personer i
            rummet.
          </p>
          <p>
            Den centrala regleringen sker i stället genom att man förändrar temperaturen på vattnet
            som cirkulerar i systemet. Temperaturen baseras på utomhustemperaturen: Ju lägre
            utomhustemperaturen är, desto högre ska temperaturen på värmevattnet vara.
          </p>
          <p>
            Tanken är alltså att effekten på radiatorerna i första hand regleras av vilken
            vätsketemperatur man centralt förser dem med. Termostater- nas funktion är sedan att
            kompensera för lokala avvikelser. Det totala vattenflödet i systemet är därför relativt
            konstant, oavsett utomhus- temperatur.
          </p>
          <WithImage hAlign="right" vAlign="center" src="25">
            <h3>Värmekurvan</h3>
            <p>
              Den temperatur man värmer vattnet till cen- tralt kallas framledningstemperatur.
              Vilken framledningstemperatur man bör ha vid olika utomhustemperaturer går att räkna
              ut teoretiskt, baserat på hur värmesystemet är dimensionerat.
            </p>
            <p>
              Relationen mellan framledningstemperatur och utomhustemperatur kallas ”kurva” el- ler
              ”värmekurva” och är teoretiskt helt linjär. Det finns dock ofta möjligheter att lägga
              in brytpunkter i kurvan och det är vanligt att inte göra styrsystemets värmekurva helt
              linjär. Att förskjuta en kurva upp eller ner kallas parallellförskjutning. Ibland
              säger man också att man ”sänker” eller ”höjer” kurvan.
            </p>
          </WithImage>
          <h3>Olika faktorer påverkar temperaturupplevelsen</h3>
          <p>
            När utomhustemperaturen ligger runt 0°C brukar man till exempel vilja ha en högre
            framledningstemperatur än den teoretiska. Inte för att effektbehovet då är större utan
            för att människor upplever luften som kall och rå när det är nollgradigt – och därför
            vill ha mer värme från sina radiatorer. Hur man upplever inomhustemperaturen beror på
            många faktorer, luftfuktighet är en faktor som spelar mycket stor roll och som gör sig
            extra påmind när utomhustemperaturen ligger runt nollan.
          </p>
          <h3>Nya möjligheter med digitalisering</h3>
          <p>
            Digitaliseringen skapar nya möjligheter till reglering av värmesystem. Idag är det till
            exempel möjligt att kontinuerligt mäta temperatu- ren lokalt i huset, genom att
            installera temperaturgivare i enskilda lägenheter. Med nya möjligheter att lagra stora
            mängder mätdata kan man också bilda sig uppfattningar om exempelvis byggnadens förmåga
            att lagra värme (byggnadens värmetröghet). Det finns idag flera system som med hjälp av
            väderprognoser kan kompensera framledningstemperaturen utifrån hur vädret beräknas bli.
            Om det till exempel är väldigt kallt ute och man vet att temperaturen under det kommande
            dygnet ska stiga, då kan man utnyttja byggnadens värmetröghet och dra ner på värmen
            innan det hunnit bli varmt på riktigt. Utvecklingen inom området går fort.
          </p>
        </div>

        <div id="projektets-gang">
          <h2>Projektets gång</h2>
          <ol>
            <li>
              <h3>Förstudie/Nulägesanalys</h3>
              <p>
                När vi står inför ett nytt projekt inleder vi med en förstudie, då vi inventerar vad
                det är för system vi står inför och analyserar hur systemet mår. Vi gör då bland
                annat stickprovskontroller i lägenheter. Inventeringen är nödvändig för att sä-
                kerställa rätt tillvägagångssätt och åtgärder. Under arbetet kartlägger vi bland
                annat vilka aktuella kopplingsprinciper systemet innehåller och stu- derar radiator-
                och stamventiler. Vi tar också prov på vätskan i systemet för att upptäcka
                eventuella föroreningar, korrosionsangrepp eller liknande.
              </p>
              <h3>Inte alltid alla svar</h3>
              <p>
                En förstudie ger oss många svar som underlättar och effektiviserar arbetet, men den
                kan inte garan- tera oss alla svar vi behöver. Vissa saker är svåra eller omöjliga
                att se utan att plocka isär systemet, de måste testas fram. Därför ska man vara
                medve- ten om att det kan dyka upp saker på vägen när vi går in och gör
                injusteringar. Det är inte ovanligt att upptäcka brister i systemet som kräver
                ytterligare åtgärder vid själva injusteringsarbetet, till exempel igensatta
                värmeväxlare eller tryckfall i ingjutna rör.
              </p>
            </li>
            <li>
              <h3>Åtgärdsförslag</h3>
              <p>
                Resultatet från förstudien sammanfat- tas sedan i ett antal åtgärdsförslag. Ett
                vanligt behov, och därmed även förslag på åtgärd, är att byta ut termostater och
                venti- ler. Fokus är att skapa goda förutsättningar för injustering och att
                uppdatera systemet till en nivå som gör att det kan fungera bra i många år framöver.
              </p>
            </li>
            <li>
              <h3>Projektering och injusteringsberäkning</h3>
              <p>
                Är värmesystemet överdimensionerat? Underdimensionerat? Eller behöver det bara
                rengöras? Åtgärdsförslagen kan medfö- ra viss projektering för att dimensionera nya
                komponenter. Vi genomför en beräkning av byggnadens behov av värmeeffekt, vilken se-
                dan ligger till grund för kommande injustering. I beräkningen ingår även en
                bedömning av radiatorsystemets kapacitet, alltså dess möj- ligheter att leverera den
                nödvändiga värmeef- fekten. På fackspråk talar vi då om ”installerad effekt”.
              </p>
            </li>
            <li>
              <h3>Genomförande/Uppdatering</h3>
              <p>
                Så är det dags att genomföra åtgärdsför- slagen – om radiatorventiler behöver bytas
                innebär det besök i lägenheter. I det här skedet tas värmesystemet ur drift och vi
                tömmer hela syste- met på all vätska. Det är därför ett moment som behöver
                genomföras under sommarhalvåret, då det inte finns något värmebehov. Under arbetets
                gång installerar vi nu också eventuellt filter och avgasningsutrustning.
              </p>
            </li>
            <li>
              <h3>Rengöring</h3>
              <p>
                Om förstudien visat att det finns behov av rengöring så utför man rengöringen direkt
                efter ventilbyte. Då står nämligen alla ventiler fullt öppna och det är lätt att
                skapa det höga flöde i rören som krävs för att få med sig föroreningar ut ur
                systemet. Rengöring genomför man ofta genom att ansluta ett särskilt tvättaggregat
                till systemet. Man kan också behöva milda kemikalier för att lösa beläggningar i
                rören. Under rengöringen cirkule- ras vätskan genom filter med magnetfällor, för att
                utöver partiklar även fånga magnetit som kan ha bildats i systemet.
              </p>
            </li>
            <li>
              <h3>Förinställning</h3>
              <p>
                Med injusteringsberäkningen som grund genomför vi en grundinställning, eller förin-
                ställning som det också kallas, av samtliga ventiler i systemet. Förinställningens
                injustering baseras inledningsvis på teoretiska värden och den kan därför behöva
                justeras i efterhand. Vid en förin- ställning demonterar vi alla termostater i
                systemet – med undantag för system där gamla radiatorven- tiler blivit ersatta med
                nya. Om radiatorventilerna är bytta har termostaterna nämligen ännu inte blivit
                monterade. Syftet med injustering utan ter- mostater är att det tillåter fullt flöde
                i hela syste- met, vilket gör att man kan simulera en riktigt kall dag då alla
                radiatorer behöver avge maximalt med värme (kallas ”full last” på fackspråk).
              </p>
            </li>

            <li>
              <h3>Flödesmätning</h3>
              <p>
                När förinställningen är avklarad är det dags att göra en flödesmätning på stammarnas
                venti- ler. Vid flödesmätningen kan man, vid behov, göra vissa justeringar för att
                skapa god balans mellan olika värmestammar. Det kan dock vara bra att veta att
                protokoll från flödesmätningar kan se lite olika ut, beroende på hur systemet är
                utformat. Det är till exempel inte ovanligt att rör är ingjutna i väggar och
                bjälklag – vilket kan göra det omöjligt att avgöra exakt vilka stamventiler som
                betjänar vilka radiatorer. I sådana fall får man balansera stammarna mot var- andra
                med hjälp av en tryckmätning (differenstryck över stammar) för att se till att
                trycken i stammarna är lika. Olika behov och tillvägagångssätt skapar helt enkelt
                olika förutsättningar.
              </p>
            </li>

            <li>
              <h3>Efterkontroll</h3>
              <p>
                Vid en efterkontroll mäter vi inomhustem- peraturer, för att säkerställa att vi
                uppnått en god balans med en jämn inomhustemperatur. Eftersom inomhustemperaturen
                aldrig blir perfekt (exakt i förhållande till måltemperaturen), utan anses jämn då
                den ligger inom ±1 °C i förhållande till måltemperaturen, är syftet med
                injusteringen är att uppnå en sådan balans. Efterkontroller utför vi normalt från
                och med januari till och med mars månad, eftersom de behöver genomföras vid kall
                väderlek, då värmesystemet är i drift. Inför efter- kontrollen är alla
                radiatorventiler ännu förinställda utifrån teoretiska beräkningar. Ibland går det
                inte att i förväg förutse värmebehoven i alla rum. Under kontrollen kan vi vid behov
                därför göra mindre jus- teringar för att anpassa inställningarna till verkliga
                förhållanden. Om temperaturen ligger för lågt i enskilda rum bör man utreda orsaken.
                Det behöver inte bero på värmesystemet eller att injusteringen inte är korrekt
                utförd, utan kan exempelvis bero på byggnadstekniska orsaker (som otäta fönster)
                eller problem med ventilationen. Vi gör en bedömning av om det går att kompensera
                eventuella problem med hjälp av värmesystemet, men ibland kan det krävas djupare
                utredningar som ligger utanför injusteringen som uppdrag.
              </p>
              <p>
                <em>
                  För att termostaterna ska reglera värmen effektivt är det en fördel om
                  inomhustemperaturen ligger strax över måltemperaturen innan själva termostat-
                  monteringen genomförs.
                </em>
              </p>
            </li>

            <li>
              <h3>Överlämning/Avslut</h3>
              <p>
                Så när är det klart? Vi lämnar normalt rapport och slutdokumentation efter steg 7.
                Slutdokumentationen består av alla protokoll, inställda värden, uppmätta flöden och
                temperaturer, monterat material, drift- och underhållsbeskrivningar.
              </p>
            </li>
          </ol>
        </div>
>>>>>>> varmehandboken
      </styles.content>
    </styles.varmehandbok>
  )
}

export default Varmehandbok
