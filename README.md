# AI Avatar Dashboard

A modern, responsive dashboard for managing AI-generated avatars. Built with React, TypeScript, Vite, and Tailwind CSS.

[Live Demo](https://keen-frangollo-4ef0f7.netlify.app/)  
[GitHub Repository](https://github.com/avanishpal143/AI-AVATAR-PROFILE)

## Features

- Personalized welcome header with user greeting
- Card-based avatar gallery (view, edit, delete avatars)
- Floating "Create New Avatar" button with modal dialog
- Mobile-responsive design
- Data fetching from [DummyJSON API](https://dummyjson.com/)
- Smooth modal and form interactions
- Clean, modern UI with Tailwind CSS

## Screenshots

![AI Avatar Dashboard Screenshot](https://user-images.githubusercontent.com/your-screenshot.png) <!-- Replace with actual screenshot if available -->

## Technology Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

## Getting Started

Clone the repository:

```sh
git clone https://github.com/avanishpal143/AI-AVATAR-PROFILE.git
cd AI-AVATAR-PROFILE
```

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Project Structure

```
src/
  components/      # Reusable UI components
  hooks/           # Custom React hooks for data fetching and state
  services/        # API service functions
  types/           # TypeScript type definitions
  App.tsx          # Main application component
  main.tsx         # Entry point
  index.css        # Tailwind CSS imports
```

## API

This project uses the [DummyJSON API](https://dummyjson.com/) for user and avatar data. API requests are proxied via Vite's dev server for local development.

## Customization

- To change the number of avatars fetched, edit the `limit` parameter in [`fetchAvatars`](src/services/api.ts).
- To adjust the UI, modify components in [`src/components/`](src/components/).

## License

This project is for educational and demonstration purposes.

---

Made with ❤️ by [Avanish Pal](https://github.com/avanishpal143)
