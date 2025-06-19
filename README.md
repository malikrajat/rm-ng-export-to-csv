<p align="center">
  <h1 align="center">Angular Export To Csv</h1>
  <p align="center">Advanced, customizable, Optimized ,Minimal, light-weight Angular ratings.</p>
</p>

[![npm](https://img.shields.io/npm/v/ngx-bar-rating.svg)](https://www.npmjs.com/package/rm-ng-export-to-csv)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malikrajat/rm-ng-export-to-csv)

___


# rm-ng-export-to-csv

`rm-ng-export-to-csv` is a lightweight, dependency-free Angular library that enables developers to **export JSON data as CSV** files with just one function call. This library is designed to be highly customizable, performant, tree-shakable, and works seamlessly across all major platforms and browsers.

✅ Supports custom CSV headers <br/>
✅ Compatible with all major browsers (Chrome, Firefox, Safari, Edge, iOS, Android) <br/>
✅ Mobile & tablet friendly <br/>
✅ Zero dependencies <br/>
✅ Tree-shakable and optimized for Angular CLI builds <br/>
✅ Ideal for chart libraries like Chart.js, Plotly, ApexCharts, and more <br/>

---

## 📦 Installation

Install the library via npm:

```bash
  npm install rm-ng-export-to-csv --save
```

Ensure your Angular version is 14 or higher.

---

## 🚀 Live DEMO

[See the implementation here](https://stackblitz.com/edit/stackblitz-starters-vzwa4w)

---

## 🔧 Usage

### Step 1: Import the Service

```ts
import { ExportToCsvService } from 'rm-ng-export-to-csv';
```

### Step 2: Inject into your Component or Service

```ts
constructor(private exportCsv: ExportToCsvService) {}

OR

private readonly exportCsv: ExportToCsvService = inject(ExportToCsvService);

```

### Step 3: Export with Default Headers

```ts
const data = [
  { name: 'Alice', age: 28, city: 'New York' },
  { name: 'Bob', age: 35, city: 'Chicago' }
];

this.exportCsv.exportAsCSV(data, 'users.csv');
```

### Step 4: Export with Custom Headers and Mapping

```ts
const data = [
  { name: 'Alice', age: 28, city: 'New York' },
  { name: 'Bob', age: 35, city: 'Chicago' }
];

const headers = [
  { label: 'Full Name', key: 'name' },
  { label: 'Age (Years)', key: 'age' },
  { label: 'City', key: 'city' }
];

this.exportCsv.exportAsCSV(data, 'users.csv', headers);
```

---

### 📜 Version Mapping

| Version | Ng   |
|---------|------|
| 1.x.x   | 18.x |

---

## 🧪 API Reference

### `exportAsCSV(data, filename?, headers?)`

| Parameter  | Type                    | Required | Description                               |
| ---------- | ----------------------- | -------- | ----------------------------------------- |
| `data`     | `Record<string, any>[]` | ✅        | JSON data array to export                 |
| `filename` | `string`                | ❌        | Optional filename (default: `export.csv`) |
| `headers`  | `CsvHeaderMapping[]`    | ❌        | Optional mapping of labels and keys       |

### `CsvHeaderMapping` Interface

```ts
interface CsvHeaderMapping {
  label: string; // Column name in the CSV file
  key: string;   // Corresponding key in the JSON data
}
```

---

## 🚀 Features

* ✅ Export any JSON array to CSV
* ✅ Customizable column headers
* ✅ Column-to-key mapping support
* ✅ Auto-download in all browsers (desktop and mobile)
* ✅ Compatible with Angular CLI and Nx
* ✅ Small bundle size, no runtime dependencies
* ✅ Fully typed and framework-compliant

---

## 🌐 Browser Compatibility

Tested on the latest versions of:

* ✅ Google Chrome
* ✅ Mozilla Firefox
* ✅ Apple Safari (macOS and iOS)
* ✅ Microsoft Edge
* ✅ Android Chrome Browser
* ✅ iOS Safari on iPhone & iPad

Supports both desktop and mobile auto-download behavior.

---

## 📁 Folder Structure (if used in workspace)

```
projects/
├── export-csv/
│   ├── src/
│   │   ├── lib/
│   │   │   └── export-csv.service.ts
│   │   └── public-api.ts
│   ├── README.md
│   └── ng-package.json
```

---

## 📄 License

MIT License. Feel free to use, modify, and contribute.

---

## 🐞 Issues

If you identify any errors in this component, or have an idea for an improvement, please open
an [issue](https://github.com/malikrajat/rm-ng-export-to-csv/issues). I am excited to see what the community thinks of this
project, and I would love your input!

---

## 👤 Author

**Rajat Malik**
- [github/malikrajat](https://github.com/malikrajat)

---

## 🙌 Contributions

Contributions are welcome! If you have ideas, suggestions, or improvements, feel free to open issues or pull requests.

---

## 📌 Coming Soon

* XLSX export support
* Flattening nested JSON structures
* Column filtering and ordering
* Internationalization (i18n) support for headers
* UI component to preview before export
