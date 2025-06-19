import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';

class RmNgExportToCsvService {
    exportAsCSV(data, filename = 'export.csv', headers) {
        if (!data || !data.length)
            return;
        let keys = [];
        let headerRow = [];
        if (headers && headers.length) {
            // Use custom headers
            keys = headers.map((h) => h.key);
            headerRow = headers.map((h) => h.label);
        }
        else {
            // Use keys from the first object
            keys = Object.keys(data[0]);
            headerRow = keys;
        }
        const csvRows = [];
        csvRows.push(headerRow.join(','));
        for (const row of data) {
            const values = keys.map((key) => {
                const cell = row[key] ?? '';
                return `"${cell.toString().replace(/"/g, '""')}"`;
            });
            csvRows.push(values.join(','));
        }
        const csvContent = csvRows.join('\r\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RmNgExportToCsvService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RmNgExportToCsvService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: RmNgExportToCsvService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

/*
 * Public API Surface of rm-ng-export-to-csv
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RmNgExportToCsvService };
//# sourceMappingURL=rm-ng-export-to-csv.mjs.map
