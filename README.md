# Online Learning Platform

> A clean, responsive online learning platform built with React — course browsing, details, authentication, and admin features. This README is tailored to the project deployed at: [https://online-learning-platform-1.netlify.app/](https://online-learning-platform-1.netlify.app/)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure (suggested)](#folder-structure-suggested)
- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Firebase (optional) setup](#firebase-optional-setup)
- [Running Locally](#running-locally)
- [Build & Deploy (Netlify)](#build--deploy-netlify)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview

A modern, responsive online learning platform UI built with React. Users can browse courses, view course details, enroll or purchase (placeholder flows), and admins/instructors can create or manage courses (depending on backend integration).

This README assumes a typical React + Firebase backend pattern, but is intentionally generic so you can adapt it to your exact stack.

## Live Demo

🔗 **Live:** [https://online-learning-platform-1.netlify.app/](https://online-learning-platform-1.netlify.app/)

## Screenshots

> Add screenshots to the `./assets/screenshots/` folder and link them here.

## Features

- Course listing with filters & categories
- Course detail page with syllabus and instructor info
- Authentication (sign up / login) using Firebase Auth (recommended)
- Admin / Instructor dashboard (create, edit, delete courses)
- Responsive design (mobile-first)
- Loading & error handling UI


## Folder Structure (suggested)

```
/src
  /components    # Navbar, Footer, Cards, Loader, etc.
  /pages         # Home, Courses, CourseDetail, Login, Dashboard
  /hooks         # custom hooks (eg. useCourses)
  /assets        # images, icons
  /contexts      # AuthContext
  /utils         # helper functions
  App.jsx
  main.jsx
```

## Requirements

- Node.js v16+ (recommended)
- npm or yarn

## Installation

1. Clone the repo

```bash
git clone <..........-repo-url>
cd ......-repo-folder
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

## Environment Variables

Create a `.env.local` (or `.env`) file in the project root and add values used by your app. Example variables for Firebase:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=sender_id
VITE_FIREBASE_APP_ID=app_id
REACT_APP_API_URL=https://your-api.example.com  # if using external API
```

> Note: If you use Create React App the prefix is `REACT_APP_`; for Vite use `VITE_`.

## Firebase (optional) setup

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Enable **Authentication** (Email/Password, Google, etc.)
3. Create a Firestore database (or Realtime DB) for courses/enrollments.
4. Copy the Firebase config and put it into your `.env` file as shown above.
5. Initialize Firebase in your project (example `src/firebase.js`):

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

## Running Locally

Start the development server:

```bash
npm run dev      # Vite
# or
npm start        # Create React App
```

Open [http://localhost:4000](http://localhost:4000) or [http://localhost:5173](http://localhost:5173) depending on your setup.

## Build & Deploy (Netlify)

1. Build the project

```bash
npm run build
```

2. Drag the `dist` (Vite) or `build` (CRA) folder into Netlify, or connect your GitHub repo to Netlify and set the build command:

- Build command: `npm run build`
- Publish directory: `dist` (Vite) or `build` (CRA)

3. If using environment variables, add them in Netlify dashboard under **Site settings > Build & deploy > Environment > Environment variables**

## Testing

- Add unit/integration tests using Jest + React Testing Library.
- Example command:

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is open source — add your preferred license (MIT, Apache-2.0, etc.).

## Contact

Created by A H Arman Hussain.

---
