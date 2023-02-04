import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './light-theme.css';
import './dark-theme.css';
import './global.css';
import { JobProvider } from './context/JobContext';
import Layout from './components/Layout/layout';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import JobList from './components/JobList/JobList';
import AuthPage from './components/AuthPage/AuthPage';
import { UserProvider } from './context/userContext';
import About from './components/About/About';

const container =
  document.getElementById('app') || document.createElement('div');
container.id = 'app';
const root = createRoot(container);
root.render(
  // <React.StrictMode>
  <Router>
    <UserProvider>
      <JobProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<JobList />} />
            <Route path="/about" element={<About />} />
            <Route path="/auth/:type" element={<AuthPage />} />
          </Route>
        </Routes>
      </JobProvider>
    </UserProvider>
  </Router>
  // </React.StrictMode>
);
