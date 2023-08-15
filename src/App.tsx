import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/ui/Header';
import Home from './pages/Home';
import CodeReview from './pages/CodeReview';
import Profile from './pages/Profile';
import Login from './pages/Login';
import CodeReviewDetail from './pages/CodeReviewDetail';
import '@toast-ui/editor/dist/toastui-editor.css';

import useDeviceType from './hooks/useDeviceType';

function App() {
  const deviceType = useDeviceType();

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex flex-auto scrollbar-hide max-sm:overflow-scroll">
          <section className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/code-review" element={<CodeReview />} />
              <Route path="/code-review/:id" element={<CodeReviewDetail />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </section>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
