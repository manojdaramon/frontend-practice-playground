import React from "react";

// ErrorBoundary is a special React class component
// used to catch JavaScript errors in child components
class ErrorBoundary extends React.Component {

    // Constructor runs when the component is created
    constructor(props) {
        super(props);

        // Local state to track if an error has occurred
        this.state = {
            hasError: false
        };
    }

    // This lifecycle method runs when a child component throws an error
    // It allows us to update state BEFORE the next render
    // React uses this to decide what UI to show
    static getDerivedStateFromError(error) {
        // We don't need the error here, just update the state
        return {
            hasError: true
        };
    }

    // This lifecycle method is called AFTER an error is caught
    // Best place to log errors to monitoring tools (Sentry, LogRocket, etc.)
    componentDidCatch(error, info) {
        console.error("Error caught by ErrorBoundary:", error, info);
    }

    // Render method decides what UI should be shown
    render() {

        // If an error occurred in any child component
        if (this.state.hasError) {
            // Show fallback UI instead of crashing the whole app
            return <h2>Something went wrong.</h2>;
        }

        // If no error, render child components normally
        return this.props.children;
    }
}

// Export so it can be used to wrap other components
export default ErrorBoundary;
