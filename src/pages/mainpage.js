import React, { useState } from "react";

const Mainpage = () => {
  const [filterInvoiceNumber, setFilterInvoiceNumber] = useState("");
  const [filterIssueDate, setFilterIssueDate] = useState(null);
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");
  const [filterCustomer, setFilterCustomer] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const invoices = [
    {
      id: "INV-0019",
      customer: "ACME SRL",
      amount: 55.5,
      issued: "01/02/2024",
      due: "06/02/2024",
      status: "paid",
    },
    {
      id: "INV-0018",
      customer: "Blind Spots Inc.",
      amount: 688.9,
      issued: "01/02/2024",
      due: "07/02/2024",
      status: "paid",
    },
    {
      id: "INV-0017",
      customer: "Beauty Clinic SRL",
      amount: 695.2,
      issued: "01/02/2024",
      due: "10/02/2024",
      status: "paid",
    },
    {
      id: "INV-0021",
      customer: "Matt Jason",
      amount: 23.11,
      issued: "30/01/2024",
      due: "26/02/2024",
      status: "pending",
    },
    {
      id: "INV-0020",
      customer: "Matt Jason",
      amount: 253.76,
      issued: "30/01/2024",
      due: "18/02/2024",
      status: "pending",
    },
  ];

  const filteredInvoices = invoices.filter((invoice) => {
    if (filterInvoiceNumber && !invoice.id.includes(filterInvoiceNumber)) {
      return false;
    }
    if (filterIssueDate && invoice.issued !== filterIssueDate) {
      return false;
    }
    if (filterFrom && !invoice.customer.includes(filterFrom)) {
      return false;
    }
    if (filterTo && !invoice.customer.includes(filterTo)) {
      return false;
    }
    if (filterCustomer && invoice.customer !== filterCustomer) {
      return false;
    }
    if (filterStatus === "paid" && invoice.status !== "paid") {
      return false;
    }
    if (filterStatus === "pending" && invoice.status !== "pending") {
      return false;
    }
    return true;
  });

  const totalAmount = filteredInvoices.reduce((sum, invoice) => {
    return sum + invoice.amount;
  }, 0);

  const paidAmount = filteredInvoices
    .filter((invoice) => invoice.status === "paid")
    .reduce((sum, invoice) => {
      return sum + invoice.amount;
    }, 0);

  const pendingAmount = filteredInvoices
    .filter((invoice) => invoice.status === "pending")
    .reduce((sum, invoice) => {
      return sum + invoice.amount;
    }, 0);

  const handleFilterInvoiceNumberChange = (e) => {
    setFilterInvoiceNumber(e.target.value);
  };

  const handleFilterIssueDateChange = (e) => {
    setFilterIssueDate(e.target.value);
  };

  const handleFilterFromChange = (e) => {
    setFilterFrom(e.target.value);
  };

  const handleFilterToChange = (e) => {
    setFilterTo(e.target.value);
  };

  const handleFilterCustomerChange = (e) => {
    setFilterCustomer(e.target.value);
  };

  const handleFilterStatusChange = (e) => {
    setFilterStatus(e.target.value);
  };

  return (
    <div>
      <h1>Invoices</h1>
      <div className="filters">
        <h2>Filters</h2>
        <div>
          <label htmlFor="invoice-number">Invoice number:</label>
          <input
            type="text"
            id="invoice-number"
            value={filterInvoiceNumber}
            onChange={handleFilterInvoiceNumberChange}
          />
        </div>
        <div>
          <label htmlFor="issue-date">Issue date:</label>
          <input
            type="date"
            id="issue-date"
            value={filterIssueDate}
            onChange={handleFilterIssueDateChange}
          />
        </div>
        <div>
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            value={filterFrom}
            onChange={handleFilterFromChange}
          />
        </div>
        <div>
          <label htmlFor="to">To:</label>
          <input
            type="text"
            id="to"
            value={filterTo}
            onChange={handleFilterToChange}
          />
        </div>
        <div>
          <label htmlFor="customer">From customer:</label>
          <input
            type="text"
            id="customer"
            value={filterCustomer}
            onChange={handleFilterCustomerChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            value={filterStatus}
            onChange={handleFilterStatusChange}
          >
            <option value="all">All</option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>
      <div className="invoice-summary">
        <div>
          <h2>Total</h2>
          <p>${totalAmount.toFixed(2)}</p>
          <p>from {filteredInvoices.length} invoices</p>
        </div>
        <div>
          <h2>Paid</h2>
          <p>${paidAmount.toFixed(2)}</p>
          <p>
            from{" "}
            {
              filteredInvoices.filter((invoice) => invoice.status === "paid")
                .length
            }{" "}
            invoices
          </p>
        </div>
        <div>
          <h2>Pending</h2>
          <p>${pendingAmount.toFixed(2)}</p>
          <p>
            from{" "}
            {
              filteredInvoices.filter((invoice) => invoice.status === "pending")
                .length
            }{" "}
            invoices
          </p>
        </div>
      </div>
      <div className="invoices">
        {filteredInvoices.map((invoice) => (
          <div key={invoice.id} className="invoice">
            <div className="invoice-header">
              <h3>{invoice.id}</h3>
              <p>{invoice.customer}</p>
            </div>
            <div className="invoice-details">
              <p>Amount: ${invoice.amount.toFixed(2)}</p>
              <p>Issued: {invoice.issued}</p>
              <p>Due: {invoice.due}</p>
            </div>
            <div className="invoice-status">
              {invoice.status === "paid" ? (
                <p className="paid">PAID</p>
              ) : (
                <p className="pending">PENDING</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainpage;
