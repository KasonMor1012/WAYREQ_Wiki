'use client';

import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <main className="homepage-container">
      <div className="content-wrapper">
        <h1 className="page-title">Welcome to My Book Wiki</h1>
        <div className="grid-layout">
          <section className="section-card">
            <h2 className="section-title">Recent Additions</h2>
            {/* Article list will go here */}
          </section>
          
          <section className="section-card">
            <h2 className="section-title">Categories</h2>
            {/* Categories will go here */}
          </section>
        </div>
      </div>
    </main>
  );
};

export default HomePage;