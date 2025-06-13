This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env` and fill in the values for your setup. The main variables are:

- `DATABASE_URL` – PostgreSQL connection string
- `JWT_SECRET` – secret used to sign JWT tokens
- `ADMIN_EMAIL` / `ADMIN_PASSWORD` – credentials for the initial admin user
- `STRIPE_SECRET_KEY` – Stripe private key
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` – Cloudinary configuration
- `NEXT_PUBLIC_BASE_URL` – base URL of the app

### 3. Database setup

Run the Prisma migrations to create the schema and seed initial data:

```bash
npm run db:migrate   # runs `prisma migrate dev`
npm run db:seed      # optional: populate sample data
```

### 4. Cloudinary image migration

If you have local images that need to be uploaded to Cloudinary, run:

```bash
npm run cloudinary:migrate
```

You can verify the migration with `npm run cloudinary:validate`.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
