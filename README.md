# Sika Pa Credit Funds Dashboard

A modern, premium fintech dashboard for managing credit funds and loan operations with Server-Side Rendering (SSR) support.

## Features

- 🎨 Premium glassmorphism UI with emerald green branding
- 🔐 Secure admin authentication portal
- 📊 Comprehensive loan management system
- 💰 Loan approval workflow with amortization schedules
- 🔍 Advanced search and filtering capabilities
- 📱 Fully responsive design
- ⚡ Server-Side Rendering for optimal performance

## Tech Stack

- **Frontend**: React 19, Vite 6
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Backend**: Express.js (SSR)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/eddie345/sika-pa-credit-funds.git

# Navigate to project directory
cd sika-pa-credit-funds

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### SSR Development

```bash
# Start SSR server
npm run dev:ssr
```

The SSR server will run on `http://localhost:5175`

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect the Vite framework
5. Deploy!

## Admin Credentials

- **Email**: admin@sikapacredit.com
- **Password**: admin123

## Project Structure

```
sika-pa-credit-funds/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── DashboardLayout.tsx
│   │       ├── Header.tsx
│   │       └── Sidebar.tsx
│   ├── pages/
│   │   ├── Login.tsx
│   │   └── Loans.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── server.js              # SSR server
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## License

MIT

## Author

Eddie345
