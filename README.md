# Task Manager

A simple task manager built with React and TypeScript.
Uses React, Vite, TypeScript and Tailwind.

Simply run:

```bash
npm install
npm run dev
```

Then open:
http://localhost:5173/

#### Composition

State management logic is in `./src/store.ts` and this is provided to all components via the Context API. This would need extending to syncronise with server/db state.

Individual task data is displayed in `TaskListItem.tsx` and these are contained in `TaskList.tsx`.

Adding or editing a task launches a modal `Modal.tsx`, which contains a form for entering or updating task details. The modal also has a Context Provider so that the task components can both communicate with it in the app root.
