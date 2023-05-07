import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './components/ui/Header';
import SideBar from './components/ui/SideBar';
import Home from './pages/Home';
import CodeReview from './pages/CodeReview';
import Mentoring from './pages/Mentoring';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="flex">
          <SideBar />
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mentoring" element={<Mentoring />} />
              <Route path="/code-review" element={<CodeReview />} />
            </Routes>
          </section>
        </div>
        <footer></footer>
      </BrowserRouter>
    </>
  );
}

export default App;
