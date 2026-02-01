# QR Code Sheet Generator

A small web app to generate **multiple QR codes** from a list of alphanumeric codes and automatically **lay them out on an A4 sheet** (7 columns), ready for printing or PDF export.

[Live demo](qr-code-printer.netlify.app)

---

## 🇬🇧 English

### ✨ Features

* Paste **one code per line**
* Generate QR codes in bulk
* Automatic **A4 layout** (7 columns, print‑friendly)
* Consistent QR size and quiet zone
* Browser printing (`window.print()`)
* No installations required (works on locked corporate machines)

### 🧠 Why this exists

This tool was created to avoid manually pasting QR codes one by one into tables for printing. It turns a repetitive task into a fast, reliable workflow.

### 🛠️ Tech stack

* React
* JavaScript
* CSS Grid (real‑world units in `mm`)
* [`qrcode.react`](https://github.com/zpao/qrcode.react)
* [`react-icons`](https://react-icons.github.io/react-icons/)

### 🚀 Getting started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

### 🖨️ Printing

* Click **Print** to open the browser print dialog
* Recommended settings:

  * Paper size: **A4**
  * Scale: **100% / Actual size**
  * Margins: **None** (handled via CSS)

### 🧩 Input format

```
CODE123
ABC456
XYZ789
```

* One code per line
* Empty lines are ignored
* Codes are normalized (trimmed, upper‑cased)

### 🔮 Possible improvements

* PDF export
* Input validation with user feedback
* Duplicate detection
* Multiple layouts / label formats

---

## 🇮🇹 Italiano

### ✨ Funzionalità

* Incolla **un codice per riga**
* Generazione massiva di QR code
* Impaginazione automatica su **A4** (7 colonne)
* Dimensioni coerenti e quiet zone standard
* Stampa diretta dal browser
* Nessuna installazione necessaria

### 🧠 Perché questo progetto

Il tool nasce per eliminare il lavoro manuale di incollare QR code uno a uno in tabelle per la stampa, rendendo il processo veloce e affidabile.

### 🛠️ Tecnologie

* React
* JavaScript
* CSS Grid (unità reali in `mm`)
* `qrcode.react`
* `react-icons`

### 🚀 Avvio del progetto

```bash
npm install
npm run dev
```

Apri poi l’URL locale indicato nel terminale.

### 🖨️ Stampa

* Clicca su **Stampa**
* Impostazioni consigliate:

  * Formato carta: **A4**
  * Scala: **100% / Dimensioni reali**
  * Margini: **Nessuno**

### 🧩 Formato input

```
CODICE123
ABC456
XYZ789
```

* Un codice per riga
* Le righe vuote vengono ignorate
* I codici vengono normalizzati

### 🔮 Miglioramenti futuri

* Esportazione PDF
* Validazione dell’input
* Gestione duplicati
* Layout alternativi

---

## 👩‍💻 Author

Made with ❤️ by **[confett0](https://github.com/confett0)**
