import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/ui/Header';
import SideBar from './components/ui/SideBar';
import Home from './pages/Home';
import CodeReview from './pages/CodeReview';
import Profile from './pages/Profile';
import Footer from './components/ui/Footer';

import useDeviceType from './hooks/useDeviceType';

function App() {
  const deviceType = useDeviceType();

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex flex-auto">
          {deviceType === 'Web' && <SideBar />}
          <section className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/code-review" element={<CodeReview />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Routes>
          </section>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
