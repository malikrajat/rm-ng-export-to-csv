import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class RmNgExportToCsvService {
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
                    providedIn: 'root',
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm0tbmctZXhwb3J0LXRvLWNzdi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcm0tbmctZXhwb3J0LXRvLWNzdi9zcmMvbGliL3JtLW5nLWV4cG9ydC10by1jc3Yuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVUzQyxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFdBQVcsQ0FDVCxJQUFTLEVBQ1QsV0FBbUIsWUFBWSxFQUMvQixPQUE0QjtRQUU1QixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBRWxDLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUN4QixJQUFJLFNBQVMsR0FBYSxFQUFFLENBQUM7UUFFN0IsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzlCLHFCQUFxQjtZQUNyQixJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQzthQUFNLENBQUM7WUFDTixpQ0FBaUM7WUFDakMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNuQixDQUFDO1FBRUQsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWxDLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUM5QixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QixPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzt3R0EzQ1Usc0JBQXNCOzRHQUF0QixzQkFBc0IsY0FGckIsTUFBTTs7NEZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDc3ZIZWFkZXJNYXBwaW5nIHtcbiAgbGFiZWw6IHN0cmluZzsgLy8gSGVhZGVyIG5hbWUgaW4gQ1NWXG4gIGtleTogc3RyaW5nOyAvLyBLZXkgZnJvbSBKU09OXG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSbU5nRXhwb3J0VG9Dc3ZTZXJ2aWNlIHtcbiAgZXhwb3J0QXNDU1Y8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KFxuICAgIGRhdGE6IFRbXSxcbiAgICBmaWxlbmFtZTogc3RyaW5nID0gJ2V4cG9ydC5jc3YnLFxuICAgIGhlYWRlcnM/OiBDc3ZIZWFkZXJNYXBwaW5nW10sXG4gICk6IHZvaWQge1xuICAgIGlmICghZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHJldHVybjtcblxuICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGxldCBoZWFkZXJSb3c6IHN0cmluZ1tdID0gW107XG5cbiAgICBpZiAoaGVhZGVycyAmJiBoZWFkZXJzLmxlbmd0aCkge1xuICAgICAgLy8gVXNlIGN1c3RvbSBoZWFkZXJzXG4gICAgICBrZXlzID0gaGVhZGVycy5tYXAoKGgpID0+IGgua2V5KTtcbiAgICAgIGhlYWRlclJvdyA9IGhlYWRlcnMubWFwKChoKSA9PiBoLmxhYmVsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIGtleXMgZnJvbSB0aGUgZmlyc3Qgb2JqZWN0XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XG4gICAgICBoZWFkZXJSb3cgPSBrZXlzO1xuICAgIH1cblxuICAgIGNvbnN0IGNzdlJvd3MgPSBbXTtcbiAgICBjc3ZSb3dzLnB1c2goaGVhZGVyUm93LmpvaW4oJywnKSk7XG5cbiAgICBmb3IgKGNvbnN0IHJvdyBvZiBkYXRhKSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBrZXlzLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3dba2V5XSA/PyAnJztcbiAgICAgICAgcmV0dXJuIGBcIiR7Y2VsbC50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICdcIlwiJyl9XCJgO1xuICAgICAgfSk7XG4gICAgICBjc3ZSb3dzLnB1c2godmFsdWVzLmpvaW4oJywnKSk7XG4gICAgfVxuXG4gICAgY29uc3QgY3N2Q29udGVudCA9IGNzdlJvd3Muam9pbignXFxyXFxuJyk7XG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtjc3ZDb250ZW50XSwgeyB0eXBlOiAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnIH0pO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlbmFtZSk7XG4gICAgbGluay5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgfVxufVxuIl19