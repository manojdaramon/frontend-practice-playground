1. General React Debugging Tips
React Developer Tools

Install the React Developer Tools browser extension.

Used to inspect:

Component tree

Props and state

Context

Hooks and their values

Essential for understanding component behavior.

React StrictMode and Duplicate Logs

In development, React StrictMode intentionally renders components twice.

This can cause:

Duplicate console logs

Effects running twice

This is expected behavior and helps detect side effects early.

Use log filtering or conditional logging if needed.

Debugging with VS Code and Browser

Prefer VS Code debugging over console logging.

Attach the VS Code debugger to Chrome or Edge.

Benefits:

Set breakpoints

Inspect variables in real time

Step through code execution

Hit Count Breakpoints

Useful when StrictMode triggers multiple renders.

Configure breakpoints to pause only after a specific hit count.

Prevents unnecessary pauses during development.

-------------------------------------------------------------------------------------

2. Debugging Next.js Applications
Why Next.js Debugging Is Different

Next.js runs code in two environments:

Server-side (Node.js)

Client-side (Browser)

Both require separate debugging setups.

Next.js Debugger Setup

Requires launch.json configuration in VS Code.

Typically includes:

Node debugger for server-side code

Browser debugger for client-side code

Refer to official Next.js documentation for the latest configuration.

Enables debugging of:

Server-side rendering

API routes

Client-side interactions

-------------------------------------------------------------------------------------

3. React Developer Tools – Components Tab
Inspecting Components

View and inspect:

Props

State

Context

Hooks and hook values

Hooks are shown in execution order.

Pseudo-Naming Hooks

Custom hooks can appear unnamed by default.

React DevTools can auto-label hooks for better readability.

Navigating the Component Tree

Expand and inspect child components.

Helps identify unnecessary re-renders or incorrect component structure.

Select Element to Find Component

Use the element selector tool.

Click any DOM element to locate its corresponding React component.

Logging Components to Console

Right-click a component and log it to the console.

Useful for quick inspection without modifying code.

Viewing Source Code

Jump directly from DevTools to the component’s source file.

Requires source maps to be enabled.

Testing Edge Cases

Force Suspense fallback states.

Trigger Error Boundary states.

Useful for testing loading and error UI without code changes.

Components Tab Settings

Hide specific components (providers, HOCs).

Keeps the component tree clean and focused.

-------------------------------------------------------------------------------------

4. React Developer Tools – Profiler Tab
Purpose of the Profiler

Analyze rendering performance.

Identify slow components and unnecessary re-renders.

Recording a Profiling Session

Start recording.

Interact with the application.

Stop recording to review performance data.

Flame Chart

Visual representation of component render times.

Wider bars indicate longer render durations.

Helps identify expensive renders.

Ranked Graph

Displays components ranked by render cost.

Quickly highlights performance bottlenecks.

Commit Information

Each commit shows:

What triggered the render

Which components rendered

Total render time

Profiler Settings

Record why each component rendered:

Props change

State change

Parent re-render

Hide commits below a certain duration.

Throttle CPU to simulate slower devices.

Profile the initial application render.

-------------------------------------------------------------------------------------

5. Debugging Mindset

Prefer debuggers over console logs.

Use React Developer Tools regularly.

Always ask:

Why did this component render?

What changed?

Measure performance before optimizing.