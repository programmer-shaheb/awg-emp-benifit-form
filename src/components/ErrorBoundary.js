import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div className="flex flex-column items-center justify-center" style={{ height: '100vh', backgroundColor: '#250556', color: '#fff' }}>
        <img src="/logo.svg" />
        <h1>Something went wrong.</h1>
        <h1>Please try again from the <a href="/dashboard" style={{ color: '#fff' }}>home page</a></h1>
      </div>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
