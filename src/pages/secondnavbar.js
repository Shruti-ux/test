import React, { useState } from "react";

function Sidebar2() {
  const [isInvoicesExpanded, setIsInvoicesExpanded] = useState(false);
  const [isAcademyExpanded, setIsAcademyExpanded] = useState(false);

  const toggleInvoices = () => {
    setIsInvoicesExpanded(!isInvoicesExpanded);
  };

  const toggleAcademy = () => {
    setIsAcademyExpanded(!isAcademyExpanded);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Devias Logo" />
        <h2>Devias</h2>
        <p>Production</p>
      </div>

      <ul className="sidebar-list">
        <li>
          <a href="#">
            <i className="fas fa-home"></i>
            Overview
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-chart-bar"></i>
            Analytics
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-shopping-cart"></i>
            E-Commerce
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-bitcoin"></i>
            Crypto
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-user-circle"></i>
            Account
          </a>
        </li>

        <li className="sidebar-header">
          <h3>CONCEPTS</h3>
        </li>

        <li>
          <a href="#">
            <i className="fas fa-users"></i>
            Customers
            <i className="fas fa-chevron-right"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fas fa-box"></i>
            Products
            <i className="fas fa-chevron-right"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fas fa-shopping-basket"></i>
            Orders
            <i className="fas fa-chevron-right"></i>
          </a>
        </li>

        <li onClick={toggleInvoices}>
          <a href="#">
            <i className="fas fa-file-invoice"></i>
            Invoices
            <i
              className={`fas fa-chevron-down ${
                isInvoicesExpanded ? "rotate-180" : ""
              }`}
            ></i>
          </a>
          <ul className={`sub-list ${isInvoicesExpanded ? "show" : ""}`}>
            <li>
              <a href="#">
                <span className="dot"></span>
                List
              </a>
            </li>
            <li>
              <a href="#">Details</a>
            </li>
          </ul>
        </li>

        <li onClick={toggleAcademy}>
          <a href="#">
            <i className="fas fa-graduation-cap"></i>
            Academy
            <i
              className={`fas fa-chevron-down ${
                isAcademyExpanded ? "rotate-180" : ""
              }`}
            ></i>
          </a>
          <ul className={`sub-list ${isAcademyExpanded ? "show" : ""}`}>
            <li>
              <a href="#">
                <i className="fas fa-truck"></i>
                Logistics
                <i className="fas fa-chevron-right"></i>
              </a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Fleet</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Course</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">
            <i className="fas fa-file-alt"></i>
            Job Listings
            <i className="fas fa-chevron-right"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fas fa-share-alt"></i>
            Social Media
            <i className="fas fa-chevron-right"></i>
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fas fa-book"></i>
            Blog
            <i className="fas fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar2;
