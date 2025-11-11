export const faqItems = [
  {
    id: "1",
    title: "What is FastPay?",
    content:
      "FastPay is a secure, role-based, and user-friendly digital wallet system where users, agents, and admins can perform financial operations like deposit, withdraw, send money, and manage wallets seamlessly.",
  },
  {
    id: "2",
    title: "Which technologies are used to build FastPay?",
    content:
      "FastPay frontend is built with React, Redux Toolkit, RTK Query, TypeScript, and Tailwind CSS. The backend is powered by Node.js, Express.js, MongoDB, and JWT for authentication.",
  },
  {
    id: "3",
    title: "How does authentication work?",
    content:
      "FastPay uses secure JWT-based authentication. Users can register as either 'User' or 'Agent'. After login, the dashboard and features are role-based, ensuring security and personalization.",
  },
  {
    id: "4",
    title: "What features does the User Dashboard include?",
    content:
      "Users can view wallet balance, deposit money (cash-in via agent simulation), withdraw, send money to others, check transaction history with filters and pagination, and manage their profile.",
  },
  {
    id: "5",
    title: "What features does the Agent Dashboard include?",
    content:
      "Agents can add money to user wallets, withdraw on behalf of users, view all transactions they handled, track commission history, and update their personal profile details.",
  },
  {
    id: "6",
    title: "What features does the Admin Dashboard include?",
    content:
      "Admins have full control: manage users and agents (approve, block/unblock), monitor transactions with advanced filters, adjust system fees/limits, and view overall statistics.",
  },
  {
    id: "7",
    title: "Is FastPay optimized for performance?",
    content:
      "Yes. The app uses Redux Toolkit with RTK Query for optimized API calls, lazy loading, code splitting, skeleton loaders, and caching for smooth and fast performance.",
  },
  {
    id: "8",
    title: "How does FastPay ensure security?",
    content:
      "FastPay implements JWT authentication, bcrypt password hashing, secure API routes, role-based access, and form validations to ensure data and financial transactions are protected.",
  },
  {
    id: "9",
    title: "Does FastPay support responsive design?",
    content:
      "Yes. The UI is fully responsive, supports dark/light mode, and follows accessibility standards with proper ARIA attributes and keyboard navigation support.",
  },
  {
    id: "10",
    title: "Where can I find documentation or support?",
    content:
      "FastPay comes with detailed documentation in the README, covering setup, usage, and deployment. For issues, you can contact the support team or check GitHub Issues in the repository.",
  },
];
