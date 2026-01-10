import { useNavigate } from "react-router-dom";
import employees from "../data/employees";
import "../styles/dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const totalEmployees = employees.length;
  const activeCount = employees.filter((e) => e.active).length;
  const inactiveCount = totalEmployees - activeCount;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Employee Management Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </header>

      {/* Dashboard Summary */}
      <section className="summary">
        <div className="card">
          <h3>Total Employees</h3>
          <p>{totalEmployees}</p>
        </div>

        <div className="card">
          <h3>Active</h3>
          <p>{activeCount}</p>
        </div>

        <div className="card">
          <h3>Inactive</h3>
          <p>{inactiveCount}</p>
        </div>
      </section>

      {/* Employee Table */}
      <section className="table-section">
        <h3>Employee List</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>State</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>
                  <img src={emp.image} alt={emp.name} />
                </td>
                <td>{emp.name}</td>
                <td>{emp.gender}</td>
                <td>{emp.dob}</td>
                <td>{emp.state}</td>
                <td>
                  {emp.active ? "Active" : "Inactive"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Dashboard;
