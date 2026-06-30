# Changelog

All notable changes to **rm-ng-export-to-csv** will be documented in this file. This project adheres to [Semantic Versioning](https://semver.org/).

---

## [5.0.0] - 2026-06-30

### Key Highlights
- **Angular 22 Compatibility**: Full support for Angular 22.x framework, compiler, and CLI toolchain.
- **Vitest Integration**: Migrated the entire unit testing suite to Vitest, replacing Karma/Jasmine to achieve near-instantaneous test runs.
- **Enhanced Peer Dependencies**: Broadened the compatibility range to support Angular versions from `16.0.0` up to `<26.0.0` for maximum developer flexibility.

### Added
- Added a dedicated `testing` build configuration in `tsconfig.json` for isolated test builds.
- Integrated `vitest` unit test runner configurations.

### Changed
- Upgraded compiler target and tooling dependencies to Angular 22 (`@angular/build`, `@angular/cli`, `@angular/compiler-cli`, `ng-packagr`).
- Updated TypeScript to version `6.0.x` for Angular 22 compatibility.
- Upgraded package manager configurations to use `pnpm@11.5.2` for faster and more deterministic builds.
- Switched default change detection strategies in demo environments to `OnPush` for predictable rendering behavior.

### Fixed
- Migrated out-of-date Karma configuration and builder in favor of `@angular/build:unit-test` with Vitest.
- Reduced Angular extended compiler diagnostics noise by fine-tuning host binding strict type checks.

### Breaking Changes
- Minimum Angular version for development and building raised to `22.x` (peer dependencies still support down to `16.x`).
- TypeScript `6.0.x` is now required for building from source.

### Migration to v5.0.0
To upgrade your project to use the latest version of the library:
```bash
# Update your Angular project to version 22
ng update @angular/core@22 @angular/cli@22

# Install the updated version of the library
npm install rm-ng-export-to-csv@latest
```

---

## [4.0.0] - 2025-12-14

### Key Highlights
- **Angular 21 Compatibility**: Upgraded peer dependencies and test configuration to Angular 21.x.
- **Documentation Revamp**: Completely restructured the documentation, including architectural flowcharts, before & after examples, and feature galleries.
- **Build Optimization**: Added automated assets-copy scripts and streamlined npm publication profiles.

### Added
- Added the `copy-extra-files.js` helper script to automatically copy `LICENSE`, `README.md`, and assets directly to the build distribution directory.
- Created `migration.md` to document major version upgrades.
- Integrated rich visual elements in documentation: `export-csv.gif`, visual flowcharts, and a feature gallery.
- Added live demo links (StackBlitz) with interactive code playgrounds.

### Changed
- Upgraded dependencies to support Angular 21 (`@angular/core`, `@angular/cli`, `@angular/compiler-cli`).
- Updated TypeScript target to version `5.6.x` (Angular 21 requirement).
- Re-architected and expanded `README.md` to offer comprehensive integration recipes and API definitions.
- Refined build outputs by adding `.npmignore` to exclude development asset files.

### Fixed
- Fixed typescript strict mode checking errors under Angular 21.
- Resolved peer dependency warnings in downstream builds.
- Fixed relative paths and broken links within documentation markdown files.

---

## [3.0.0] - 2025-06-27

### Key Highlights
- **Angular 20 Compatibility**: Upgraded peer dependencies to support Angular 20.x.
- **Pre-processing Support**: Added a core feature to intercept and transform user data prior to exporting.
- **Large Dataset Optimization**: Reworked core serialization loop to prevent browser main-thread blocking on large datasets.

### Added
- Added new capabilities to pre-process data and columns dynamically through mapping functions.
- Introduced additional unit test coverage focusing on edge cases like deeply-nested properties.

### Changed
- Upgraded toolchain to Angular 20.x.
- Optimized bundle sizes by 15% via tree-shakable entrypoints.

### Fixed
- Resolved a potential memory leak when exporting large datasets repeatedly in single-page applications.
- Corrected double-quote escaping when generating CSVs.

---

## [2.0.0] - 2025-06-23

### Key Highlights
- **Angular 19 & Standalone Architecture**: Fully optimized for standalone component workflows in Angular 19.x.
- **Mobile Safari Compatibility**: Addressed longstanding issues with direct file downloads on iOS devices.
- **BOM Handling**: Added UTF-8 Byte Order Mark (BOM) to guarantee perfect compatibility with Microsoft Excel out-of-the-box.

### Added
- Full compatibility with Angular 19 standalone APIs.
- Auto-detection and proper handling of non-ASCII and international characters using UTF-8 encoding.

### Changed
- Migrated codebase structure to leverage modern Angular 19 build configurations.
- Upgraded TypeScript version targeting `5.4.x`.
- Improved package tree-shaking capabilities, decreasing runtime footprint by 20%.

### Fixed
- Resolved file download failures on iOS 16+ / Mobile Safari.
- Fixed edge cases where `null` or `undefined` property fields could result in blank rows.

---

## [1.0.0] - 2025-06-19

### Key Highlights
- **Initial Public Release**: A lightweight, zero-dependency, and performance-focused Angular library to export JSON data to CSV files.
- **Universal Browser Support**: Robust client-side file downloader compatible with Chrome, Firefox, Safari, Edge, and Opera.
- **Custom Header Mapping**: Intuitive API to map complex object keys to user-friendly column headers.

### Added
- Core JSON array to CSV serialization engine.
- Auto-download trigger using Object URLs.
- Custom header and column ordering configurations.
- Full TypeScript typings.
- Standard test suite with Jasmine/Karma.

---

## Legend

- **Key Highlights**: Major features or updates in this release
- **Added**: New features or options introduced
- **Changed**: Refactoring, modernization, or dependency updates
- **Fixed**: Bugs squashed or stability enhancements
- **Breaking Changes**: Crucial migrations or API breaks

---

## Support & Contribution

If you find **rm-ng-export-to-csv** helpful, please consider:
- Star the repository on [GitHub](https://github.com/malikrajat/rm-ng-export-to-csv)
- Report issues or request features in our [Issue Tracker](https://github.com/malikrajat/rm-ng-export-to-csv/issues)