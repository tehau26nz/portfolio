import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import EducationScreen from './screens/EducationScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import HobbiesScreen from './screens/HobbiesScreen';
import HomeScreen from './screens/HomeScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/experience" element={<ExperienceScreen />} />
      <Route path="/education" element={<EducationScreen />} />
      <Route path="/hobbies" element={<HobbiesScreen />} />
    </Route >
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

