import * as i0 from "@angular/core";
export interface CsvHeaderMapping {
    label: string;
    key: string;
}
export declare class RmNgExportToCsvService {
    exportAsCSV<T extends Record<string, any>>(data: T[], filename?: string, headers?: CsvHeaderMapping[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RmNgExportToCsvService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RmNgExportToCsvService>;
}
