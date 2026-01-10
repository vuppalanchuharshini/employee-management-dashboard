# Employee Management Dashboard

A React.js-based Employee Management Dashboard built as part of a frontend assignment. The application demonstrates authentication flow, protected routes, dashboard summary, and employee listing using mock data, following clean UI/UX principles and modular code structure.

---

## Project Overview

This project is a single-page application (SPA) developed using **React.js**. It includes:

* Mock authentication with protected routes
* A dashboard displaying employee statistics
* An employee list rendered from mock data
* Clean and maintainable folder structure
* Modern, minimal UI styling using CSS

The project is built incrementally to reflect real-world development practices.

---

## Tech Stack

* **React.js** (JavaScript)
* **Vite** (for fast development setup)
* **React Router DOM** (routing & route protection)
* **CSS** (centralized styles folder)
* **LocalStorage** (mock authentication state)

---

## Authentication (Mock)

The application uses **mock authentication** as permitted by the assignment.

### Demo Credentials

```
Username: admin
Password: admin123
```

* Authentication state is stored in `localStorage`
* Dashboard routes are protected
* Unauthorized users are redirected to the login page

---

## Dashboard Features (Implemented So Far)

### Dashboard Summary

* Total number of employees
* Active employees count
* Inactive employees count

### Employee List

* Displays employee data using mock data
* Columns include:

  * Employee ID
  * Profile Image
  * Full Name
  * Gender
  * Date of Birth
  * State
  * Active / Inactive status

Mock data is stored locally and used to simulate real API behavior.

---

## Folder Structure

```
src/
 ├─ data/              # Mock employee data
 ├─ pages/             # Page-level components (Login, Dashboard)
 ├─ routes/            # ProtectedRoute logic
 ├─ styles/            # Centralized CSS files
 │   ├─ global.css
 │   ├─ login.css
 │   └─ dashboard.css
 ├─ App.jsx
 └─ main.jsx
```

---

## How to Run the Project Locally

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project folder

```bash
cd employee-management-dashboard
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

5. Open the browser at

```
http://localhost:5173
```

---

## Design Decisions & Assumptions

* Authentication is mocked as backend integration is out of scope
* Mock employee data is used instead of an API
* CSS is centralized for better maintainability
* The project is developed incrementally with clear Git commits

---

## Upcoming Features

* Add / Edit employee form
* Delete employee with confirmation
* Search and combined filters
* Active/Inactive toggle
* Print employee list
* UI enhancements & empty/loading states

---

## Demo & Deliverables

* GitHub Repository: Included
* README Documentation: Included
* Screen recording: To be added after feature completion

---

**Note:** This README will be updated as new features are implemented.
