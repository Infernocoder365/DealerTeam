import React from 'react';
import './DashboardSection.css';

const DashboardSection = () => {
  return (
    <section className="dashboard-section">
      <h2>Dashboard Overview</h2>
      <div className="dashboard-grid">
        <div className="dashboard-item">
          <img src="/images/1.png" alt="Dashboard Overview" />
          <div className="overlay">
            <div className="overlay-content">
              <h3>Main Dashboard</h3>
              <p>Complete overview of sales inventory and deals</p>
            </div>
          </div>
        </div>
        
        <div className="dashboard-item hover-effect">
          <img src="/images/2.png" alt="Sales Analytics" />
          <div className="overlay">
            <div className="overlay-content">
              <h3>Sales Analytics</h3>
              <p>Detailed breakdown of sales performance</p>
            </div>
          </div>
        </div>
        
        <div className="dashboard-item">
          <img src="/images/3.png" alt="Inventory Management" />
          <div className="overlay">
            <div className="overlay-content">
              <h3>Inventory Management</h3>
              <p>Track and manage vehicle inventory</p>
            </div>
          </div>
        </div>
        
        <div className="dashboard-item">
          <img src="/images/4.png" alt="Deal Tracking" />
          <div className="overlay">
            <div className="overlay-content">
              <h3>Deal Tracking</h3>
              <p>Monitor ongoing and completed deals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;