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

const CatList = catListFn();
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
          <Route index element={<JobList />} />

          <Route path="cats" element={<CatList />} />
        </Route>
      </Routes>
    </JobProvider>
  </Router>
  // </React.StrictMode>
);
