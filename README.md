# 💳 FastPay – Digital Wallet Frontend (React + Redux Toolkit + TypeScript)

A **secure**, **role-based**, and **user-friendly** digital wallet system inspired by platforms like **bKash** and **Nagad**.  
This project provides a complete frontend implementation for a **Digital Wallet Application**, enabling **Users**, **Agents**, and **Admins** to manage financial operations with ease.

---

## 🚀 Project Overview

**FastPay** is a modern, full-featured digital wallet built with **React.js**, **Redux Toolkit**, and **RTK Query**.  
It consumes a **REST API backend** (Node.js + Express + MongoDB) to handle wallet transactions, user management, and role-based authentication.

The goal is to deliver:

- A **professional landing experience**
- A **secure role-based dashboard**
- **Smooth UI/UX** with responsive layouts, animations, and visual feedback
- **Scalable architecture** powered by Redux Toolkit and modular design

---

## 🧰 Tech Stack

### **Frontend**

- ⚛️ **React** (UI Library)
- ⚙️ **Redux Toolkit** + **RTK Query** (State management & API handling)
- 🧱 **TypeScript** (Static typing)
- 🎨 **Tailwind CSS** (Styling)
- 🎬 **Framer Motion** (Animations)
- 🔔 **React Toastify** (Notifications)
- 🧭 **React Router v6** (Routing)
- 🧠 **React Joyride / Driver.js** (Guided Tour)
- 💡 **Vite** (Recommended build tool)

### **Backend** (Consumed via API)

- 🧩 **Node.js** + **Express**
- 🗄️ **MongoDB** + **Mongoose**
- 🔒 **JWT** + **bcrypt** for Authentication and Authorization

---

## 📋 Features

### 1️⃣ Public Landing Section

Accessible without login:

- **Home Page:** Modern hero banner, CTA buttons, and a sticky theme-colored navbar.
- **About Page:** Service story, mission, and team.
- **Features Page:** Interactive feature list with icons/visuals.
- **Contact Page:** Inquiry form (mock submission).
- **FAQ Page:** Common questions and answers.
- **Footer & Navbar:** Consistent, responsive, and accessible.
- **Responsive Design:** Works seamlessly on desktop, tablet, and mobile.
- **Animations:** Smooth transitions and skeleton loaders.

---

### 2️⃣ Authentication

- Login and Registration with **JWT-based authentication**.
- **Role Selection** during registration (User or Agent).
- Role-based redirection after login.
- Persistent authentication (remains logged in after refresh).
- Logout functionality.

---

### 3️⃣ User Dashboard

- Overview: Wallet balance, quick actions, and recent transactions.
- Deposit / Withdraw money (via simulated agent cash-in/out).
- Send money to other users (by phone/email).
- Transaction history with pagination and filtering.
- Profile management (update name, phone, password).

---

### 4️⃣ Agent Dashboard

- Overview: Cash-in/out summary and recent activity.
- Add or withdraw money for users.
- View all agent-handled transactions.
- Commission history (optional).
- Profile management.

---

### 5️⃣ Admin Dashboard

- Overview: Total users, agents, transactions, and total transaction volume.
- Manage users (view, block/unblock).
- Manage agents (approve/suspend).
- View all transactions with advanced filters.
- Search and multiple filtering (category, status, amount, date range).
- Pagination on listing pages.
- System settings (optional: fees/limits adjustment).
- Profile management.

---

### 6️⃣ General Features

- 🔐 **Role-based navigation menus**
- ⚙️ **Form validations**
- 🔄 **Global loading indicators**
- 📊 **Dynamic data visualization:** Charts, cards, tables
- 🧭 **Guided tour** for new users (using react-joyride or driver.js)
  - Navigation overview
  - Dashboard stats cards
  - Chart sections
  - Table filters
  - Theme toggle
- 🌗 **Theme toggle (Light/Dark mode)**
- 📱 **Fully responsive and accessible UI**

---

## 🧭 Guided Tour (UX Feature)

Includes at least **5 steps**:

1. Navigation menu – explain section switching
2. Dashboard stats cards – show quick summary
3. Chart section – highlight data visualization
4. Table search/filter – demonstrate record filtering
5. Theme toggle – switch between light and dark mode

- Runs once for new users (stored in `localStorage`)
- Optional “Restart Tour” from **Settings**

---

## 🧩 Folder Structure

```
fastpay-frontend/
├── public/
│   ├── favicon.ico
│   ├── logo.png
│   ├── manifest.json
│   └── index.html
│
├── src/
│   ├── app/
│   │   ├── store.ts                # Redux store setup
│   │   ├── hooks.ts                # Custom typed hooks (useAppSelector, useAppDispatch)
│   │   └── rootReducer.ts          # Combine reducers
│   │
│   ├── api/
│   │   ├── baseApi.ts              # RTK Query base API config
│   │   ├── auth.api.ts             # Auth-related API endpoints
│   │   ├── user.api.ts             # User dashboard API endpoints
│   │   ├── agent.api.ts            # Agent dashboard API endpoints
│   │   └── admin.api.ts            # Admin dashboard API endpoints
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── authSlice.ts        # Auth reducer + actions
│   │   │   ├── auth.types.ts       # Auth-related types
│   │   │   ├── authHelpers.ts      # Token decode, role utils, etc.
│   │   │   └── hooks.ts            # Auth-specific hooks
│   │   │
│   │   ├── user/
│   │   │   ├── userSlice.ts
│   │   │   ├── components/
│   │   │   │   ├── UserOverview.tsx
│   │   │   │   ├── DepositForm.tsx
│   │   │   │   ├── WithdrawForm.tsx
│   │   │   │   └── TransactionHistory.tsx
│   │   │   └── pages/
│   │   │       ├── UserDashboard.tsx
│   │   │       └── UserProfile.tsx
│   │   │
│   │   ├── agent/
│   │   │   ├── agentSlice.ts
│   │   │   ├── components/
│   │   │   │   ├── AgentOverview.tsx
│   │   │   │   ├── CashInForm.tsx
│   │   │   │   └── CashOutForm.tsx
│   │   │   └── pages/
│   │   │       ├── AgentDashboard.tsx
│   │   │       └── AgentProfile.tsx
│   │   │
│   │   └── admin/
│   │       ├── adminSlice.ts
│   │       ├── components/
│   │       │   ├── AdminOverview.tsx
│   │       │   ├── ManageUsers.tsx
│   │       │   ├── ManageAgents.tsx
│   │       │   ├── TransactionsTable.tsx
│   │       │   └── SystemSettings.tsx
│   │       └── pages/
│   │           ├── AdminDashboard.tsx
│   │           └── AdminProfile.tsx
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── SkeletonLoader.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── ProtectedRoute.tsx       # Role-based route wrapper
│   │   │   └── ErrorBoundary.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── DashboardLayout.tsx
│   │   │
│   │   ├── charts/
│   │   │   ├── TransactionChart.tsx
│   │   │   ├── CommissionChart.tsx
│   │   │   └── VolumeChart.tsx
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Select.tsx
│   │   │   └── ToastContainer.tsx
│   │   │
│   │   └── tours/
│   │       └── GuidedTour.tsx          # React Joyride or Driver.js setup
│   │
│   ├── pages/
│   │   ├── public/
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Pricing.tsx
│   │   │
│   │   ├── auth/
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── Unauthorized.tsx
│   │   │
│   │   ├── not-found/
│   │   │   └── NotFound.tsx
│   │   │
│   │   └── settings/
│   │       └── ThemeSettings.tsx
│   │
│   ├── routes/
│   │   ├── AppRoutes.tsx               # All routes defined here
│   │   └── PrivateRoute.tsx            # Route protection by role
│   │
│   ├── hooks/
│   │   ├── useAuth.ts                  # Auth context helper
│   │   ├── useToast.ts                 # Custom toast logic
│   │   └── useTheme.ts                 # Theme toggle (light/dark)
│   │
│   ├── context/
│   │   ├── ThemeContext.tsx
│   │   └── TourContext.tsx
│   │
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   └── storage.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── theme.css
│   │   └── tailwind.css
│   │
│   ├── types/
│   │   ├── index.d.ts
│   │   ├── user.types.ts
│   │   ├── transaction.types.ts
│   │   └── common.types.ts
│   │
│   ├── assets/
│   │   ├── icons/
│   │   │   ├── FastPayLogo.tsx
│   │   │   └── ...
│   │   ├── images/
│   │   │   ├── hero-banner.png
│   │   │   └── team.jpg
│   │   └── illustrations/
│   │       └── empty-state.svg
│   │
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .env
├── .eslintrc.cjs
├── .prettierrc
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🪪 License

This project is licensed under the [MIT License](./LICENSE).
