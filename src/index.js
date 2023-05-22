import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Map from './pages/Map';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'map',
    element: <Map />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);
