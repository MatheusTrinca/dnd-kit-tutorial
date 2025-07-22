# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (opens at http://localhost:3000)
- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Project Architecture

This is a Next.js 15 tutorial project demonstrating @dnd-kit drag-and-drop functionality with three progressive examples:

### Feature Structure
The project is organized around three main drag-and-drop implementations in `src/features/`:

1. **Basic DnD** (`basic-dnd/`): Simple drag-and-drop with visual feedback
2. **Sortable List** (`sortable-list/`): Reorderable list items using @dnd-kit/sortable
3. **Kanban Board** (`kanban-board/`): Multi-column task management with cross-column dragging

### Key Architectural Patterns

- **Feature-based organization**: Each DnD example is self-contained in `src/features/`
- **Type definitions**: Shared types defined in `*.types.ts` files (e.g., `kanban-board.types.ts`)
- **Generic data structures**: Uses generic `Item<T>`, `Column<T,E>`, and `Data<T,E>` types for flexible kanban implementations
- **Component composition**: UI components built with shadcn/ui in `src/components/ui/`

### Navigation Structure
The app uses Next.js App Router with dedicated routes:
- `/` - Home page
- `/dnd-kit-basic` - Basic drag-and-drop demo
- `/dnd-kit-sortable` - Sortable list demo  
- `/dnd-kit-kanban` - Kanban board demo

### Styling & UI
- **Tailwind CSS** with CSS variables and dark mode enabled by default
- **shadcn/ui components** configured with "new-york" style
- **Lucide React icons**
- **Geist fonts** (sans and mono) from Next.js

### Key Dependencies
- **@dnd-kit/core**: Core drag-and-drop functionality
- **@dnd-kit/sortable**: Sortable list capabilities
- **@dnd-kit/modifiers**: DnD behavior modifiers
- **@dnd-kit/utilities**: Helper utilities

### Path Aliases
- `@/*` maps to `src/*`
- Components accessible via `@/components`
- Utils accessible via `@/lib/utils`