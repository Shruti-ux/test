import React, { useState } from "react";
import "./main.css";

function Main() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const data = [
    {
      executionRunDate: "22 Jul 2022",
      executionId: "EX_1234",
      dqScore: "88%",
      country: "Great Britain",
      source: "EPOS",
      executionStatus: "✓ Completed",
      auditStatus: "Pending",
    },
    {
      executionRunDate: "22 Jul 2022",
      executionId: "EX_1234",
      dqScore: "88%",
      country: "Great Britain",
      source: "EPOS",
      executionStatus: "✓ Completed",
      auditStatus: "Pending",
    },
    {
      executionRunDate: "22 Jul 2022",
      executionId: "EX_1234",
      dqScore: "88%",
      country: "Great Britain",
      source: "Retail Sales",
      executionStatus: "X Failed",
      auditStatus: "NA",
    },
    {
      executionRunDate: "22 Jul 2022",
      executionId: "EX_1234",
      dqScore: "88%",
      country: "Great Britain",
      source: "EPOS",
      executionStatus: "✓ Completed",
      auditStatus: "Pending",
    },
    {
      executionRunDate: "22 Jul 2022",
      executionId: "EX_1234",
      dqScore: "88%",
      country: "Great Britain",
      source: "Sell Through Data",
      executionStatus: "Completed",
      auditStatus: "Pending",
    },
    {
      executionRunDate: "22 Jul 2022",
      executionId: "EX_1234",
      dqScore: "88%",
      country: "Great Britain",
      source: "Retail Sales",
      executionStatus: "✓ Completed",
      auditStatus: "Pending",
    },
    {
      executionRunDate: "22 Jul 2022",
      executionId: "EX_1234",
      dqScore: "88%",
      country: "Great Britain",
      source: "EPOS",
      executionStatus: "Completed",
      auditStatus: "Pending",
    },
    {
      executionRunDate: "22 Jul 2022",
      executionId: "EX_1234",
      dqScore: "88%",
      country: "Great Britain",
      source: "Sell Through DataOS",
      executionStatus: "✓ Completed",
      auditStatus: "Pending",
    },
  ];

  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="container">
      <div className="sidebar">
        <ul>
          <li>
            <i className="fas fa-chart-bar"></i>
            <span>Dashboard</span>
          </li>
          <li>
            <i className="fas fa-tasks"></i>
            <span>DQ Analysis</span>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Sancus</h1>
          <div className="header-right">
            <i className="fas fa-bell"></i>
            <span className="notification-count">1</span>
            <i className="fas fa-chart-line"></i>
            <span className="notification-count">1</span>
            <span className="as-logo">AS</span>
            <span className="refresh-date">Refreshed on: Aug 28th 2022</span>
            <i className="fas fa-calendar-alt"></i>
          </div>
        </div>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="data-quality-report">
          <h2>Data Quality Report Analysis</h2>
          <div className="filter-bar">
            <div className="filter">
              <label htmlFor="view-by">View by:</label>
              <select id="view-by">
                <option value="Great Britain">Great Britain</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="source">Source:</label>
              <select id="source">
                <option value="All">All</option>
                <option value="EPOS">EPOS</option>
                <option value="Retail Sales">Retail Sales</option>
                <option value="Sell Through Data">Sell Through Data</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="execution-status">Execution Status:</label>
              <select id="execution-status">
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="audit-status">Audit Status:</label>
              <select id="audit-status">
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="NA">NA</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="date">Aug 2022:</label>
              <input type="date" id="date" />
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Execution Run Date</th>
                  <th>Execution ID</th>
                  <th>DQ Score</th>
                  <th>Country</th>
                  <th>Source</th>
                  <th>Execution Status</th>
                  <th>Audit Status</th>
                  <th>Run Summary</th>
                  <th>Data Load Exception</th>
                  <th>Sancus Output</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.executionRunDate}</td>
                    <td>{item.executionId}</td>
                    <td>{item.dqScore}</td>
                    <td>{item.country}</td>
                    <td>{item.source}</td>
                    <td>{item.executionStatus}</td>
                    <td>{item.auditStatus}</td>
                    <td>
                      <button>View Summary</button>
                    </td>
                    <td>
                      <button>View Exceptions</button>
                    </td>
                    <td>
                      <button>View Results</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <span>Showing 1 - 6 of 100 items</span>
            <div className="pagination-buttons">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                <i className="fas fa-angle-double-left"></i>
              </button>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <i className="fas fa-angle-left"></i>
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <i className="fas fa-angle-right"></i>
              </button>
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                <i className="fas fa-angle-double-right"></i>
              </button>
            </div>
            <span>
              <label htmlFor="go-to-page">Go to page:</label>
              <input type="number" id="go-to-page" min="1" max={totalPages} />
              <button onClick={() => handlePageChange(currentPage)}>Go</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
