import { useState, useEffect } from "react";
import { FiEdit, FiTrash2, FiPrinter, FiLogOut } from "react-icons/fi";
import EmployeeForm from "../components/EmployeeForm";
import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import Employees from "../data/employees";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(() => {
    const stored = localStorage.getItem("employees");
    return stored ? JSON.parse(stored) : Employees;
  });

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesName = emp.name.toLowerCase().includes(search.toLowerCase());
    const matchesGender = genderFilter ? emp.gender === genderFilter : true;
    const matchesStatus =
      statusFilter === ""
        ? true
        : statusFilter === "active"
        ? emp.active
        : !emp.active;

    return matchesName && matchesGender && matchesStatus;
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleSave = (employee) => {
    if (editingEmployee) {
      setEmployees((prev) =>
        prev.map((e) =>
          e.id === editingEmployee.id ? { ...employee, id: e.id } : e
        )
      );
    } else {
      const nextId =
        employees.length > 0 ? Math.max(...employees.map((e) => e.id)) + 1 : 1;
      setEmployees((prev) => [...prev, { ...employee, id: nextId }]);
    }
    setShowForm(false);
    setEditingEmployee(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setEmployees((prev) =>
      prev.map((e) => (e.id === id ? { ...e, active: !e.active } : e))
    );
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="header">
        <h2>Employee Management Dashboard</h2>
        <button className="logout-btn" onClick={handleLogout}>
          <FiLogOut /> Logout
        </button>
      </div>

      {/* Summary */}
      <div className="summary">
        <div>Total Employees: {employees.length}</div>
        <div>
          Active: {employees.filter((e) => e.active).length} | Inactive:{" "}
          {employees.filter((e) => !e.active).length}
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setGenderFilter(e.target.value)}>
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <button className="print-btn" onClick={() => window.print()}>
          <FiPrinter /> Print
        </button>

        <button
          className="add-btn"
          onClick={() => {
            setEditingEmployee(null);
            setShowForm(true);
          }}
        >
          + Add Employee
        </button>
      </div>

      {/* Table */}
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>State</th>
              <th>Status</th>
              <th className="actions-header"></th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.length === 0 ? (
              <tr>
                <td colSpan="7" className="empty">
                  No employees found
                </td>
              </tr>
            ) : (
              filteredEmployees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>
                    {emp.image ? (
                      <img src={emp.image} alt={emp.name} className="avatar" />
                    ) : (
                      <div className="avatar placeholder">
                        {emp.name.charAt(0)}
                      </div>
                    )}
                  </td>

                  <td>{emp.name}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.dob}</td>
                  <td>{emp.state}</td>

                  <td className="status-cell">
                    {/* UI Toggle */}
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={emp.active}
                        onChange={() => toggleStatus(emp.id)}
                      />
                      <span className="slider"></span>
                    </label>

                    {/* Print-only text */}
                    <span className="status-text">
                      {emp.active ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="actions">
                    <button
                      className="icon-btn edit"
                      onClick={() => {
                        setEditingEmployee(emp);
                        setShowForm(true);
                      }}
                    >
                      <FiEdit />
                    </button>
                    <button
                      className="icon-btn delete"
                      onClick={() => handleDelete(emp.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showForm && (
        <EmployeeForm
          onSave={handleSave}
          editingEmployee={editingEmployee}
          onClose={() => {
            setShowForm(false);
            setEditingEmployee(null);
          }}
        />
      )}
    </div>
  );
}

export default Dashboard;
