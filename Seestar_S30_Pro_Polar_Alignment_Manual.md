# Seestar S30 Pro – Polar Alignment i EQ Mode

## Praktisk steg-för-steg-manual

Den här guiden är anpassad för **Seestar S30 Pro** och den nuvarande Seestar-appen 2026. Den bygger på Seestars officiella instruktioner samt de två videotranskriptionerna. Extra vikt ligger på att få en **verifierad polar alignment**, inte bara ett grönt värde i appen.

I den nyare Seestar-appen från 2026 ligger `Mount Mode` under:

`Me → Device Management → Mount Mode`

Äldre guider visar ibland:

`Profile/Me → Advanced Features → Mount Mode`

så bli inte förvånad om en äldre video ser annorlunda ut.

Officiell appguide:
https://us.seestar.com/blogs/tutorial/feature-navigation-on-the-me-page

---

## 1. Vad gör Polar Alignment?

När Seestar normalt står rakt använder den **Alt-Az Mode**. Då följer den objektet genom att röra sig i både höjd och sidled. Det fungerar bra för kortare exponeringar, men ger efter hand **field rotation**.

I **EQ Mode** lutar du i stället hela Seestar så att dess rotationsaxel ligger parallellt med jordens rotationsaxel och pekar mot den norra himmelspolen. Det minskar field rotation och gör längre enskilda exponeringar möjliga.

Seestar S30 Pro stöder EQ Mode med en lämplig wedge eller ett stativhuvud som exempelvis TH10.

Officiell manual:
https://i.seestar.com/owe__prod/static/manuals/Seestar%20S30%20Pro%20Manual.pdf

Målet är alltså ungefär:

**Seestars rotationsaxel → Norra himmelspolen**

I Sverige innebär det att teleskopet lutar ganska kraftigt eftersom vår latitud ligger långt norrut.

---

# DEL 1 – FÖRBERED UTRUSTNINGEN

## 2. Du behöver

Du behöver:

- Seestar S30 Pro
- Ett stabilt stativ
- Ett stativhuvud eller en EQ-wedge som kan justeras både i **altitude/elevation** och **azimuth**

Seestars officiella TH10 fungerar, men proceduren är densamma med andra stabila EQ-wedges.

Det viktigaste är att justeringarna kan göras små och kontrollerade. Ett glappt kulhuvud fungerar betydligt sämre eftersom hela teleskopet lätt flyttar sig när man låser det.

För TH10 sker sidjusteringen vid basen och höjdjusteringen vid huvudleden.

Guide för utrustning:
https://www.seestar.com/blogs/tutorial/how-to-switch-to-eq-mode-equipment-setup-guide

---

## 3. Ställ stativet stabilt

Ställ stativet på ett **fast underlag**.

Undvik om möjligt:

- Mjuk jord
- Lösa träplankor
- Ojämna ytor
- Underlag där stativbenen kan röra sig medan du justerar

Nivellera stativet så bra som möjligt.

Seestar rekommenderar att ett av stativbenen riktas mot **true north**, alltså geografiskt norr, och att teleskopets tyngdpunkt placeras över ett stativben för bättre stabilitet.

Guide:
https://us.seestar.com/blogs/tutorial/equatorial-mode

Polar alignment behöver inte börja perfekt. Det är appens plate solving som ska göra finjusteringen.

---

# DEL 2 – GROV POLAR ALIGNMENT

## 4. Rikta teleskopet ungefär mot norr

Vrid hela stativet eller wedgen så att Seestars polaraxel pekar ungefär mot norr.

Det viktiga här är **riktningen på själva Seestar**, inte kamerans aktuella riktning.

Seestar ska sitta så att:

**Power-knappen är riktad uppåt.**

Den övre delen av teleskopet ska vara riktad ungefär mot **norr**.

Det är samma orientering som visas i Seestar-appen.

Guide:
https://us.seestar.com/blogs/tutorial/how-to-switch-to-eq-mode-on-seestar-app

### Behöver jag se Polaris?

Nej, inte nödvändigtvis.

Du behöver rikta uppställningen ungefär mot den norra himmelspolen, men Polaris behöver inte ligga synlig i själva kamerabilden under mätningen.

Seestar fotograferar andra stjärnfält och använder **plate solving** för att räkna ut avvikelsen.

Detta demonstreras även i videon:

**Seestar EQ Mode | How To Get Perfect Polar Alignment!**

https://www.youtube.com/watch?v=dORPiGju3kI

Där lyckades polar alignment med S30 trots att Polaris inte var synlig.

Du måste däremot ha **tillräckligt med stjärnor någonstans på den del av himlen som Seestar använder för mätningen**.

---

## 5. Ställ in ungefärlig latitud

Luta Seestar tills vinkeln motsvarar din latitud.

Det enklaste är att använda värdet som visas i Seestar-appen i stället för att försöka få en mekanisk gradskala helt perfekt.

När vinkeln är ungefär rätt:

**Lås höjdjusteringen lätt, men inte så hårt att den inte går att finjustera senare.**

Den officiella instruktionen är att power-knappen ska vara uppåt och att Seestar ska lutas till den aktuella latituden innan den exakta polar alignment-mätningen startas.

---

# DEL 3 – AKTIVERA EQ MODE

## 6. Starta Seestar från Home Position

Det är bäst att göra detta med Seestar i **Home Position**.

Seestar rekommenderar att man stänger av teleskopet, startar det igen och därefter byter Mount Mode.

Starta därför Seestar och anslut telefonen eller surfplattan som vanligt.

---

## 7. Öppna Mount Mode

I den nuvarande appen:

`Me → Device Management → Mount Mode`

Här bör det initialt stå:

`Az/Alt Mode`

Tryck på:

`Mount Mode`

I äldre appversioner kan sökvägen i stället vara:

`Me/Profile → Advanced Features → Mount Mode`

Den nya menystrukturen från juli 2026 placerar däremot `Mount Mode` direkt under `Device Management`.

Guide:
https://us.seestar.com/blogs/tutorial/feature-navigation-on-the-me-page

---

## 8. Växla till EQ Mode

Kontrollera en sista gång att:

- Power-knappen är uppåt
- Seestar pekar ungefär mot norr
- Lutningen ungefär motsvarar din latitud

Tryck sedan:

`Switch`

Appen kan säga att Seestar måste återgå till Home Position.

Tryck:

`OK`

När växlingen är klar ska det stå:

`EQ Mode`

---

# DEL 4 – MÄT POLAR ALIGNMENT

## 9. Tryck på Get Polar Align Deviation

Tryck:

`Get Polar Align Deviation`

I den nyare proceduren kan appen därefter fråga vilket område av himlen den ska använda.

Du får ett val med ungefär:

`1  2  3  4  5`

Välj ett område där himlen är fri.

Undvik:

- Träd
- Hus
- Tak
- Lyktstolpar
- Moln

Position 3 ligger ungefär rakt upp. De andra positionerna flyttar kamerans mätområde åt respektive sida.

Tryck sedan:

`Start to get deviation`

Seestar vrider nu kameran, fotograferar stjärnhimlen och använder **plate solving** för att bestämma hur polaraxeln ligger i förhållande till den verkliga himmelspolen.

Rör inte stativet medan detta sker.

---

# DEL 5 – JUSTERA POLAR ALIGNMENT

## 10. Läs de två felen

Efter mätningen visas två värden.

Ett beskriver felet i sidled:

**Azimuth / horizontal**

Det andra beskriver felet i höjdled:

**Altitude / elevation / vertical**

Appen visar även pilar som anger åt vilket håll teleskopets polaraxel behöver flyttas.

Exempel:

`→ 1.3°`

`↑ 0.5°`

Seestars officiella gräns för godkänd alignment är:

**mindre än 1° på båda axlarna.**

Då visas ett grönt godkänt resultat.

Men för långa exponeringar bör du inte nöja dig med att precis komma under 1°.

---

## 11. Justera AZIMUTH först

Azimuth är rörelsen:

**vänster ↔ höger**

Lossa endast den del av wedgen som reglerar sidled.

Gör en **mycket liten justering**.

Titta på värdet i appen.

Om felet minskar går du åt rätt håll.

Om felet ökar går du åt fel håll.

När värdet är nära noll låser du azimuth-funktionen försiktigt.

På TH10 kan den mekaniska rörelsen se lite bakvänd ut eftersom handtaget och själva teleskopets rotationsriktning inte alltid rör sig åt samma håll.

Följ därför pilen i appen och kontrollera resultatet efter justeringen.

---

## 12. Justera ALTITUDE

Altitude är:

**upp ↕ ned**

Använd höjdjusteringen på wedgen.

Gör återigen mycket små rörelser.

Försök komma så nära:

**0°**

som det praktiskt går.

Du behöver inte jaga exakt `0.0°`, men för fotografering med 60-sekunders exponeringar är det klokt att få båda värdena betydligt närmare noll än Seestars grundkrav på 1°.

---

# DEL 6 – DET VIKTIGASTE STEGET

## 13. Lita inte blint på den kontinuerliga visningen

Detta är den viktigaste detaljen från den andra videon:

**Seestar EQ Mode Trick: How I Get a Perfect Polar Alignment Everytime**

https://www.youtube.com/watch?v=mdaczIbmDbM

När den första riktiga stjärnmätningen är gjord kan appen använda Seestars interna sensorer för att visa hur justeringarna förändras medan du vrider på wedgen.

Det gör justeringen snabb.

Men:

**det betyder inte nödvändigtvis att varje nytt värde bygger på en ny bild av stjärnhimlen.**

Sensorerna kan påverkas av fel eller störningar.

Därför bör man efter en justering göra en ny faktisk mätning mot stjärnorna.

I vissa versioner finns en funktion som kallas exempelvis:

`Refresh Polar Alignment Error`

I andra versioner använder man:

`Get Polar Align Deviation`

igen.

Poängen är densamma:

**Gör en ny bildbaserad mätning efter att du har justerat wedgen.**

---

# DEL 7 – METODEN FÖR EXTRA NOGGRANN ALIGNMENT

## 14. Adjust → Refresh → Adjust → Refresh

Använd följande metod:

**Mät → justera → gör en ny stjärnmätning → justera igen.**

Anta exempelvis att appen först visar:

`Azimuth 0.1°`

`Altitude 0.1°`

Efter en ny riktig mätning kanske resultatet i stället blir:

`Azimuth 0.5°`

`Altitude 0.3°`

Då var den första visningen inte hela sanningen.

Justera igen.

Kör sedan en ny mätning.

Fortsätt tills du får ungefär samma resultat vid upprepade mätningar.

Det är viktigare än att tillfälligt lyckas få displayen att visa exakt:

`0.0° / 0.0°`

---

## 15. Starta sedan hela Polar Alignment igen

När alignmenten ser bra ut gör du ytterligare ett kontrollsteg.

Lämna Polar Alignment.

Gå sedan tillbaka till:

`Mount Mode → EQ Mode → Get Polar Align Deviation`

och starta en **helt ny mätning från början**.

Detta är metoden från den andra videon.

Om den nya mätningen fortfarande visar ungefär samma lilla fel har du mycket starkare bekräftelse på att alignmenten faktiskt är korrekt.

Exempel:

Första omgången:

`0.1° / 0.2°`

Ny omgång:

`0.1° / 0.2°`

Det är betydligt mer övertygande än att det första försöket råkade visa:

`0.0° / 0.0°`

---

# DEL 8 – LÅS ALLT

## 16. Dra åt wedgen

När resultatet är stabilt:

- Dra åt azimuth-låsningen
- Dra åt höjdlåsningen

Gör det försiktigt.

Det är vanligt att alignmenten ändras lite när en skruv dras åt.

Därför är ett bra slutsteg:

**Dra åt → kör Get Polar Align Deviation igen.**

Flytta därefter inte:

- Teleskopet
- Stativet
- Stativbenen
- Wedgen

Fysisk förflyttning efter alignment förstör polar alignment och leder till tracking-problem.

---

# DEL 9 – TESTA RESULTATET

## 17. Börja med 30 sekunder

Gå till Stargazing.

Välj ett lämpligt deep-sky-objekt.

Börja gärna med:

**30 s exposure**

och låt Seestar samla ett antal frames.

Zooma sedan in ordentligt på stjärnorna.

De ska vara i stort sett runda.

Om detta fungerar bra går du vidare.

---

## 18. Testa 60 sekunder

I EQ Mode stöder Seestar längre exponeringstid, inklusive:

**60 s**

Längre exponering gör varje frame känsligare för trackingfel och därmed ökar risken för rejected frames.

Testa därför:

**60 s**

och kontrollera de individuella bilderna.

Bra resultat är:

**Runda stjärnor + låg andel rejected frames**

Det är den slutliga bekräftelsen på att systemet faktiskt fungerar.

Detta är viktigare än om Polar Alignment-skärmen råkar visa `0.0°`.

---

# Snabbversion – rekommenderad rutin

1. Stabilt och någorlunda plant stativ.
2. Power-knappen uppåt.
3. Rikta uppställningen ungefär mot geografiskt norr.
4. Luta Seestar ungefär till din latitud.
5. Starta om Seestar i Home Position.
6. Gå till `Me → Device Management → Mount Mode`.
7. Växla till `EQ Mode`.
8. Kör `Get Polar Align Deviation`.
9. Välj ett klart stjärnfält.
10. Justera azimuth och altitude nära 0°.
11. Kör `Get Polar Align Deviation` eller `Refresh` igen.
12. Justera igen om det behövs.
13. Upprepa tills värdet är stabilt.
14. Lämna polar alignment.
15. Starta polar alignment **från början en gång till**.
16. Kontrollera att du får ungefär samma resultat.
17. Lås alla skruvar.
18. Gör en sista kontrollmätning.
19. Testa först 30 s.
20. Testa sedan 60 s.

**För 60 s är ett reproducerbart resultat nära noll viktigare än att appen vid ett enda tillfälle visar exakt 0.0°.**

---

# Felsökning

| Problem | Trolig orsak | Åtgärd |
|---|---|---|
| `Mount Mode` finns inte där videon visar | Appens menyer har ändrats | I appen 2026: `Me → Device Management → Mount Mode`. |
| Appen säger `Continue to adjust` | Ett eller båda felen är fortfarande ≥1° | Följ pilarna och justera altitude/azimuth. |
| `Get Polar Align Deviation` misslyckas | För få synliga stjärnor | Välj ett annat av områdena 1–5. Undvik moln, träd och byggnader. |
| Mätningen fastnar | Mätområdet är blockerat | Avbryt och välj ett annat scope point. |
| Stjärnorna är oskarpa och plate solving misslyckas | Fokusproblem | Öppna Stargazing och använd `F` eller autofokus, därefter försök igen. |
| Jag ser inte Polaris | Detta behöver inte vara ett problem | Rikta teleskopet ungefär mot norr. Polar alignment använder plate solving på andra synliga stjärnor. |
| Värdet ändras kraftigt efter Refresh | Den kontinuerliga sensorvisningen stämde inte exakt, eller uppställningen flyttades | Utgå från den nya bildbaserade mätningen. Justera och mät igen. |
| Värdet hoppar när jag rör wedgen | Sensor-/kompasspåverkan eller mekanisk rörelse | Undvik metall eller magneter nära Seestar, gör små justeringar och verifiera med ny plate-solving-mätning. |
| Appen visar nästan 0°, men 60 s ger star trails | Det visade värdet har inte verifierats eller stativet har rört sig | Avsluta Polar Alignment och kör den helt från början igen. Kontrollera att samma resultat återkommer. |
| Alignment är bra tills jag drar åt en skruv | Wedgen flyttar sig när den låses | Dra åt försiktigt och gör sedan en helt ny mätning. |
| Resultatet är olika varje gång | Stativ eller wedge är instabilt | Kontrollera marken, stativbenen, quick-release plate och alla låsskruvar. |
| Första mätningen visar extremt stort fel | Fel startorientering | Kontrollera power-knappen uppåt, ungefär korrekt lutning och att teleskopet verkligen är orienterat mot norr. |
| Polar alignment verkar ligga 20–90° fel trots korrekt uppställning | Compass/level calibration kan vara fel eller störd | Kör `Me → Device Management → Sensor Calibration` och kontrollera compass och level calibration. |
| Många 60 s frames rejected | Polar alignment, vibrationer, vind eller trackingfel | Kontrollera alignment igen och jämför med 30 s. |
| Allt fungerade och blev plötsligt sämre | Någon har nuddat stativet | Polar alignment måste göras om. |
| Mätningen fungerar inte trots fri himmel | Moln, dis, dagg eller fokus | Kontrollera visuellt stjärnorna i Stargazing. Fokusera och slå vid behov på dew heater innan nytt försök. |

---

# Den viktigaste tumregeln

**Ett grönt checkmark betyder att Seestar anser att båda avvikelserna är mindre än 1°. Det betyder inte automatiskt att din uppställning är optimal för 60-sekunders exponeringar.**

För bästa resultat:

**Kom nära noll → Refresh → justera → Refresh → starta om Polar Alignment → kontrollera att resultatet går att upprepa.**

Det är kombinationen av:

- Stabilt stativ
- Upprepad plate solving
- Faktiska 30/60-sekunders testbilder

som visar att polar alignment verkligen är bra.

---

# Källor

## Officiella Seestar/ZWO-källor

Seestar S30 Pro Manual  
https://i.seestar.com/owe__prod/static/manuals/Seestar%20S30%20Pro%20Manual.pdf

Feature Navigation on the Me Page  
https://us.seestar.com/blogs/tutorial/feature-navigation-on-the-me-page

How to Switch to EQ Mode on Seestar App  
https://us.seestar.com/blogs/tutorial/how-to-switch-to-eq-mode-on-seestar-app

Equatorial Mode  
https://us.seestar.com/blogs/tutorial/equatorial-mode

EQ Mode Equipment Setup Guide  
https://www.seestar.com/blogs/tutorial/how-to-switch-to-eq-mode-equipment-setup-guide

## Videor

Seestar EQ Mode | How To Get Perfect Polar Alignment!  
https://www.youtube.com/watch?v=dORPiGju3kI

Seestar EQ Mode Trick: How I Get a Perfect Polar Alignment Everytime  
https://www.youtube.com/watch?v=mdaczIbmDbM
