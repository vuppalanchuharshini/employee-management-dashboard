# Employee Management Dashboard

A React.js–based Employee Management Dashboard built as part of a frontend assignment.  
The application demonstrates authentication flow, protected routes, employee CRUD operations, filtering, printing, and persistent storage, following clean UI/UX principles and a modular code structure.

---

## Project Overview

This project is a Single Page Application (SPA) developed using React.js.  
It allows authenticated users to manage employee records with an intuitive and beginner-friendly interface.

### Key features include:

- Mock authentication with protected routes
- Employee dashboard with summary statistics
- Add, Edit, Delete employee functionality
- Search & combined filters
- Profile image upload with preview
- Persistent data storage using LocalStorage
- Print-friendly employee list
- Clean, responsive UI with modal-based forms

The project is built incrementally to reflect real-world frontend development practices.

---

## 🛠 Tech Stack Used

- React.js (JavaScript, Functional Components, Hooks)
- Vite (Fast development setup)
- React Router DOM (Routing & route protection)
- React Icons (UI icons)
- CSS (Centralized styles folder)
- LocalStorage
  - Mock authentication state
  - Persistent employee data

---

## Authentication (Mock)

The application uses mock authentication, as permitted by the assignment.

### Demo Credentials

- Username: `admin`
- Password: `admin123`

### Authentication Behavior

- Authentication state is stored in LocalStorage
- Dashboard routes are protected using a ProtectedRoute
- Unauthorized users are redirected to the login page
- Logout clears authentication and redirects to login
- Refreshing the page does not log the user out

---

## Dashboard Features (Implemented)

### Dashboard Summary

- Total number of employees
- Active employees count
- Inactive employees count

---

### Employee List

Displays employee data stored locally (mock data + user-added data).

Columns include:

- Employee ID (auto-incremented)
- Profile Image
- Full Name
- Gender
- Date of Birth
- State
- Active / Inactive status
- Actions (Edit / Delete)

---

### Employee Management

#### Add Employee

- Modal-based form
- Required fields clearly indicated
- Profile image upload with preview
- Ability to cancel/remove selected image before saving
- Duplicate employee validation

#### Edit Employee

- Opens in modal
- Existing data pre-filled
- Image preview shown during edit

#### Delete Employee

- Confirmation popup before deletion

#### Employee ID Handling

- Auto-incremented ID based on existing employee records

---

### Search & Filters

- Search employees by Name
- Filter by:
  - Gender
  - Active / Inactive status
- Filters work together (combined filtering)

---

### Employee Status

- Toggle Active / Inactive status
- Status reflected in dashboard summary and print view

---

### Print Employee List

- Clean, center-aligned printable layout
- Table headers and rows properly aligned
- Employee status visible in print
- Non-print elements hidden:
  - Add Employee button
  - Logout button
  - Filters
  - Action buttons
  - Toggles

---

### Data Persistence

- Employee data is stored in LocalStorage
- Data remains available after page refresh
- Simulates real API behavior without backend integration

---

## Folder Structure

src/
├─ components/ # Reusable components (EmployeeForm, etc.)
├─ data/ # Initial mock employee data
├─ pages/ # Page-level components (Login, Dashboard)
├─ routes/ # ProtectedRoute logic
├─ styles/ # Centralized CSS files
│ ├─ global.css
│ ├─ login.css
│ ├─ dashboard.css
│ └─ employeeForm.css
├─ App.jsx
└─ main.jsx
