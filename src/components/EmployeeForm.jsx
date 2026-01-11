import { useState, useRef } from "react";
import "../styles/EmployeeForm.css";

function EmployeeForm({ onSave, onClose, editingEmployee }) {
  const [formData, setFormData] = useState({
    name: editingEmployee?.name || "",
    gender: editingEmployee?.gender || "",
    dob: editingEmployee?.dob || "",
    state: editingEmployee?.state || "",
    active: editingEmployee?.active ?? true,
    image: editingEmployee?.image || "",
  });

  const [preview, setPreview] = useState(editingEmployee?.image || "");
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setPreview("");
    setFormData((prev) => ({ ...prev, image: "" }));

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.gender ||
      !formData.dob ||
      !formData.state
    ) {
      setError("Please fill all required fields marked with *");
      return;
    }

    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>{editingEmployee ? "Edit Employee" : "Add Employee"}</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="employee-form">
          {error && <div className="form-error">{error}</div>}

          <label>
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter employee full name"
            value={formData.name}
            onChange={handleChange}
          />

          <label>
            Gender <span className="required">*</span>
          </label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label>
            Date of Birth <span className="required">*</span>
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          <label>
            State <span className="required">*</span>
          </label>
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select state</option>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
            <option value="New York">New York</option>
          </select>

          <div className="image-section">
            <label className="image-label">Profile Image</label>

            {preview && (
              <div className="image-preview">
                <img src={preview} alt="Profile" />

                <div className="image-actions">
                  <button
                    type="button"
                    className="change-image"
                    onClick={() => fileInputRef.current.click()}
                  >
                    Change Image
                  </button>

                  <button
                    type="button"
                    className="remove-image"
                    onClick={removeImage}
                  >
                    Remove Image
                  </button>
                </div>
              </div>
            )}

            {!preview && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                ref={fileInputRef}
              />
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              ref={fileInputRef}
              className="hidden-file-input"
            />

            <small className="file-hint">
              {editingEmployee
                ? "You can replace or remove the existing image"
                : "Upload a profile image"}
            </small>
          </div>

          <label className="checkbox">
            <input
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleChange}
            />
            Active Employee
          </label>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel">
              Cancel
            </button>
            <button type="submit" className="save">
              {editingEmployee ? "Update Employee" : "Add Employee"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;
