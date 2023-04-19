### [coreui-pro-angular-admin-template](https://coreui.io/angular/) changelog

---

#### `4.3.0`

update to:
- `Angular 15`
- `TypeScript 4.8`
- `RxJS 7.5`
- `FullClaendar 6.0`

---
- chore(full-calendar): update @fullcalendar/* to v6.0.0
  - chore(angular.json): remove @fullcalendar/* css styles
  - refactor(full-calendar-ng): move `CalendarOptions` and `plugins` from module to the component
  - see:
    - [v6 Release Notes and Upgrade Guide](https://fullcalendar.io/docs/upgrading-from-v5)
    - [Angular-specific Changes](https://fullcalendar.io/docs/upgrading-from-v5#angular-specific-changes)

---
- refactor(AppComponent): change selector to `app-root`
- refactor(smart-table): extract card-body div for smooth collapse animation
- fix(pages): add missing dark-theme classes

