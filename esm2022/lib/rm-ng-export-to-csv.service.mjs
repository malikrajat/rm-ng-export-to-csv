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
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm0tbmctZXhwb3J0LXRvLWNzdi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvcm0tbmctZXhwb3J0LXRvLWNzdi9zcmMvbGliL3JtLW5nLWV4cG9ydC10by1jc3Yuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVUzQyxNQUFNLE9BQU8sc0JBQXNCO0lBQ2pDLFdBQVcsQ0FDVCxJQUFTLEVBQ1QsV0FBbUIsWUFBWSxFQUMvQixPQUE0QjtRQUU1QixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBRWxDLElBQUksSUFBSSxHQUFhLEVBQUUsQ0FBQztRQUN4QixJQUFJLFNBQVMsR0FBYSxFQUFFLENBQUM7UUFFN0IsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzlCLHFCQUFxQjtZQUNyQixJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLFNBQVMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQzthQUFNLENBQUM7WUFDTixpQ0FBaUM7WUFDakMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNuQixDQUFDO1FBRUQsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWxDLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUM5QixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM1QixPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNwRCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7UUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzt3R0EzQ1Usc0JBQXNCOzRHQUF0QixzQkFBc0IsY0FGckIsTUFBTTs7NEZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3N2SGVhZGVyTWFwcGluZyB7XHJcbiAgbGFiZWw6IHN0cmluZzsgLy8gSGVhZGVyIG5hbWUgaW4gQ1NWXHJcbiAga2V5OiBzdHJpbmc7ICAgLy8gS2V5IGZyb20gSlNPTlxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSbU5nRXhwb3J0VG9Dc3ZTZXJ2aWNlIHtcclxuICBleHBvcnRBc0NTVjxUIGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55Pj4oXHJcbiAgICBkYXRhOiBUW10sXHJcbiAgICBmaWxlbmFtZTogc3RyaW5nID0gJ2V4cG9ydC5jc3YnLFxyXG4gICAgaGVhZGVycz86IENzdkhlYWRlck1hcHBpbmdbXVxyXG4gICk6IHZvaWQge1xyXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgbGV0IGhlYWRlclJvdzogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBpZiAoaGVhZGVycyAmJiBoZWFkZXJzLmxlbmd0aCkge1xyXG4gICAgICAvLyBVc2UgY3VzdG9tIGhlYWRlcnNcclxuICAgICAga2V5cyA9IGhlYWRlcnMubWFwKChoKSA9PiBoLmtleSk7XHJcbiAgICAgIGhlYWRlclJvdyA9IGhlYWRlcnMubWFwKChoKSA9PiBoLmxhYmVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFVzZSBrZXlzIGZyb20gdGhlIGZpcnN0IG9iamVjdFxyXG4gICAgICBrZXlzID0gT2JqZWN0LmtleXMoZGF0YVswXSk7XHJcbiAgICAgIGhlYWRlclJvdyA9IGtleXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3N2Um93cyA9IFtdO1xyXG4gICAgY3N2Um93cy5wdXNoKGhlYWRlclJvdy5qb2luKCcsJykpO1xyXG5cclxuICAgIGZvciAoY29uc3Qgcm93IG9mIGRhdGEpIHtcclxuICAgICAgY29uc3QgdmFsdWVzID0ga2V5cy5tYXAoKGtleSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNlbGwgPSByb3dba2V5XSA/PyAnJztcclxuICAgICAgICByZXR1cm4gYFwiJHtjZWxsLnRvU3RyaW5nKCkucmVwbGFjZSgvXCIvZywgJ1wiXCInKX1cImA7XHJcbiAgICAgIH0pO1xyXG4gICAgICBjc3ZSb3dzLnB1c2godmFsdWVzLmpvaW4oJywnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3N2Q29udGVudCA9IGNzdlJvd3Muam9pbignXFxyXFxuJyk7XHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2NzdkNvbnRlbnRdLCB7IHR5cGU6ICd0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04OycgfSk7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XHJcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlbmFtZSk7XHJcbiAgICBsaW5rLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGxpbmspO1xyXG4gIH1cclxufVxyXG4iXX0=