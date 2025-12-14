import * as i0 from '@angular/core';

interface CsvHeaderMapping {
    label: string;
    key: string;
}
declare class RmNgExportToCsvService {
    exportAsCSV<T extends Record<string, any>>(data: T[], filename?: string, headers?: CsvHeaderMapping[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RmNgExportToCsvService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RmNgExportToCsvService>;
}

export { RmNgExportToCsvService };
export type { CsvHeaderMapping };
