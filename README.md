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
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/features/auth/hooks/useAuth';
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

## 📚 Bài Tập Thực Tập: Phân Tích Mock Data Dashboard

### Bối Cảnh

Bài tập này được thiết kế để giúp thực tập sinh làm quen với việc xử lý dữ liệu trong dự án React/Next.js, tập trung vào các thao tác mảng nâng cao (map, filter, reduce) và phát triển tính năng từ mock data đến UI hoàn chỉnh.

### Mục Tiêu Học Tập

- Hiểu và mở rộng mock data để mô phỏng các pattern hành vi người dùng khác nhau
- Phát triển hàm tổng hợp thống kê sử dụng thuần các phương thức mảng
- Viết unit test toàn diện với Vitest
- Hiển thị dữ liệu có định dạng trên giao diện dashboard

### Cấu Trúc Bài Tập

```
docs/
├─ mock-data-intern-exercise.md    # Mô tả chi tiết yêu cầu bài tập
└─ mock-data-intern-todo.md        # Danh sách checklist các bước thực hiện

src/features/user/
├─ data/
│   └─ mockStats.ts                # Mock data cho user sessions và conversion events
├─ services/
│   ├─ stats.service.ts            # Hàm tổng hợp thống kê dashboard
│   └─ __tests__/
│       └─ stats.service.test.ts   # Unit tests cho service
└─ types.ts                        # TypeScript interfaces cho user data

src/app/(dashboard)/
├─ components/
│   └─ MetricValue.tsx             # Component định dạng số liệu
└─ page.tsx                        # Dashboard page sử dụng mock data
```

### Các Bước Thực Hiện

#### 1. Chuẩn Bị Môi Trường

- Đọc `docs/mock-data-intern-exercise.md` để hiểu yêu cầu
- Chạy `npm run dev` để xem dashboard hiện tại
- Cài đặt dependencies nếu cần: `npm install`

#### 2. Mở Rộng Mock Data

- Thêm ít nhất 3 user sessions mới với pattern hành vi đa dạng
- Bổ sung conversion events cho các bước funnel khác nhau
- Đảm bảo tuân thủ type definitions trong `types.ts`

#### 3. Phát Triển Hàm Tổng Hợp

- Mở rộng `summarizeDashboardMetrics` để tính thêm thống kê mới
- Sử dụng chỉ `map`, `filter`, `reduce` (không thư viện ngoài)
- Thêm comment giải thích thuật toán

#### 4. Viết Unit Tests

- Cập nhật `stats.service.test.ts` với test cases toàn diện
- Bao phủ edge cases: dữ liệu trống, giá trị bất thường, dữ liệu lỗi
- Chạy `npm run test` để verify

#### 5. Cập Nhật UI

- Sử dụng `MetricValue` component để định dạng số liệu
- Hiển thị thống kê mới trên dashboard
- Đảm bảo responsive và accessible

### Công Cụ Và Thư Viện

- **Testing**: Vitest cho unit testing
- **Formatting**: Intl.NumberFormat cho currency/percentage
- **Type Safety**: TypeScript interfaces đầy đủ
- **Mock Data**: Dữ liệu giả lập cho development

### Đánh Giá Và Báo Cáo

- Screenshot dashboard sau khi hoàn thành
- Mô tả strategy mở rộng mock data
- Danh sách test cases đã implement
- Nhận xét cá nhân về khó khăn và học hỏi

### Lưu Ý Quan Trọng

- Tuân thủ feature-based architecture
- Viết code sạch, có comment rõ ràng
- Test coverage tối thiểu 80%
- Sử dụng TypeScript strict mode
- Follow existing code style và conventions

Chúc bạn hoàn thành bài tập thành công và nắm vững các kỹ năng xử lý dữ liệu trong React/Next.js!
