Error boundaries are special React components that catch JavaScript errors in their child component tree during:

1. rendering
2. lifecycle methods
3. constructors

Instead of crashing the whole app, they let you show a fallback UI.

-----------------------------------------------------------------------------------

Without error boundaries:

1. A single JS error → entire React app crashes (white screen)

With error boundaries:

1. Error is caught
2. App continues running
3. User sees a friendly message instead of a crash

