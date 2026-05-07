# Nuova Eurotar - Website 2026

**Circuiti Stampati Professionali | Professional PCB Manufacturing**

Un moderno sito web aziendale per Nuova Eurotar, azienda specializzata nella produzione di circuiti stampati professionali dal 1986.

## 🎯 Caratteristiche

✅ **Design Moderno 2026**
- Interfaccia pulita e professionale
- Palette colori premium (blu profondo, grigio, ciano)
- Typography moderna e responsive
- Animazioni leggere e fluide

✅ **Responsive Design**
- Mobile-first approach
- Funzionamento perfetto su tablet, desktop e dispositivi mobili
- Viewport meta tags configurati

✅ **Struttura Completa**
- **Homepage** - Hero section, servizi, features, CTA
- **Prodotti** - Catalogo completo di circuiti stampati
- **Servizi** - Progettazione, produzione, qualità, after-sales
- **Dove Siamo** - Ubicazione, contatti, strutture, logistica
- **Contattaci** - Form di contatto, FAQ, informazioni

✅ **Interattività**
- Form di contatto funzionale con validazione
- Header sticky con scroll effect
- Menu mobile responsivo
- Smooth scroll per anchor links
- Intersection Observer per animazioni al scroll
- Dark mode ready

✅ **Performance**
- CSS puro senza framework (lightweight)
- JavaScript vanilla moderno
- Nessuna dipendenza esterna
- Ottimizzato per velocità

## 📁 Struttura del Progetto

```
nuova-eurotar-website/
├── index.html              # Homepage
├── prodotti.html          # Catalogo prodotti
├── servizi.html           # Servizi offerti
├── dove-siamo.html        # Ubicazione e contatti
├── contattaci.html        # Form contatti e FAQ
├── css/
│   └── style.css          # Stili principali (CSS custom properties)
├── js/
│   └── main.js            # JavaScript interattività
├── images/                # Cartella per immagini (placeholder)
├── assets/                # Cartella per file aggiuntivi
└── README.md              # Questo file
```

## 🎨 Design System

### Colori

| Colore | Hex | Uso |
|--------|-----|-----|
| Dark Blue | `#0f3d66` | Testi heading, header, footer |
| Graphite | `#2d3e50` | Testi body |
| Cyan | `#00a8cc` | Accenti, CTA primari |
| Light Background | `#f5f7fa` | Background sezioni |
| White | `#ffffff` | Background principale |

### Tipografia

- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Font Sizes**: Scale da xs (0.75rem) a 4xl (3rem)
- **Line Height**: 1.6 per body text

### Spacing

Sistema di spacing coerente basato su variabili CSS:
- `--spacing-md`: 1rem
- `--spacing-lg`: 1.5rem
- `--spacing-xl`: 2rem
- `--spacing-2xl`: 3rem

### Componenti

#### Card
```html
<div class="card">
  <h3 class="card-title">Titolo</h3>
  <p class="card-text">Descrizione...</p>
</div>
```

#### Button
```html
<a href="#" class="btn btn-primary">Pulsante Primario</a>
<a href="#" class="btn btn-secondary">Pulsante Secondario</a>
<a href="#" class="btn btn-dark">Pulsante Scuro</a>
```

#### Grid
```html
<div class="grid grid-3">
  <!-- Crea una griglia a 3 colonne responsive -->
</div>
```

## 🚀 Utilizzo

### Apertura Locale

1. **Scaricare/clonare il progetto**
   ```bash
   git clone <repository-url>
   cd nuova-eurotar-website
   ```

2. **Aprire nel browser**
   - Doppio click su `index.html`
   - O usare un local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx http-server
   ```

3. **Navigare a**: `http://localhost:8000`

### Personalizzazione

#### Colori
Modificare le variabili CSS in `css/style.css`:
```css
:root {
  --color-dark-blue: #0f3d66;
  --color-cyan: #00a8cc;
  /* ... */
}
```

#### Contenuti
Modificare i file HTML direttamente:
- `index.html` - Modificare testi, immagini, CTA
- `prodotti.html` - Aggiungere/rimuovere prodotti
- `servizi.html` - Aggiornare descrizioni servizi
- Etc.

#### Logo e Immagini
1. Creare cartelle `images/` se non esistono
2. Aggiungere le immagini
3. Modificare i path negli HTML:
```html
<img src="images/logo.png" alt="Logo">
```

## 📝 Pagine

### Home (`index.html`)
- Hero section con CTA
- Features (40+ anni, 1000+ clienti, 99.8% qualità, 24/48h)
- Servizi principali (3 card)
- Tipi di prodotti (4 card)
- CTA finale
- Footer completo

### Prodotti (`prodotti.html`)
- 6 tipi di circuiti stampati con specifiche
- 3 categorie opzioni speciali
- Link CTA a contatti

### Servizi (`servizi.html`)
- Progettazione & Engineering
- Produzione Personalizzata
- Qualità e Certificazioni
- Assistenza Post-Vendita
- Timeline processo (4 step)

### Dove Siamo (`dove-siamo.html`)
- Informazioni di contatto
- Placeholder mappa (link Google Maps)
- Strutture aziendali
- Come raggiungerci
- Partner logistici

### Contattaci (`contattaci.html`)
- Form di contatto completo con validazione
- Informazioni di contatto
- Richieste comuni (4 card)
- FAQ (5 domande frequenti)

## 🛠️ JavaScript Features

### Header Scroll Effect
Aggiunge shadow al header quando scrolli:
```javascript
header.classList.add('scrolled');
```

### Mobile Menu
Toggle menu hamburger su mobile:
```javascript
mobileMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
```

### Lazy Loading Animations
Usa Intersection Observer per animare elementi al scroll:
```javascript
observer.observe(element);
```

### Form Validation
Validazione email e campi obbligatori:
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

## 📱 Breakpoints Responsive

| Device | Width |
|--------|-------|
| Mobile | < 480px |
| Tablet | 480px - 768px |
| Desktop | > 768px |

## ♿ Accessibilità

- ✅ Contrasto colori WCAG AA
- ✅ Testi alt su immagini
- ✅ Struttura HTML semantica
- ✅ Link keyboard accessible
- ✅ Form labels associate

## 🔒 Privacy & Cookies

Il sito include sezioni per:
- Privacy Policy (link nel footer)
- Cookie Policy (link nel footer)
- Consenso esplicito nel form contatti

## 🌐 SEO Basics

- ✅ Meta descriptions su ogni pagina
- ✅ Titoli descrittivi
- ✅ Struttura heading logica (h1-h6)
- ✅ Link semantici
- ✅ Open Graph pronto (da configurare)

## 📊 Metriche di Performance

- **Size CSS**: ~25KB
- **Size JS**: ~4KB
- **Immagini**: 0 (pronte per aggiungere)
- **Caricamento**: < 1s su connessione standard

## 🔄 Deployment

### Hosting Suggerito
- **Netlify** - Deploy automatico da Git
- **Vercel** - Ottimizzato per siti statici
- **GitHub Pages** - Gratuito per repo pubblici
- **Shared Hosting** - FTP tradizionale

### Checklist Pre-Deploy
- [ ] Verificare tutti i link interni
- [ ] Aggiornare contatti email/telefono reali
- [ ] Aggiungere logo e immagini aziendali
- [ ] Configurare form submission (Formspree, Netlify Forms)
- [ ] Aggiungere Google Analytics
- [ ] Testare responsiveness
- [ ] Verificare velocità caricamento

## 📞 Contatti

**Nuova Eurotar S.p.A.**
- Email: info@nuova-eurotar.it
- Telefono: +39 06 0000 0000
- Sito: www.nuova-eurotar.it
- P.IVA: 01839691001

## 📄 Licenza

© 2026 Nuova Eurotar S.p.A. - Tutti i diritti riservati.

---

**Creato**: Maggio 2026
**Design**: Modern Premium 2026
**Stack**: HTML5 + CSS3 + JavaScript Vanilla
