# The Perfect Slice

The Perfect Slice is a modern web application built for pizza enthusiasts. It’s a dynamic blog featuring delicious pizza recipes, tips and techniques on preparing perfect dough, and much more! The project includes several key features such as:

- **Blog Posts:** Read detailed posts about pizza recipes and techniques.
- **Interactive Calculator:** Use the pizza dough calculator to adjust ingredients based on your desired pizza size and number.
- **Comments Section:** Engage with other pizza lovers by adding and editing comments.
- **User Authentication:** Sign in with Google to interact with posts (like, comment, etc.).
- **Responsive Design:** Built with React, Tailwind CSS, and modern web practices.
- **State Management:** Uses Redux Toolkit for local state management.
- **Data Fetching:** Powered by TanStack Query and Sanity for content management.

## Features

- **Responsive Layout:** Designed to work seamlessly on mobile and desktop.
- **SEO & OG Tags:** Built with SEO in mind. Open Graph metadata is added via static `index.html` and enhanced dynamically.
- **Modern Routing:** Utilizes TanStack Router for file-based routing.
- **State & Data Management:** Redux Toolkit and TanStack Query keep your state fresh and data synchronized.
- **Built with Bun & Vite:** Fast build times and a modern development setup.
- **Interactive Components:** Custom icons, comments, image galleries, and more ensure a rich, interactive experience.

## Tech Stack

- **React 19**
- **Vite**
- **Bun**
- **TanStack Router**
- **TanStack Query**
- **Redux Toolkit**
- **Tailwind CSS**
- **Sanity.io**
- **Zod**
- **Vitest**

## Installation

1. **Clone the repository:**

2. **Install dependencies using Bun:**

   ```bash
   bun install
   ```

   If you prefer using npm or yarn, you can use them instead but make sure to update the scripts accordingly.

3. **Set up environment variables:**

   Create a `.env` file in the project root with:

   ```env
   VITE_SERVER_URL=http://your-server.com (e.g. http:localhost:5000)
   VITE_SANITY_PROJECT_ID=your_sanity_project_id
   NODE_ENV=development
   ```

## Development

To start the development server run:

```bash
bun run dev
```
