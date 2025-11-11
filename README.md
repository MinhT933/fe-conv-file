# Scalable Next.js Project

A modern, scalable Next.js application built with TypeScript and organized using feature-based architecture.

## 🏗️ Project Structure

```
src/
├─ app/                    # Next.js App Router
│  ├─ (public)/           # Public pages group
│  ├─ (dashboard)/        # Dashboard pages group
│  ├─ not-found.tsx       # 404 page
│  └─ api/                # API routes
│
├─ features/               # Feature-based modules
│  ├─ auth/               # Authentication feature
│  │   ├─ components/     # Auth-specific components
│  │   ├─ hooks/          # Auth-specific hooks
│  │   ├─ services/       # Auth API services
│  │   └─ types.ts        # Auth type definitions
│  │
│  └─ user/               # User management feature
│
├─ components/             # Shared components
│  ├─ ui/                 # Base UI components
│  └─ layout/             # Layout components
│
├─ lib/                   # Utilities and configurations
│  ├─ axios.ts            # HTTP client setup
│  ├─ utils.ts            # Utility functions
│  ├─ formatDate.ts       # Date formatting
│  └─ env.ts              # Environment validation
│
├─ store/                 # Global state management
│  ├─ useAuthStore.ts     # Authentication store
│  └─ useThemeStore.ts    # Theme store
│
├─ hooks/                 # Shared custom hooks
│  └─ useToast.ts         # Toast notifications
│
└─ types/                 # Global type definitions
   └─ global.d.ts         # Global TypeScript types
```

## 🚀 Features

- **Feature-based Architecture**: Organized by business features rather than technical layers
- **Type Safety**: Full TypeScript support with strict mode enabled
- **State Management**: Zustand for lightweight and scalable state management
- **UI Components**: Reusable UI components with Tailwind CSS
- **API Integration**: Axios setup with interceptors and error handling
- **Authentication**: Complete auth flow with JWT token management
- **Route Groups**: Organized routes using Next.js route groups
- **Path Mapping**: Clean imports using @ alias

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Validation**: Zod
- **Development**: ESLint, Prettier

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## 🏃‍♂️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

## 🗂️ Folder Organization Principles

### Features (`src/features/`)

Each feature contains its own:

- **Components**: Feature-specific UI components
- **Hooks**: Custom hooks for feature logic
- **Services**: API calls and external integrations
- **Types**: TypeScript interfaces and types

### Components (`src/components/`)

- **ui/**: Base, reusable UI components (Button, Input, Modal, etc.)
- **layout/**: Layout-specific components (Header, Sidebar, etc.)

### Store (`src/store/`)

Global state management using Zustand:

- Modular stores for different concerns
- Persistent storage for user preferences
- Type-safe state management

### Lib (`src/lib/`)

Utility functions and configurations:

- API client setup
- Environment validation
- Common utility functions
- Date formatting helpers

## 🔧 Configuration

### Path Mapping

The project uses path mapping for clean imports:

```typescript
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/features/auth/hooks/useAuth";
```

### Environment Variables

See `.env.example` for required environment variables.

## 🎯 Best Practices

1. **Feature Isolation**: Keep feature code self-contained
2. **Type Safety**: Use TypeScript for all code
3. **Component Composition**: Build complex UIs from simple components
4. **Custom Hooks**: Extract component logic into reusable hooks
5. **Error Handling**: Implement proper error boundaries and handling
6. **Performance**: Use Next.js optimizations (Image, Link, etc.)

This structure provides a solid foundation for building scalable applications that can grow with your team and requirements.
