# Brighte Eats Frontend

A modern Next.js frontend application for the Brighte Eats lead registration system. This application allows potential customers to express their interest in Brighte Eats services (delivery, pickup, and payment) and provides a dashboard to view and manage registered leads.

## Features

- **Lead Registration Form** - User-friendly form with validation for capturing customer interest
- **Real-time Dashboard** - Auto-refreshing dashboard displaying all registered leads
- **Lead Details View** - Detailed view of individual lead information
- **GraphQL Integration** - Seamless communication with backend API using Apollo Client
- **Responsive Design** - Mobile-friendly UI built with Tailwind CSS
- **Type Safety** - Full TypeScript support for robust development
- **Auto-refresh** - Dashboard automatically polls for new leads every 3 seconds

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript 5** - Type-safe development
- **Apollo Client** - GraphQL client for data fetching
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Modern icon library

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Brighte Eats Backend** running on `http://localhost:4000`

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd brighte-eats-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
# Create .env.local file in the root directory
echo "NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4000/graphql" > .env.local
```

## Environment Variables

Create a `.env.local` file in the root directory with the following:

```env
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4000/graphql
```

**Note:** Update the URL if your backend is running on a different port or host.

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
brighte-eats-frontend/
├── app/                      # Next.js App Router pages
│   ├── dashboard/           # Dashboard page
│   ├── leads/[id]/          # Dynamic lead detail page
│   ├── register/            # Registration page
│   ├── layout.tsx           # Root layout with Apollo Provider
│   └── page.tsx             # Home/landing page
├── components/              # React components
│   ├── LeadDetail.tsx       # Individual lead view component
│   ├── LeadsDashboard.tsx   # Dashboard table component
│   └── RegistrationForm.tsx # Lead registration form
├── lib/                     # Utilities and configurations
│   ├── graphql/
│   │   └── operations.ts    # GraphQL queries and mutations
│   ├── apollo-client.ts     # Apollo Client configuration
│   ├── apollo-provider.tsx  # Apollo Provider wrapper
│   └── types.ts             # TypeScript type definitions
└── .env.local               # Environment variables (create this)
```

## Available Pages

- **`/`** - Landing page with service overview and navigation
- **`/register`** - Lead registration form
- **`/dashboard`** - Dashboard showing all registered leads
- **`/leads/[id]`** - Detailed view of a specific lead

## GraphQL Operations

### Mutations

- **`REGISTER_LEAD`** - Register a new lead with name, email, mobile, postcode, and services

### Queries

- **`GET_LEADS`** - Fetch all registered leads
- **`GET_LEAD`** - Fetch a single lead by ID

## Key Features Explained

### Auto-refresh Dashboard

The dashboard automatically updates in two ways:

1. **Polling** - Queries the backend every 3 seconds for new data
2. **Refetch on mutation** - Automatically refreshes after a new lead is registered

### Form Validation

The registration form includes:

- Required field validation
- Email format validation
- Mobile number format validation
- Service selection validation (at least one service required)

### Type Safety

All GraphQL operations and data structures are fully typed with TypeScript interfaces matching the backend schema.

## Connecting to Backend

Ensure your Brighte Eats backend is running before starting the frontend. The backend should expose a GraphQL endpoint at the URL specified in your `.env.local` file.

**Backend Requirements:**

- GraphQL endpoint available
- CORS enabled for frontend origin
- Mutations: `register`
- Queries: `leads`, `lead`

## Development Notes

- The app uses Next.js App Router (not Pages Router)
- All components that use Apollo Client hooks are marked with `"use client"`
- The Apollo Provider is configured at the root layout level
- Tailwind CSS is configured for the latest version (v4)
