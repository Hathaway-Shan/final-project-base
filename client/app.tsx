import React from 'react';
import { createRoot } from 'react-dom/client';
// import './reset.css';
import './light-theme.css';
import './dark-theme.css';
import './global.css';
import catListFn from './components/cat-list';
import Layout from './layout';
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
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<JobList />} />

        <Route path="cats" element={<CatList />} />
        {/* <Route path="jobs" element={<JobList />} /> */}
      </Route>
    </Routes>
  </Router>
  // </React.StrictMode>
);
