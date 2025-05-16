
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { queuePersonalization } from './mocks/handlers';

// Register mock API handlers in development mode
if (import.meta.env.DEV) {
  // Mock API endpoint
  const mockEndpoints = {
    '/api/queue-personalization': queuePersonalization
  };

  // Simple mock server
  window.addEventListener('fetch', (event: Event) => {
    const fetchEvent = event as unknown as FetchEvent;
    const url = new URL(fetchEvent.request.url);
    
    if (mockEndpoints[url.pathname]) {
      fetchEvent.respondWith(mockEndpoints[url.pathname](fetchEvent.request));
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);
