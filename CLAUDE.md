# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Environment Setup
```bash
npm install                    # Install dependencies
npm run db:generate           # Generate Prisma client
npm run db:push              # Push schema to database (dev)
npm run db:migrate           # Run database migrations
npm run db:seed              # Seed database with initial data
npm run db:studio            # Open Prisma Studio (database GUI)
```

### Development & Build
```bash
npm run dev                  # Start development server with Turbopack
npm run build               # Build production application (includes Prisma generate)
npm run start               # Start production server
npm run lint                # Run ESLint
```

### Image Migration
```bash
npm run cloudinary:migrate   # Migrate local images to Cloudinary
npm run cloudinary:validate  # Validate Cloudinary migration
```

## Architecture Overview

### Stack
- **Framework**: Next.js 15 with App Router
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS 4
- **Authentication**: JWT with bcrypt
- **Image Management**: Cloudinary
- **Payment Processing**: Stripe
- **State Management**: Zustand (for cart), React Context (for UI state)
- **Rich Text Editing**: TipTap
- **TypeScript**: Full type safety throughout

### Project Structure

#### Core Application
- `src/app/` - Next.js App Router pages and API routes
- `src/components/` - Reusable React components organized by feature
- `src/contexts/` - React Context providers for global state
- `src/lib/` - Utility functions, database client, and external integrations
- `src/types/` - TypeScript type definitions

#### Database & External Services
- `prisma/` - Database schema, migrations, and seed scripts
- `public/images/` - Static image assets (being migrated to Cloudinary)

### Key Features

#### Multi-language Support
- Comprehensive internationalization with Spanish (default) and English
- Translation context in `src/contexts/LanguageContext.tsx`
- Extensive translation keys covering all UI elements

#### Admin System
- Protected admin routes under `/admin`
- JWT-based authentication
- CRUD operations for blogs, products, and banners
- Rich text editor for blog content

#### E-commerce Integration
- Product catalog with Stripe payment processing
- Shopping cart with Zustand state management
- Checkout flow with payment intent creation

#### Content Management
- Blog system with slug-based routing
- Banner management for homepage carousel
- Image upload and management

### Database Models
- **User**: Admin users with JWT authentication
- **Post**: Blog posts with rich content and SEO-friendly slugs
- **Product**: E-commerce products with pricing and inventory
- **Banner**: Homepage carousel banners with ordering
- **SiteConfig**: General site configuration key-value pairs

### API Routes Structure
- `api/auth/` - Authentication endpoints (login, logout, verify)
- `api/blog/` - Blog CRUD operations
- `api/products/` - Product management
- `api/banners/` - Banner management
- `api/upload/` - Image upload to Cloudinary
- `api/create_payment_intent/` - Stripe payment processing

### Environment Variables Required
```
DATABASE_URL=postgresql://...
JWT_SECRET=your-jwt-secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure-password
STRIPE_SECRET_KEY=sk_...
CLOUDINARY_CLOUD_NAME=your-cloud
CLOUDINARY_API_KEY=your-key
CLOUDINARY_API_SECRET=your-secret
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Development Guidelines

### Database Operations
- Always run `npm run db:generate` after schema changes
- Use `npm run db:push` for development, `npm run db:migrate` for production
- Seed data available with `npm run db:seed`

### Authentication
- Admin routes protected by JWT middleware
- Token verification in `src/lib/auth.ts`
- Session management via HTTP-only cookies

### Image Management
- Transitioning from local storage to Cloudinary
- Upload API at `api/upload/route.ts`
- Migration scripts available for existing images

### Code Organization
- Components organized by feature area (admin, layout, sections, ui, shop)
- Shared utilities in `src/lib/`
- Type-safe API routes with proper error handling
- Consistent naming conventions following Next.js patterns

### Styling
- Tailwind CSS 4 with custom configuration
- Typography plugin for rich text content
- Responsive design with mobile-first approach
- Custom fonts: Inter (body text) and Playfair Display (headings)

## Testing & Quality
- ESLint configured with Next.js rules
- TypeScript strict mode enabled
- Prisma type generation ensures database type safety