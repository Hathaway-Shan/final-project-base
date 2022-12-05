import React from 'react';
import { createRoot } from 'react-dom/client';
import './reset.css';
import './light-theme.css';
import './dark-theme.css';
import './global.css';
// import MainPage from './components/MainPage/MainPage.js';
import fooListFn from './components/foo-list';
import catListFn from './components/cat-list';
import jobListFn from './components/job-list';
import dashboardFn from './components/dashboard';
import Layout from './layout';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';

const FooList = fooListFn();
const CatList = catListFn();
const JobList = jobListFn();
const Dashboard = dashboardFn();
const container =
  document.getElementById('app') || document.createElement('div');
container.id = 'app';
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="foos" element={<FooList />} />
          <Route path="cats" element={<CatList />} />
          {/* <Route path="jobs" element={<JobList />} />  */}
          {/* <Route path="jobs" element={<MainPage />} /> */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
