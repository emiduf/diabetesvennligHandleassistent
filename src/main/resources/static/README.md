# Diabetesvennlig handleassistent 

Et frontend-prosjekt som viser en konseptløsing for en digital handleassistent rettet mot personer
med diabetes, helsepersonell og pårørende. 

Prosjektet er inspirert av Oda.no og er utviklet som et hobbyprosjekt. 

# Hvorfor dette prosjektet?
Etter flere år i helsesektoren har jeg sett hvor ofte matbestillinger skjer på vegne av pasienter 
med diabetes, og det går ofte mye tid på å lese næringsinnhold og ingredienser.
Denne løsningen skal effektivisere og gjøre valg av matvarer enklere og tryggere. 

# Funksjonalitet 
- Filter for diabetesvennlige produkter 
- Visuell meny inspirert av Oda.no 
- Produktside med pålegg 
- Figma prototype
- Enkel test med `console.assert()`

# Teknologier som er brukt 
- HTML
- CSS
- JavaScript
- Figma
- Test med `Node.js` (`test-filtrering.js`) 

# Lenker
- 🔧 [Se koden på GitHub](https://github.com/emiduf/diabetesvennligHandleassistent)
- 🎨 [Se Figma-prototypen](https://www.figma.com/proto/6hkAGfV36rfyo2PvYdvWaX/Diabetesvennlig-handlessistent-prototype?node-id=0-1&t=PLpWHAIRN4ecgqhQ-1)

# Faglig kobling (OsloMet)
| Emne                      | Brukt i prosjektet                         |
|---------------------------|--------------------------------------------|
| Webutvikling (DATA1200)   | HTML, CSS og strukturering                 |
| Webprogrammering (DATA1700)| JavaScript og DOM                         |
| Interaksjonsdesign (ADTS1600) | Figma-prototype, filtermeny             |
| Visualisering (ADSE3200)  | UI-presentasjon av produktdata            |
| Testing (ADTS2310)        | Logikktest av filterfunksjon              |
| Systemutvikling (DAFE2200)| Planlegging, prototype → kode             |

# Kom i gang
1. Last ned prosjektet
2. Åpne `paalegg.html` i nettleseren
3. Klikk på “Filter” og prøv å filtrere produkter
4. Kjør enkel test med:

```bash
cd path/til/prosjektet/static
node test-filtrering.js
