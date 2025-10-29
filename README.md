# Quizzle

A quiz application built with a TypeScript Express API backend and an Ink-powered console TUI frontend.

## Project Structure

```
quizzle/
├── server/     # Express API backend
└── console/    # Ink console TUI
```

## Components

### Server

The backend API built with Express and TypeScript.

**Tech Stack:**
- Express 5
- TypeScript
- dotenv for configuration

**Development:**
```bash
cd server
pnpm install
pnpm dev        # Start development server with hot reload
pnpm build      # Compile TypeScript
pnpm start      # Run production build
pnpm lint       # Run ESLint
```

### Console

An interactive terminal UI built with React and Ink.

**Tech Stack:**
- Ink 4 (React for CLI)
- TypeScript
- Meow for CLI argument parsing

**Development:**
```bash
cd console
pnpm install
pnpm dev        # Watch mode for development
pnpm build      # Compile TypeScript
pnpm test       # Run tests and linting
```

## Getting Started

1. **Start the API server:**
   ```bash
   cd server
   pnpm install
   pnpm dev
   ```

2. **Run the console TUI:**
   ```bash
   cd console
   pnpm install
   pnpm build
   node dist/cli.js
   ```

## License

MIT
