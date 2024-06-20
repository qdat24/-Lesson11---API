import React, { useState, useEffect } from 'react';

export default function dqdCategoryForm({ onAdd, onEdit, editingCategory, setEditingCategory }) {
  const [category, setCategory] = useState({ dqdCategoryName: '', dqdCategoryStatus: true });

  useEffect(() => {
    if (editingCategory) {
      setCategory(editingCategory);
    } else {
      setCategory({ dqdCategoryName: '', dqdCategoryStatus: true });
    }
  }, [editingCategory]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCategory(prevCategory => ({
      ...prevCategory,
      [name]: type === 'checkbox' ? checked : (name === 'dqdCategoryStatus' ? (value === 'true') : value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCategory) {
      onEdit(category);
    } else {
      onAdd(category);
    }
    setEditingCategory(null);
    setCategory({ dqdCategoryName: '', dqdCategoryStatus: true });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">CategoryName</span>
          <input
            type="text"
            name="dqdCategoryName"
            value={category.dqdCategoryName}
            onChange={handleChange}
            className="form-control"
            placeholder="CategoryName"
            aria-label="CategoryName"
            aria-describedby="basic-addon1"
            required
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">CategoryStatus</span>
          <select
            name="dqdCategoryStatus"
            value={category.dqdCategoryStatus}
            onChange={handleChange}
            className="form-control"
          >
            <option value={true}>Hiển thị</option>
            <option value={false}>Tạm khóa</option>
          </select>
        </div>
        
        <button type="submit" className="btn btn-success">Ghi lại</button>
        <button type="button" className="btn btn-secondary" onClick={() => setEditingCategory(null)}>Đóng</button>
      </form>
    </div>
  );
}
