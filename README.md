# Decen Uptime 🌐

**Decen Uptime** is a decentralized website monitoring platform. Unlike traditional centralized uptime monitors that check your site from a handful of fixed data centers, Decen Uptime leverages a global network of community-run "checkers" (validators) to provide a true, distributed view of your website's availability and performance.

> ⚠️ **Project Status:** This project is currently under development.

## 🚀 The Vision

In a centralized system, if your monitoring server in New York says your site is up, you only know it's up for New York. But what about users in Tokyo, London, or Mumbai? 

Decen Uptime turns any machine into a checker. This allows for:
- **Global Coverage:** Monitor your site from thousands of unique residential and commercial IPs worldwide.
- **Unbiased Data:** No more "false positives" from data center network issues.
- **Decentralized Trust:** Verification of uptime by multiple independent nodes.

## 🏗️ Architecture

This project is built as a monorepo using [Turborepo](https://turbo.build/) and [Bun](https://bun.sh/).

### Apps
- **`apps/api`**: Express.js REST API that handles user registrations, website management, and data aggregation.
- **`apps/frontend`**: Next.js dashboard where users can manage their monitors and view global uptime stats.
- **`apps/hub`**: (In Development) The central coordination layer that distributes monitoring tasks to validators.
- **`apps/validator`**: (In Development) The client software that anyone can run to become a part of the monitoring network.

### Packages
- **`packages/db`**: Shared database layer using [Prisma](https://www.prisma.io/) and PostgreSQL.
- **`packages/ui`**: Shared React component library.
- **`packages/typescript-config`**: Shared TypeScript configurations.
- **`packages/eslint-config`**: Shared ESLint configurations.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (Frontend)
- **Runtime:** [Bun](https://bun.sh/)
- **Backend:** Node.js / Express
- **Database:** PostgreSQL with [Prisma ORM](https://www.prisma.io/)
- **Monorepo Tooling:** [Turborepo](https://turbo.build/)
- **Styling:** Tailwind CSS & Framer Motion

## 🚦 Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed on your machine.
- A PostgreSQL instance.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/decen-uptime.git
   cd decen-uptime
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   Create a `.env` file in `packages/db` and `apps/api` with your `DATABASE_URL`.

4. Run the development server:
   ```bash
   bun run dev
   ```

## 🤝 Contributing

We are in early development! If you're interested in decentralized infrastructure and want to contribute, feel free to open an issue or submit a PR.

## 📄 License

[MIT](./LICENSE)
