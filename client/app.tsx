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

const container =
  document.getElementById('app') || document.createElement('div');
container.id = 'app';
const root = createRoot(container);
root.render(
  // <React.StrictMode>
  <Router>
    <JobProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<JobList />} />
          <Route path="/auth/:type" element={<AuthPage />} />
        </Route>
      </Routes>
    </JobProvider>
  </Router>
  // </React.StrictMode>
);
