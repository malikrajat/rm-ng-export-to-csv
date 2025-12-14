# rm-ng-export-to-csv

<p align="center">
  <img src="https://img.shields.io/npm/v/rm-ng-export-to-csv.svg" alt="npm version">
  <img src="https://img.shields.io/npm/dm/rm-ng-export-to-csv.svg" alt="npm downloads">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
  <img src="https://img.shields.io/badge/Angular-14%2B-red.svg" alt="Angular 14+">
  <img src="https://img.shields.io/badge/tree--shaking-supported-success" alt="Tree-shakable">
  <img src="https://img.shields.io/badge/types-TypeScript-blue" alt="TypeScript">
</p>

<p align="center">
A lightweight, zero-dependency Angular library for exporting JSON data to CSV files with auto-download support. Built for modern Angular applications with full TypeScript support and optimized for performance.
</p>

---

## Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Why This Library?](#why-this-library)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [API Reference](#api-reference)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)
- [Advanced Configuration](#advanced-configuration)
- [Browser Compatibility](#browser-compatibility)
- [Performance Optimization](#performance-optimization)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Other Libraries](#other-libraries)
- [Support](#support)
- [License](#license)

---

## See It In Action

<div align="center">
  
  <img src="https://github.com/malikrajat/rm-ng-export-to-csv/blob/main/assets/export-csv.gif" alt="rm-ng-export-to-csv Demo" width="800"/>
  
  <p><em>Export JSON data to CSV with just one click!</em></p>

</div>

---

## Live Demo & Playground

### Try it yourself! Interactive demos available now:

<div align="center">

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://stackblitz.com/edit/stackblitz-starters-gn9k5bwq" target="_blank">
        <img src="https://img.shields.io/badge/StackBlitz_Demo-1976D2?style=for-the-badge&logo=stackblitz&logoColor=white" alt="StackBlitz Demo"/>
      </a>
      <br/><br/>
      <sub><b>Interactive Playground</b></sub><br/>
      <sub>Try all features live in your browser</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://github.com/malikrajat/rm-ng-export-to-csv/tree/main/examples" target="_blank">
        <img src="https://img.shields.io/badge/Code_Examples-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Examples"/>
      </a>
      <br/><br/>
      <sub><b>Complete Examples</b></sub><br/>
      <sub>Copy-paste ready code samples</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://www.npmjs.com/package/rm-ng-export-to-csv" target="_blank">
        <img src="https://img.shields.io/badge/npm_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm Package"/>
      </a>
      <br/><br/>
      <sub><b>npm Registry</b></sub><br/>
      <sub>Install and view package details</sub>
    </td>
    <td align="center" width="50%">
      <a href="https://github.com/malikrajat/rm-ng-export-to-csv" target="_blank">
        <img src="https://img.shields.io/badge/GitHub_Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
      </a>
      <br/><br/>
      <sub><b>Source Code</b></sub><br/>
      <sub>Star, fork, and contribute</sub>
    </td>
  </tr>
</table>

</div>

---

## Features

- **Zero Dependencies** - Absolutely no external dependencies, minimal footprint
- **Client-Side Export** - No backend server required, generate CSV entirely in the browser
- **Custom Headers** - Map JSON keys to custom column headers
- **Flexible Configuration** - Customize filenames and header mappings
- **Type-Safe** - Full TypeScript support with comprehensive type definitions
- **Tree-Shakable** - Optimized for modern build tools to minimize bundle size
- **Angular 14+ Support** - Compatible with modern Angular versions including standalone components
- **Production Ready** - Battle-tested in real-world applications with thousands of downloads
- **Auto-Download** - Automatic file download on all platforms (desktop & mobile)
- **Lightweight** - Minimal bundle impact with efficient implementation

---

## Why This Library?

### The Problem

Most CSV export libraries for Angular either:
- Have heavy dependencies (adding bloat to your bundle)
- Lack proper TypeScript support
- Don't handle mobile downloads properly
- Have complicated APIs that are hard to use
- Require backend processing

### The Solution

`rm-ng-export-to-csv` provides:

- **Pure Client-Side**: Generate CSV files in the browser without any backend infrastructure
- **Zero Dependencies**: No external libraries, keeping your bundle size minimal
- **Angular-First**: Built specifically for Angular with proper service injection and TypeScript
- **Developer-Friendly**: Simple one-function API, comprehensive examples, and excellent documentation
- **Mobile-Ready**: Works seamlessly on iOS, Android, and all mobile browsers

### Use Cases

- **Data Analysis** - Export application data for external analysis
- **Report Generation** - Create downloadable reports for users
- **Chart Data Export** - Allow users to download chart data (Chart.js, Plotly, ApexCharts)
- **Database Backups** - Export database records for backup purposes
- **Inventory Management** - Export product listings and stock data
- **Financial Reports** - Generate transaction and accounting exports
- **User Data Export** - Comply with GDPR data portability requirements
- **Educational Tools** - Export student records and grade reports
- **Mobile App Integration** - Export data on mobile devices

---

## Installation

### Step 1: Install the Package

Choose your preferred package manager:

```bash
# npm
npm install rm-ng-export-to-csv

# yarn
yarn add rm-ng-export-to-csv

# pnpm
pnpm add rm-ng-export-to-csv
```

### Step 2: No Additional Dependencies!

Unlike other CSV libraries, `rm-ng-export-to-csv` has **zero dependencies**. You're ready to go immediately after installation!

### Dependencies Overview

| Dependency | Version | Purpose |
|------------|---------|---------|
| `@angular/core` | ^14.0.0+ | Angular framework |

**Minimum Requirements:** Angular 14+

---

## Quick Start

### Basic Implementation

Here's a minimal example to get you started:

```typescript
import { Component } from '@angular/core';
import { RmNgExportToCsvService } from 'rm-ng-export-to-csv';

@Component({
  selector: 'app-export-example',
  standalone: true, // Works with standalone components
  providers: [RmNgExportToCsvService], // Register the service
  template: `
    <div class="data-container">
      <h2>User Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of users">
            <td>{{ user.name }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.city }}</td>
          </tr>
        </tbody>
      </table>
      <button (click)="exportToCSV()">Export to CSV</button>
    </div>
  `,
  styles: [`
    .data-container {
      padding: 20px;
      max-width: 800px;
    }
    button {
      margin-top: 20px;
      padding: 10px 20px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
  `]
})
export class ExportExampleComponent {
  users = [
    { name: 'Alice', age: 28, city: 'New York' },
    { name: 'Bob', age: 35, city: 'Chicago' },
    { name: 'Charlie', age: 42, city: 'San Francisco' }
  ];

  constructor(private exportCsv: RmNgExportToCsvService) {}

  exportToCSV() {
    this.exportCsv.exportAsCSV(this.users, 'users.csv');
  }
}
```

### Module-Based Registration

For traditional module-based Angular applications:

```typescript
import { NgModule } from '@angular/core';
import { RmNgExportToCsvService } from 'rm-ng-export-to-csv';

@NgModule({
  providers: [RmNgExportToCsvService], // Register at module level
  // ... other module configuration
})
export class AppModule {}
```

### Using Dependency Injection (Modern Angular)

```typescript
import { inject } from '@angular/core';
import { RmNgExportToCsvService } from 'rm-ng-export-to-csv';

@Component({
  // ... component configuration
})
export class MyComponent {
  private readonly exportCsv = inject(RmNgExportToCsvService);
  
  exportData() {
    this.exportCsv.exportAsCSV(this.data, 'export.csv');
  }
}
```

---

## API Reference

### RmNgExportToCsvService

The main service for exporting data to CSV.

#### Methods

##### `exportAsCSV(data: Record<string, any>[], filename?: string, headers?: CsvHeaderMapping[]): void`

Exports an array of JSON objects to a CSV file and triggers an automatic download.

**Parameters:**
- `data` - Array of JSON objects to export (required)
- `filename` - Name of the downloaded file (optional, default: 'export.csv')
- `headers` - Array of header mappings for custom column names (optional)

**Returns:** `void` - The CSV file is automatically downloaded

**Examples:**

```typescript
// Basic export with default headers (uses object keys)
this.exportCsv.exportAsCSV(this.data, 'users.csv');

// Export with custom headers
const headers = [
  { label: 'Full Name', key: 'name' },
  { label: 'Age (Years)', key: 'age' },
  { label: 'City', key: 'city' }
];
this.exportCsv.exportAsCSV(this.data, 'users.csv', headers);

// Minimal export with default filename
this.exportCsv.exportAsCSV(this.data);
```

### CsvHeaderMapping Interface

Interface for mapping JSON keys to custom CSV column headers.

```typescript
interface CsvHeaderMapping {
  label: string;  // The column header name in the CSV file
  key: string;    // The corresponding key in the JSON data
}
```

**Example:**

```typescript
const headers: CsvHeaderMapping[] = [
  { label: 'Employee Name', key: 'name' },
  { label: 'Department', key: 'dept' },
  { label: 'Salary ($)', key: 'salary' }
];
```

---

## Usage Examples

### Example 1: E-commerce Order Export

Export order data with custom formatting.

```typescript
import { Component } from '@angular/core';
import { RmNgExportToCsvService } from 'rm-ng-export-to-csv';
import { CommonModule } from '@angular/common';

interface Order {
  orderId: string;
  customerName: string;
  orderDate: Date;
  totalAmount: number;
  status: string;
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  providers: [RmNgExportToCsvService],
  template: `
    <div class="orders-container">
      <h2>Order Management</h2>
      
      <div class="filters">
        <input 
          type="date" 
          [(ngModel)]="startDate" 
          placeholder="Start Date">
        <input 
          type="date" 
          [(ngModel)]="endDate" 
          placeholder="End Date">
        <button (click)="filterOrders()">Filter</button>
      </div>

      <table class="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let order of filteredOrders">
            <td>{{ order.orderId }}</td>
            <td>{{ order.customerName }}</td>
            <td>{{ order.orderDate | date:'short' }}</td>
            <td>{{ order.totalAmount | currency }}</td>
            <td [class]="'status-' + order.status.toLowerCase()">
              {{ order.status }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="export-section">
        <button (click)="exportOrders()" class="export-btn">
          Export Orders to CSV
        </button>
        <button (click)="exportFilteredOrders()" class="export-btn secondary">
          Export Filtered Orders
        </button>
      </div>
    </div>
  `,
  styles: [`
    .orders-container {
      padding: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .filters {
      margin: 20px 0;
      display: flex;
      gap: 10px;
    }
    .orders-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    .orders-table th,
    .orders-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    .orders-table th {
      background: #f5f5f5;
      font-weight: bold;
    }
    .status-completed { color: #4caf50; }
    .status-pending { color: #ff9800; }
    .status-cancelled { color: #f44336; }
    .export-section {
      margin-top: 30px;
      display: flex;
      gap: 10px;
    }
    .export-btn {
      padding: 12px 24px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    .export-btn:hover {
      background: #0056b3;
    }
    .export-btn.secondary {
      background: #6c757d;
    }
    .export-btn.secondary:hover {
      background: #545b62;
    }
  `]
})
export class OrdersComponent {
  startDate!: Date;
  endDate!: Date;
  
  orders: Order[] = [
    {
      orderId: 'ORD-001',
      customerName: 'John Doe',
      orderDate: new Date('2024-01-15'),
      totalAmount: 299.99,
      status: 'Completed'
    },
    {
      orderId: 'ORD-002',
      customerName: 'Jane Smith',
      orderDate: new Date('2024-01-16'),
      totalAmount: 149.50,
      status: 'Pending'
    },
    {
      orderId: 'ORD-003',
      customerName: 'Bob Johnson',
      orderDate: new Date('2024-01-17'),
      totalAmount: 599.00,
      status: 'Completed'
    }
  ];

  filteredOrders: Order[] = [...this.orders];

  constructor(private exportCsv: RmNgExportToCsvService) {}

  filterOrders(): void {
    this.filteredOrders = this.orders.filter(order => {
      const orderDate = new Date(order.orderDate);
      return (!this.startDate || orderDate >= this.startDate) &&
             (!this.endDate || orderDate <= this.endDate);
    });
  }

  exportOrders(): void {
    const headers = [
      { label: 'Order ID', key: 'orderId' },
      { label: 'Customer Name', key: 'customerName' },
      { label: 'Order Date', key: 'orderDate' },
      { label: 'Total Amount ($)', key: 'totalAmount' },
      { label: 'Status', key: 'status' }
    ];

    // Format dates before export
    const formattedData = this.orders.map(order => ({
      ...order,
      orderDate: new Date(order.orderDate).toLocaleDateString()
    }));

    this.exportCsv.exportAsCSV(
      formattedData,
      `orders-${this.getDateString()}.csv`,
      headers
    );
  }

  exportFilteredOrders(): void {
    const headers = [
      { label: 'Order ID', key: 'orderId' },
      { label: 'Customer Name', key: 'customerName' },
      { label: 'Order Date', key: 'orderDate' },
      { label: 'Total Amount ($)', key: 'totalAmount' },
      { label: 'Status', key: 'status' }
    ];

    const formattedData = this.filteredOrders.map(order => ({
      ...order,
      orderDate: new Date(order.orderDate).toLocaleDateString()
    }));

    this.exportCsv.exportAsCSV(
      formattedData,
      `filtered-orders-${this.getDateString()}.csv`,
      headers
    );
  }

  private getDateString(): string {
    return new Date().toISOString().split('T')[0];
  }
}
```

### Example 2: Chart Data Export

Export Chart.js data for external analysis.

```typescript
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RmNgExportToCsvService } from 'rm-ng-export-to-csv';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-chart-export',
  standalone: true,
  providers: [RmNgExportToCsvService],
  template: `
    <div class="chart-container">
      <h2>Sales Analytics</h2>
      
      <div class="chart-wrapper">
        <canvas #salesChart></canvas>
      </div>

      <div class="export-actions">
        <button (click)="exportChartData()">
          Export Chart Data to CSV
        </button>
        <button (click)="exportSummary()" class="secondary">
          Export Summary Statistics
        </button>
      </div>
    </div>
  `,
  styles: [`
    .chart-container {
      padding: 30px;
      max-width: 900px;
      margin: 0 auto;
    }
    .chart-wrapper {
      margin: 30px 0;
      height: 400px;
    }
    .export-actions {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }
    button {
      padding: 12px 24px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
    button.secondary {
      background: #6c757d;
    }
    button.secondary:hover {
      background: #545b62;
    }
  `]
})
export class ChartExportComponent implements AfterViewInit {
  @ViewChild('salesChart') chartRef!: ElementRef<HTMLCanvasElement>;
  
  private chart!: Chart;
  private salesData = [
    { month: 'January', sales: 4500, expenses: 2300, profit: 2200 },
    { month: 'February', sales: 5200, expenses: 2600, profit: 2600 },
    { month: 'March', sales: 4800, expenses: 2400, profit: 2400 },
    { month: 'April', sales: 6100, expenses: 3000, profit: 3100 },
    { month: 'May', sales: 7200, expenses: 3400, profit: 3800 },
    { month: 'June', sales: 6800, expenses: 3200, profit: 3600 }
  ];

  constructor(private exportCsv: RmNgExportToCsvService) {}

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  private initializeChart(): void {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'line',
      data: {
        labels: this.salesData.map(d => d.month),
        datasets: [
          {
            label: 'Sales',
            data: this.salesData.map(d => d.sales),
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
          },
          {
            label: 'Expenses',
            data: this.salesData.map(d => d.expenses),
            borderColor: '#dc3545',
            backgroundColor: 'rgba(220, 53, 69, 0.1)',
          },
          {
            label: 'Profit',
            data: this.salesData.map(d => d.profit),
            borderColor: '#28a745',
            backgroundColor: 'rgba(40, 167, 69, 0.1)',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Sales Performance'
          }
        }
      }
    });
  }

  exportChartData(): void {
    const headers = [
      { label: 'Month', key: 'month' },
      { label: 'Sales ($)', key: 'sales' },
      { label: 'Expenses ($)', key: 'expenses' },
      { label: 'Profit ($)', key: 'profit' }
    ];

    this.exportCsv.exportAsCSV(
      this.salesData,
      `sales-data-${this.getDateString()}.csv`,
      headers
    );
  }

  exportSummary(): void {
    const summary = [{
      metric: 'Total Sales',
      value: this.salesData.reduce((sum, d) => sum + d.sales, 0)
    }, {
      metric: 'Total Expenses',
      value: this.salesData.reduce((sum, d) => sum + d.expenses, 0)
    }, {
      metric: 'Total Profit',
      value: this.salesData.reduce((sum, d) => sum + d.profit, 0)
    }, {
      metric: 'Average Monthly Sales',
      value: Math.round(this.salesData.reduce((sum, d) => sum + d.sales, 0) / this.salesData.length)
    }, {
      metric: 'Average Monthly Profit',
      value: Math.round(this.salesData.reduce((sum, d) => sum + d.profit, 0) / this.salesData.length)
    }];

    const headers = [
      { label: 'Metric', key: 'metric' },
      { label: 'Value ($)', key: 'value' }
    ];

    this.exportCsv.exportAsCSV(
      summary,
      `sales-summary-${this.getDateString()}.csv`,
      headers
    );
  }

  private getDateString(): string {
    return new Date().toISOString().split('T')[0];
  }
}
```

### Example 3: Employee Directory Export

Export employee data with department filtering.

```typescript
import { Component } from '@angular/core';
import { RmNgExportToCsvService } from 'rm-ng-export-to-csv';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  hireDate: Date;
  salary: number;
}

@Component({
  selector: 'app-employee-directory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [RmNgExportToCsvService],
  template: `
    <div class="directory-container">
      <h2>Employee Directory</h2>

      <div class="controls">
        <select [(ngModel)]="selectedDepartment" (change)="filterEmployees()">
          <option value="">All Departments</option>
          <option *ngFor="let dept of departments" [value]="dept">
            {{ dept }}
          </option>
        </select>

        <input 
          type="text" 
          [(ngModel)]="searchTerm" 
          (input)="filterEmployees()"
          placeholder="Search employees...">
      </div>

      <table class="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let emp of filteredEmployees">
            <td>{{ emp.id }}</td>
            <td>{{ emp.name }}</td>
            <td>{{ emp.department }}</td>
            <td>{{ emp.position }}</td>
            <td>{{ emp.email }}</td>
            <td>{{ emp.phone }}</td>
          </tr>
        </tbody>
      </table>

      <div class="export-options">
        <button (click)="exportAll()">
          Export All Employees
        </button>
        <button (click)="exportFiltered()" class="secondary">
          Export Filtered Results
        </button>
        <button (click)="exportByDepartment()" class="tertiary">
          Export by Department
        </button>
      </div>
    </div>
  `,
  styles: [`
    .directory-container {
      padding: 30px;
      max-width: 1400px;
      margin: 0 auto;
    }
    .controls {
      display: flex;
      gap: 15px;
      margin: 20px 0;
    }
    .controls select,
    .controls input {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }
    .controls input {
      flex: 1;
    }
    .employee-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    .employee-table th,
    .employee-table td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    .employee-table th {
      background: #f8f9fa;
      font-weight: 600;
    }
    .export-options {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }
    button {
      padding: 12px 24px;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
    }
    button {
      background: #007bff;
    }
    button:hover {
      background: #0056b3;
    }
    button.secondary {
      background: #6c757d;
    }
    button.secondary:hover {
      background: #545b62;
    }
    button.tertiary {
      background: #17a2b8;
    }
    button.tertiary:hover {
      background: #117a8b;
    }
  `]
})
export class EmployeeDirectoryComponent {
  selectedDepartment = '';
  searchTerm = '';

  employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      department: 'Engineering',
      position: 'Senior Developer',
      email: 'john.doe@company.com',
      phone: '555-0101',
      hireDate: new Date('2020-01-15'),
      salary: 95000
    },
    {
      id: 2,
      name: 'Jane Smith',
      department: 'Marketing',
      position: 'Marketing Manager',
      email: 'jane.smith@company.com',
      phone: '555-0102',
      hireDate: new Date('2019-06-20'),
      salary: 85000
    },
    {
      id: 3,
      name: 'Bob Johnson',
      department: 'Engineering',
      position: 'DevOps Engineer',
      email: 'bob.johnson@company.com',
      phone: '555-0103',
      hireDate: new Date('2021-03-10'),
      salary: 90000
    },
    {
      id: 4,
      name: 'Alice Williams',
      department: 'Sales',
      position: 'Sales Representative',
      email: 'alice.williams@company.com',
      phone: '555-0104',
      hireDate: new Date('2022-01-05'),
      salary: 70000
    }
  ];

  filteredEmployees: Employee[] = [...this.employees];

  get departments(): string[] {
    return [...new Set(this.employees.map(e => e.department))];
  }

  constructor(private exportCsv: RmNgExportToCsvService) {}

  filterEmployees(): void {
    this.filteredEmployees = this.employees.filter(emp => {
      const matchesDept = !this.selectedDepartment || 
                         emp.department === this.selectedDepartment;
      const matchesSearch = !this.searchTerm ||
                           emp.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           emp.email.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }

  exportAll(): void {

    const headers = [
      { label: 'Employee ID', key: 'id' },
      { label: 'Full Name', key: 'name' },
      { label: 'Department', key: 'department' },
      { label: 'Position', key: 'position' },
      { label: 'Email', key: 'email' },
      { label: 'Phone', key: 'phone' },
      { label: 'Hire Date', key: 'hireDate' },
      { label: 'Salary', key: 'salary' }
    ];

    const formattedData = this.employees.map(emp => ({
      ...emp,
      hireDate: new Date(emp.hireDate).toLocaleDateString()
    }));

    this.exportCsv.exportAsCSV(
      formattedData,
      `all-employees-${this.getDateString()}.csv`,
      headers
    );
  }

  exportFiltered(): void {
    const headers = [
      { label: 'Employee ID', key: 'id' },
      { label: 'Full Name', key: 'name' },
      { label: 'Department', key: 'department' },
      { label: 'Position', key: 'position' },
      { label: 'Email', key: 'email' },
      { label: 'Phone', key: 'phone' }
    ];

    this.exportCsv.exportAsCSV(
      this.filteredEmployees,
      `filtered-employees-${this.getDateString()}.csv`,
      headers
    );
  }

  exportByDepartment(): void {
    this.departments.forEach(dept => {
      const deptEmployees = this.employees.filter(e => e.department === dept);
      
      const headers = [
        { label: 'Employee ID', key: 'id' },
        { label: 'Full Name', key: 'name' },
        { label: 'Position', key: 'position' },
        { label: 'Email', key: 'email' }
      ];

      this.exportCsv.exportAsCSV(
        deptEmployees,
        `${dept.toLowerCase()}-employees-${this.getDateString()}.csv`,
        headers
      );
    });
  }

  private getDateString(): string {
    return new Date().toISOString().split('T')[0];
  }
}
```

### Example 4: Student Grade Export

Export academic data with grade calculations.

```typescript
import { Component } from '@angular/core';
import { RmNgExportToCsvService } from 'rm-ng-export-to-csv';
import { CommonModule } from '@angular/common';

interface Student {
  studentId: string;
  name: string;
  class: string;
  attendance: number;
  midterm: number;
  final: number;
  assignments: number;
}

interface StudentWithGrade extends Student {
  totalScore: number;
  letterGrade: string;
}

@Component({
  selector: 'app-grade-export',
  standalone: true,
  imports: [CommonModule],
  providers: [RmNgExportToCsvService],
  template: `
    <div class="grades-container">
      <h2>Student Grades - Fall 2024</h2>

      <table class="grades-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Class</th>
            <th>Attendance (%)</th>
            <th>Midterm</th>
            <th>Final</th>
            <th>Assignments</th>
            <th>Total</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let student of studentsWithGrades">
            <td>{{ student.studentId }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.class }}</td>
            <td>{{ student.attendance }}%</td>
            <td>{{ student.midterm }}</td>
            <td>{{ student.final }}</td>
            <td>{{ student.assignments }}</td>
            <td>{{ student.totalScore }}</td>
            <td [class]="'grade-' + student.letterGrade">
              {{ student.letterGrade }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="export-section">
        <button (click)="exportGrades()">
          Export Grade Report
        </button>
        <button (click)="exportStatistics()" class="secondary">
          Export Class Statistics
        </button>
      </div>
    </div>
  `,
  styles: [`
    .grades-container {
      padding: 30px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .grades-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    .grades-table th,
    .grades-table td {
      padding: 10px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    .grades-table th {
      background: #f8f9fa;
      font-weight: 600;
    }
    .grade-A { color: #28a745; font-weight: bold; }
    .grade-B { color: #17a2b8; font-weight: bold; }
    .grade-C { color: #ffc107; font-weight: bold; }
    .grade-D { color: #fd7e14; font-weight: bold; }
    .grade-F { color: #dc3545; font-weight: bold; }
    .export-section {
      margin-top: 30px;
      display: flex;
      gap: 10px;
    }
    button {
      padding: 12px 24px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
    button.secondary {
      background: #6c757d;
    }
    button.secondary:hover {
      background: #545b62;
    }
  `]
})
export class GradeExportComponent {
  students: Student[] = [
    {
      studentId: 'S001',
      name: 'Emily Chen',
      class: 'Computer Science',
      attendance: 95,
      midterm: 88,
      final: 92,
      assignments: 90
    },
    {
      studentId: 'S002',
      name: 'Michael Brown',
      class: 'Computer Science',
      attendance: 88,
      midterm: 76,
      final: 80,
      assignments: 85
    },
    {
      studentId: 'S003',
      name: 'Sarah Davis',
      class: 'Computer Science',
      attendance: 100,
      midterm: 95,
      final: 98,
      assignments: 96
    }
  ];

  get studentsWithGrades(): StudentWithGrade[] {
    return this.students.map(student => {
      const totalScore = this.calculateTotalScore(student);
      const letterGrade = this.getLetterGrade(totalScore);
      return { ...student, totalScore, letterGrade };
    });
  }

  constructor(private exportCsv: RmNgExportToCsvService) {}

  private calculateTotalScore(student: Student): number {
    // Weighted: Attendance 10%, Midterm 30%, Final 40%, Assignments 20%
    return Math.round(
      student.attendance * 0.1 +
      student.midterm * 0.3 +
      student.final * 0.4 +
      student.assignments * 0.2
    );
  }

  private getLetterGrade(score: number): string {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  exportGrades(): void {
    const headers = [
      { label: 'Student ID', key: 'studentId' },
      { label: 'Student Name', key: 'name' },
      { label: 'Class', key: 'class' },
      { label: 'Attendance (%)', key: 'attendance' },
      { label: 'Midterm Score', key: 'midterm' },
      { label: 'Final Score', key: 'final' },
      { label: 'Assignment Score', key: 'assignments' },
      { label: 'Total Score', key: 'totalScore' },
      { label: 'Letter Grade', key: 'letterGrade' }
    ];

    this.exportCsv.exportAsCSV(
      this.studentsWithGrades,
      `grades-report-${this.getDateString()}.csv`,
      headers
    );
  }

  exportStatistics(): void {
    const scores = this.studentsWithGrades.map(s => s.totalScore);
    const average = scores.reduce((a, b) => a + b, 0) / scores.length;
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);
    
    const gradeDistribution = this.studentsWithGrades.reduce((acc, s) => {
      acc[s.letterGrade] = (acc[s.letterGrade] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const statistics = [
      { metric: 'Total Students', value: this.students.length },
      { metric: 'Class Average', value: Math.round(average) },
      { metric: 'Highest Score', value: highest },
      { metric: 'Lowest Score', value: lowest },
      { metric: 'A Grades', value: gradeDistribution['A'] || 0 },
      { metric: 'B Grades', value: gradeDistribution['B'] || 0 },
      { metric: 'C Grades', value: gradeDistribution['C'] || 0 },
      { metric: 'D Grades', value: gradeDistribution['D'] || 0 },
      { metric: 'F Grades', value: gradeDistribution['F'] || 0 }
    ];

    const headers = [
      { label: 'Metric', key: 'metric' },
      { label: 'Value', key: 'value' }
    ];

    this.exportCsv.exportAsCSV(
      statistics,
      `class-statistics-${this.getDateString()}.csv`,
      headers
    );
  }

  private getDateString(): string {
    return new Date().toISOString().split('T')[0];
  }
}
```

---

## Best Practices

### Data Preparation

#### Recommended Approaches

```typescript
// 1. Format dates before export
const formattedData = this.data.map(item => ({
  ...item,
  date: new Date(item.date).toLocaleDateString(),
  timestamp: new Date(item.timestamp).toISOString()
}));

// 2. Round numbers appropriately
const cleanedData = this.data.map(item => ({
  ...item,
  price: Math.round(item.price * 100) / 100,
  percentage: Math.round(item.percentage * 10) / 10
}));

// 3. Handle null/undefined values
const safeData = this.data.map(item => ({
  ...item,
  notes: item.notes || 'N/A',
  category: item.category ?? 'Uncategorized'
}));

// 4. Flatten nested objects
const flatData = this.data.map(item => ({
  id: item.id,
  name: item.name,
  addressStreet: item.address.street,
  addressCity: item.address.city,
  addressZip: item.address.zip
}));
```

#### Things to Avoid

```typescript
// Don't: Export raw Date objects
// CSV will show [object Object]
this.exportCsv.exportAsCSV(this.data); // If data contains Date objects

// Do: Convert dates to strings first
const formattedData = this.data.map(item => ({
  ...item,
  date: item.date.toISOString() // or toLocaleDateString()
}));
this.exportCsv.exportAsCSV(formattedData);

// Don't: Include sensitive data
// Always filter out passwords, tokens, etc.
const unsafeData = this.users; // Contains password field

// Do: Remove sensitive fields
const safeData = this.users.map(({password, token, ...safe}) => safe);
this.exportCsv.exportAsCSV(safeData);

// Don't: Export circular references
// This will cause errors
const dataWithCircular = this.getData(); // Has circular refs

// Do: Break circular references before export
const cleanData = JSON.parse(JSON.stringify(dataWithCircular));
this.exportCsv.exportAsCSV(cleanData);
```

### Header Configuration

```typescript
// Good: Clear, descriptive headers
const headers = [
  { label: 'Employee Name', key: 'name' },
  { label: 'Department', key: 'dept' },
  { label: 'Hire Date', key: 'hireDate' },
  { label: 'Annual Salary ($)', key: 'salary' }
];

// Good: Match business terminology
const headers = [
  { label: 'SKU', key: 'productCode' },
  { label: 'Product Name', key: 'name' },
  { label: 'Unit Price', key: 'price' },
  { label: 'QTY Available', key: 'stock' }
];

// Avoid: Technical/cryptic headers
const badHeaders = [
  { label: 'usr_nm', key: 'name' },
  { label: 'dept_id', key: 'department' }
];
```

### File Naming Conventions

```typescript
// Include timestamps for uniqueness
const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
this.exportCsv.exportAsCSV(data, `export-${timestamp}.csv`);

// Include descriptive names
this.exportCsv.exportAsCSV(
  data, 
  `employee-directory-${department}-${date}.csv`
);

// Use consistent naming patterns
private getExportFileName(type: string): string {
  const date = new Date().toISOString().split('T')[0];
  return `${type}-${date}.csv`;
}

// Examples
this.exportCsv.exportAsCSV(orders, this.getExportFileName('orders'));
this.exportCsv.exportAsCSV(users, this.getExportFileName('users'));
```

### Performance Optimization

```typescript
// For large datasets, consider pagination
exportLargeDataset(): void {
  const pageSize = 1000;
  const totalPages = Math.ceil(this.data.length / pageSize);
  
  for (let i = 0; i < totalPages; i++) {
    const start = i * pageSize;
    const end = start + pageSize;
    const pageData = this.data.slice(start, end);
    
    this.exportCsv.exportAsCSV(
      pageData,
      `data-page-${i + 1}-of-${totalPages}.csv`,
      this.headers
    );
  }
}

// Debounce export triggers to prevent multiple calls
private exportDebounceTimer: any;

exportWithDebounce(): void {
  clearTimeout(this.exportDebounceTimer);
  this.exportDebounceTimer = setTimeout(() => {
    this.exportCsv.exportAsCSV(this.data, 'export.csv');
  }, 300);
}

// Show loading indicator for large exports
async exportWithLoading(): Promise<void> {
  this.isExporting = true;
  
  try {
    // Allow UI to update
    await new Promise(resolve => setTimeout(resolve, 0));
    
    this.exportCsv.exportAsCSV(this.largeData, 'large-export.csv');
  } finally {
    this.isExporting = false;
  }
}
```

---

## Advanced Configuration

### Custom Date Formatting

```typescript
exportWithCustomDates(): void {
  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  const formattedData = this.data.map(item => ({
    ...item,
    createdAt: formatDate(new Date(item.createdAt)),
    updatedAt: formatDate(new Date(item.updatedAt))
  }));

  this.exportCsv.exportAsCSV(formattedData, 'formatted-dates.csv');
}
```

### Currency Formatting

```typescript
exportWithCurrency(): void {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formattedData = this.data.map(item => ({
    ...item,
    price: formatCurrency(item.price),
    total: formatCurrency(item.total),
    tax: formatCurrency(item.tax)
  }));

  const headers = [
    { label: 'Item', key: 'item' },
    { label: 'Price', key: 'price' },
    { label: 'Tax', key: 'tax' },
    { label: 'Total', key: 'total' }
  ];

  this.exportCsv.exportAsCSV(formattedData, 'prices.csv', headers);
}
```

### Conditional Data Export

```typescript
exportFilteredData(filterFn: (item: any) => boolean): void {
  const filteredData = this.data.filter(filterFn);
  
  if (filteredData.length === 0) {
    alert('No data matches the current filters');
    return;
  }

  this.exportCsv.exportAsCSV(
    filteredData,
    `filtered-export-${Date.now()}.csv`
  );
}

// Usage examples
exportActiveOnly() {
  this.exportFilteredData(item => item.status === 'active');
}

exportHighValue() {
  this.exportFilteredData(item => item.value > 1000);
}

exportRecentItems() {
  const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
  this.exportFilteredData(item => 
    new Date(item.date).getTime() > thirtyDaysAgo
  );
}
```

### Multi-Sheet Alternative (Multiple Files)

Since CSV doesn't support multiple sheets, export related data as separate files:

```typescript
exportCompleteDataset(): void {
  // Export main data
  this.exportCsv.exportAsCSV(
    this.orders,
    'orders.csv',
    this.orderHeaders
  );

  // Export related data
  setTimeout(() => {
    this.exportCsv.exportAsCSV(
      this.customers,
      'customers.csv',
      this.customerHeaders
    );
  }, 500);

  // Export summary
  setTimeout(() => {
    this.exportCsv.exportAsCSV(
      this.summary,
      'summary.csv',
      this.summaryHeaders
    );
  }, 1000);
}
```

---

## Browser Compatibility

### Supported Browsers

| Browser | Version | Support Level | Notes |
|---------|---------|---------------|-------|
| Chrome | 80+ | Full Support | Recommended browser |
| Firefox | 75+ | Full Support | Works perfectly |
| Safari | 13+ | Full Support | iOS and macOS |
| Edge | 80+ | Full Support | Chromium-based |
| Opera | 67+ | Full Support | Works well |
| Samsung Internet | 12+ | Full Support | Mobile support |

### Mobile Support

- iOS Safari 13+
- Chrome for Android 80+
- Samsung Internet
- All mobile browsers with modern JavaScript support

### Download Behavior by Platform

| Platform | Behavior |
|----------|----------|
| Desktop Chrome/Firefox/Edge | Direct download to Downloads folder |
| Desktop Safari | May prompt for download location |
| iOS Safari | Opens download manager |
| Android Chrome | Downloads to Downloads folder |
| Mobile Safari | Shows share sheet with save option |

### Not Supported

- Internet Explorer (all versions)
- Very old mobile browsers (pre-2019)

---

## Performance Optimization

### Bundle Size Impact

| Component | Size (Minified + Gzipped) |
|-----------|---------------------------|
| Library Core | ~1KB |
| **Total Impact** | **~1KB** |

The library has zero dependencies, making it one of the lightest CSV export solutions available.

### Optimization Tips

#### 1. **Lazy Loading for Large Datasets**

```typescript
// Split large exports into chunks
async exportLargeDataset(): Promise<void> {
  const chunkSize = 5000;
  const chunks = [];
  
  for (let i = 0; i < this.data.length; i += chunkSize) {
    chunks.push(this.data.slice(i, i + chunkSize));
  }
  
  for (let i = 0; i < chunks.length; i++) {
    this.exportCsv.exportAsCSV(
      chunks[i],
      `data-part-${i + 1}.csv`,
      this.headers
    );
    
    // Small delay between exports
    await new Promise(resolve => setTimeout(resolve, 100));
  }
}
```

#### 2. **Memoization for Repeated Exports**

```typescript
private formattedDataCache: any[] | null = null;

exportWithCache(): void {
  if (!this.formattedDataCache) {
    this.formattedDataCache = this.data.map(item => ({
      ...item,
      date: new Date(item.date).toLocaleDateString()
    }));
  }
  
  this.exportCsv.exportAsCSV(this.formattedDataCache, 'cached-export.csv');
}

clearCache(): void {
  this.formattedDataCache = null;
}
```

#### 3. **Tree-Shaking**

The library is fully tree-shakable. Only import what you need:

```typescript
// Good - Only imports the service
import { RmNgExportToCsvService } from 'rm-ng-export-to-csv';

// Also good - Import types separately
import { RmNgExportToCsvService, CsvHeaderMapping } from 'rm-ng-export-to-csv';
```

#### 4. **Reduce Data Before Export**

```typescript
// Remove unnecessary fields before export
exportOptimized(): void {
  const essentialData = this.data.map(({id, name, status}) => ({
    id,
    name,
    status
  }));
  
  this.exportCsv.exportAsCSV(essentialData, 'optimized.csv');
}
```

### Memory Management

```typescript
// For very large datasets, clear references after export
exportAndCleanup(): void {
  const data = this.prepareExportData();
  
  this.exportCsv.exportAsCSV(data, 'export.csv');
  
  // Allow garbage collection
  setTimeout(() => {
    // Clear any temporary data structures
    this.tempData = null;
  }, 1000);
}
```

---

## Troubleshooting

### Common Issues and Solutions

#### Issue: Export Doesn't Trigger Download

**Problem:** Clicking export button does nothing.

**Solution:**

```typescript
// Ensure you're calling the method correctly
exportData(): void {
  // Check if data exists
  if (!this.data || this.data.length === 0) {
    console.warn('No data to export');
    alert('No data available for export');
    return;
  }

  // Check if service is injected
  if (!this.exportCsv) {
    console.error('Export service not initialized');
    return;
  }

  this.exportCsv.exportAsCSV(this.data, 'export.csv');
}
```

#### Issue: CSV Contains [object Object]

**Problem:** CSV shows `[object Object]` instead of data.

**Solution:**

```typescript
// Format nested objects and dates before export
exportFormatted(): void {
  const formattedData = this.data.map(item => ({
    ...item,
    // Convert dates to strings
    date: item.date instanceof Date ? 
          item.date.toLocaleDateString() : 
          item.date,
    // Flatten nested objects
    addressCity: item.address?.city || '',
    addressStreet: item.address?.street || ''
  }));

  this.exportCsv.exportAsCSV(formattedData, 'formatted.csv');
}
```

#### Issue: Special Characters Not Displaying Correctly

**Problem:** Accented characters or symbols appear incorrectly in Excel.

**Solution:**

The library uses UTF-8 encoding with BOM (Byte Order Mark) to ensure proper character display in Excel. If you still experience issues:

```typescript
// Verify your data doesn't have encoding issues
const cleanData = this.data.map(item => ({
  ...item,
  // Ensure strings are properly encoded
  name: item.name.normalize('NFC')
}));

this.exportCsv.exportAsCSV(cleanData, 'export.csv');
```

#### Issue: Headers Not Matching Data

**Problem:** Custom headers don't align with data columns.

**Solution:**

```typescript
// Ensure header keys exactly match data object keys
const data = [
  { firstName: 'John', lastName: 'Doe' }  // Note: firstName, not firstname
];

// Headers must match exactly (case-sensitive)
const headers = [
  { label: 'First Name', key: 'firstName' },  // Correct
  { label: 'Last Name', key: 'lastName' }
];

// This would cause misalignment:
const badHeaders = [
  { label: 'First Name', key: 'firstname' },  // Wrong case
  { label: 'Last Name', key: 'lastname' }
];

this.exportCsv.exportAsCSV(data, 'users.csv', headers);
```

#### Issue: Mobile Download Not Working

**Problem:** Export works on desktop but not mobile.

**Solution:**

```typescript
// The library handles mobile downloads automatically
// Ensure you're testing in a real browser, not embedded webviews
// Some in-app browsers may restrict downloads

exportWithMobileCheck(): void {
  // Optional: Detect mobile and show appropriate message
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  if (isMobile) {
    console.log('Exporting on mobile device');
  }

  this.exportCsv.exportAsCSV(this.data, 'mobile-export.csv');
  
  if (isMobile) {
    // Mobile browsers may show download in notification or downloads app
    alert('Check your downloads folder or notification area');
  }
}
```

#### Issue: Large Dataset Export Freezes Browser

**Problem:** Exporting thousands of rows freezes the UI.

**Solution:**

```typescript
// Use async/await with setTimeout to prevent blocking
async exportLarge(): Promise<void> {
  this.isLoading = true;
  
  try {
    // Allow UI to update
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // For very large datasets, consider chunking
    if (this.data.length > 10000) {
      alert('Large dataset detected. Export may take a moment.');
    }
    
    this.exportCsv.exportAsCSV(this.data, 'large-export.csv');
    
  } finally {
    this.isLoading = false;
  }
}
```

#### Issue: TypeScript Errors

**Problem:** Getting type errors when using the service.

**Solution:**

```typescript
// Ensure proper typing
import { RmNgExportToCsvService, CsvHeaderMapping } from 'rm-ng-export-to-csv';

interface MyData {
  id: number;
  name: string;
  date: Date;
}

@Component({
  // ...
})
export class MyComponent {
  data: MyData[] = [];
  
  constructor(private exportCsv: RmNgExportToCsvService) {}
  
  export(): void {
    // TypeScript will now properly check types
    const headers: CsvHeaderMapping[] = [
      { label: 'ID', key: 'id' },
      { label: 'Name', key: 'name' },
      { label: 'Date', key: 'date' }
    ];
    
    this.exportCsv.exportAsCSV(this.data, 'export.csv', headers);
  }
}
```

---

## Roadmap

### Current Status (v3.0.0)

- Zero-dependency CSV export
- Custom header mapping
- TypeScript support
- Angular 14-21 compatibility
- Mobile browser support
- UTF-8 encoding with BOM

### Planned Features

#### Short-term (v3.x)

- [ ] Excel (.xlsx) export support
- [ ] CSV import functionality
- [ ] Data validation before export
- [ ] Progress indicators for large exports
- [ ] Export templates/presets
- [ ] Column formatting options (align, width)

#### Medium-term (v4.x)

- [ ] Streaming export for massive datasets
- [ ] Compression support (zip)
- [ ] Multiple sheet support (XLSX)
- [ ] Formula support in Excel exports
- [ ] Style and formatting options
- [ ] Export scheduling/automation
- [ ] Cloud storage integration

#### Long-term (v5.x)

- [ ] Real-time collaborative exports
- [ ] Advanced filtering and sorting
- [ ] Data transformation pipelines
- [ ] Export analytics and tracking
- [ ] AI-powered data formatting
- [ ] Multi-format exports (JSON, XML, PDF)

### Community Feedback

Help us prioritize features! Share your needs in our [Discussions](https://github.com/malikrajat/rm-ng-export-to-csv/discussions).

---

## Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork the Repository**
   ```bash
   git clone https://github.com/malikrajat/rm-ng-export-to-csv.git
   cd rm-ng-export-to-csv
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Write clean, documented code
   - Follow the existing code style
   - Add tests for new features

4. **Test Your Changes**
   ```bash
   npm install
   npm test     # Run unit tests
   npm run lint # Check code quality
   ```

5. **Commit Your Changes**
   ```bash
   git commit -m "Add: your feature description"
   ```

6. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```
   Then open a Pull Request on GitHub

### Contribution Guidelines

- Follow [Angular Style Guide](https://angular.dev/style-guide)
- Write meaningful commit messages
- Update documentation for API changes
- Add tests for new features
- Keep PRs focused on a single feature/fix
- Ensure all tests pass before submitting

### Development Setup

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build library
npm run build

# Run linter
npm run lint
```

### Project Structure

```
rm-ng-export-to-csv/
├── src/
│   ├── lib/
│   │   ├── rm-ng-export-to-csv.service.ts
│   │   └── types.ts
│   └── public-api.ts
├── package.json
├── README.md
└── LICENSE
```

---

## Other Libraries

### UI Components

| Library                | Description                                                              | npm Link                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **rm-range-slider**    | Lightweight two-thumb range slider with tooltips and color customization | [![npm](https://img.shields.io/npm/v/rm-range-slider.svg)](https://www.npmjs.com/package/rm-range-slider)       |
| **rm-ng-range-slider** | Angular-specific version of the dual range slider                        | [![npm](https://img.shields.io/npm/v/rm-ng-range-slider.svg)](https://www.npmjs.com/package/rm-ng-range-slider) |
| **rm-carousel**        | Simple, responsive carousel component                                    | [![npm](https://img.shields.io/npm/v/rm-carousel.svg)](https://www.npmjs.com/package/rm-carousel)               |
| **rm-image-slider**    | Minimal image slider with smooth transitions                             | [![npm](https://img.shields.io/npm/v/rm-image-slider.svg)](https://www.npmjs.com/package/rm-image-slider)       |
| **rm-ng-star-rating**  | Configurable Angular star rating component with readonly mode            | [![npm](https://img.shields.io/npm/v/rm-ng-star-rating.svg)](https://www.npmjs.com/package/rm-ng-star-rating)   |

---

### PDF & Export Libraries

| Library                                | Description                                                  | npm Link                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-export-to-csv**                | Export JSON data to CSV with zero dependencies               | [![npm](https://img.shields.io/npm/v/rm-ng-export-to-csv.svg)](https://www.npmjs.com/package/rm-ng-export-to-csv)                               |
| **@codewithrajat/rm-ng-pdf-export**    | Image-based PDF export tool for Angular applications         | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-pdf-export.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-export)       |
| **@codewithrajat/rm-ng-structure-pdf** | Generate structured PDFs for reports, invoices, or documents | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-structure-pdf.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf) |

---

### Utility Libraries

| Library                        | Description                                             | npm Link                                                                                                                        |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-device-detection**     | Detect device type, OS, and browser in Angular          | [![npm](https://img.shields.io/npm/v/rm-ng-device-detection.svg)](https://www.npmjs.com/package/rm-ng-device-detection)         |
| **rm-colorful-console-logger** | Stylish multi-color console logger for better debugging | [![npm](https://img.shields.io/npm/v/rm-colorful-console-logger.svg)](https://www.npmjs.com/package/rm-colorful-console-logger) |

---

### Notifications

| Library           | Description                                       | npm Link                                                                                              |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **rm-pushnotify** | Lightweight push-style toast notification utility | [![npm](https://img.shields.io/npm/v/rm-pushnotify.svg)](https://www.npmjs.com/package/rm-pushnotify) |

---

### Meta & Personal Branding

| Library         | Description                                                      | npm Link                                                                                          |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **about-rajat** | Developer portfolio package for branding and quick personal info | [![npm](https://img.shields.io/npm/v/about-rajat.svg)](https://www.npmjs.com/package/about-rajat) |

---

### All Packages

Browse all my packages:
- [npm: @codewithrajat](https://www.npmjs.com/settings/codewithrajat/packages)
- [npm: rajatmalik](https://www.npmjs.com/settings/rajatmalik/packages)
- [GitHub: @malikrajat](https://github.com/malikrajat?tab=repositories)

---

## Support and Community

### Getting Help

Need assistance? We're here to help!

| Support Channel | Link | Best For |
|----------------|------|----------|
| Bug Reports | [Report Bug](https://github.com/malikrajat/rm-ng-export-to-csv/issues/new?template=bug_report.md) | Technical issues |
| Feature Requests | [Request Feature](https://github.com/malikrajat/rm-ng-export-to-csv/issues/new?template=feature_request.md) | New features |
| Discussions | [Join Discussion](https://github.com/malikrajat/rm-ng-export-to-csv/discussions) | General questions |
| Email | [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com?subject=rm-ng-export-to-csv%20Support) | Direct support |

### Documentation

- [GitHub Repository](https://github.com/malikrajat/rm-ng-export-to-csv)
- [npm Package](https://www.npmjs.com/package/rm-ng-export-to-csv)
- [Live Demo](https://stackblitz.com/edit/stackblitz-starters-gn9k5bwq)
- [Changelog](https://github.com/malikrajat/rm-ng-export-to-csv/blob/main/CHANGELOG.md)

### Community

- ⭐ Star the repository to show support
- 👁️ Watch for updates and new releases
- 🤝 Share your use cases and feedback
- 💡 Contribute code or documentation

### Stay Updated

- Follow the project on [GitHub](https://github.com/malikrajat/rm-ng-export-to-csv)
- Star the repository for updates
- Watch for new releases

---

## Changelog

See [CHANGELOG.md](https://github.com/malikrajat/rm-ng-export-to-csv/blob/main/CHANGELOG.md) for release history and updates.

### Recent Updates

**v3.0.0** (Latest)
- Angular 20 support
- Performance improvements
- Enhanced TypeScript definitions

**v2.0.0**
- Angular 19 support
- Bug fixes and optimizations

**v1.0.0**
- Initial release
- Angular 18 support
- Basic CSV export functionality

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**TL;DR:** You can use this library freely in commercial and personal projects.

### MIT License Summary

**You can:**
- Use commercially
- Modify the code
- Distribute
- Use privately

**You must:**
- Include the license and copyright notice

**You cannot:**
- Hold the author liable

---

## Acknowledgments

This library was created to provide a simple, lightweight solution for CSV export in Angular applications.

Special thanks to:
- **[Angular Team](https://angular.io/)** - Amazing framework and ecosystem
- **Contributors** - Thank you for making this library better
- **Community** - For feedback and feature requests

---

## FAQ

**Q: Why choose rm-ng-export-to-csv over other CSV libraries?**

A: This library has zero dependencies, making it the lightest option (~1KB). It's specifically built for Angular with proper TypeScript support and works seamlessly on all platforms including mobile.

**Q: Can I export nested JSON objects?**

A: Yes, but you need to flatten them first. The library exports flat key-value pairs, so nested objects should be flattened before passing to the export function.

**Q: Does it work with Angular Universal (SSR)?**

A: Yes, but CSV export requires a browser environment with DOM access. Ensure export functionality only runs on the client side using platform checks.

**Q: Can I customize the CSV delimiter?**

A: The current version uses commas as delimiters (standard CSV format). Custom delimiters are planned for future releases.

**Q: Does it handle large datasets (100k+ rows)?**

A: Yes, but for very large datasets, consider chunking the data into multiple files to prevent browser memory issues.

**Q: Can I export to Excel (.xlsx) format?**

A: The current version exports CSV files, which Excel can open. Native XLSX export is on the roadmap for v4.0.

**Q: Does it work on mobile devices?**

A: Yes! The library works on iOS, Android, and all modern mobile browsers with automatic download support.

**Q: Can I use this in commercial projects?**

A: Yes, the MIT license allows free use in both personal and commercial projects.

**Q: How do I handle special characters?**

A: The library uses UTF-8 encoding with BOM, which ensures proper display of special characters in Excel and other applications.

**Q: Can I export data from Chart.js, Plotly, or ApexCharts?**

A: Absolutely! Extract the data from your chart library and pass it to the export function. See the Chart Data Export example above.

**Q: Is there a maximum file size limit?**

A: The limit depends on browser memory. Most browsers can handle files up to several hundred MB, but for optimal performance, keep exports under 50MB.

**Q: Can I preview the CSV before downloading?**

A: Direct preview is not built-in, but you can display the data in a table component before triggering the export.

---

## Support This Project

If **rm-ng-export-to-csv** has helped you build better Angular applications, please consider:

### ⭐ Star This Repository

A star helps other developers discover this library!

[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-ng-export-to-csv?style=social)](https://github.com/malikrajat/rm-ng-export-to-csv/stargazers)

### 🌟 Why Your Star Matters

- Increases visibility in the Angular community
- Supports ongoing development and maintenance
- Encourages more open-source contributions
- Helps other developers find quality tools

---

## 🙏 Acknowledgments

This library was created to provide a simple, lightweight solution for CSV export in Angular applications. Special thanks to the Angular community for their feedback and contributions.

---

## Author

**Rajat Malik**

Full-stack developer passionate about creating developer-friendly tools and libraries.

- Website: [rajatmalik.dev](https://rajatmalik.dev)
- Email: [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
- LinkedIn: [errajatmalik](https://linkedin.com/in/errajatmalik)
- GitHub: [@malikrajat](https://github.com/malikrajat)
- npm: [@codewithrajat](https://www.npmjs.com/~codewithrajat)

---
## Statistics

[![npm downloads](https://img.shields.io/npm/dt/rm-ng-export-to-csv.svg)](https://www.npmjs.com/package/rm-ng-export-to-csv)
[![npm version](https://img.shields.io/npm/v/rm-ng-export-to-csv.svg)](https://www.npmjs.com/package/rm-ng-export-to-csv)
[![GitHub issues](https://img.shields.io/github/issues/malikrajat/rm-ng-export-to-csv.svg)](https://github.com/malikrajat/rm-ng-export-to-csv/issues)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-ng-export-to-csv.svg?style=social)](https://github.com/malikrajat/rm-ng-export-to-csv/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malikrajat/rm-ng-export-to-csv/blob/main/LICENSE)

---

<p align="center">
  <b>Built with ❤️ for the Angular community</b>
</p>

<p align="center">
  <a href="https://github.com/malikrajat/rm-ng-export-to-csv/stargazers">Star on GitHub</a> •
  <a href="https://www.npmjs.com/package/rm-ng-export-to-csv">View on npm</a> •
  <a href="https://github.com/malikrajat/rm-ng-export-to-csv/issues">Report Issue</a> •
  <a href="https://stackblitz.com/edit/stackblitz-starters-gn9k5bwq">Try Demo</a>
</p>

<p align="center">
  Made with dedication by <a href="https://rajatmalik.dev">Rajat Malik</a>
</p>