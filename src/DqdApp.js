import React, { useEffect, useState } from 'react';
import axios from './api/DqdApi';
import './App.css';
import DqdCategoryList from './components/DqdCategoryList';
import DqdCategoryForm from './components/DqdCategoryForm';

function DqdApp() {
  const [DqdCategories, setDqdCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);

  const DqdGetCategories = async () => {
    try {
      const DqdCateResponse = await axios.get('DqdCategory');
      setDqdCategories(DqdCateResponse.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const DqdAddCategory = async (newCategory) => {
    try {
      const response = await axios.post('DqdCategory', newCategory);
      setDqdCategories([...DqdCategories, response.data]);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const DqdUpdateCategory = async (updatedCategory) => {
    try {
      const response = await axios.put(`DqdCategory/${updatedCategory.DqdId}`, updatedCategory);
      setDqdCategories(DqdCategories.map(cat => cat.DqdId === updatedCategory.DqdId ? response.data : cat));
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const DqdDeleteCategory = async (DqdId) => {
    try {
      await axios.delete(`DqdCategory/${DqdId}`);
      setDqdCategories(DqdCategories.filter(cat => cat.DqdId !== DqdId));
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  useEffect(() => {
    DqdGetCategories();
  }, []);

  return (
    <div className="container border my-3">
      <h1>Lê Văn Hoàng - Call API</h1>
      <DqdCategoryList
        renderDqdCategories={DqdCategories}
        onDelete={DqdDeleteCategory}
        onEdit={setEditingCategory}
      />
      <hr />
      <DqdCategoryForm
        onAdd={DqdAddCategory}
        onEdit={DqdUpdateCategory}
        editingCategory={editingCategory}
        setEditingCategory={setEditingCategory}
      />
    </div>
  );
}

export default DqdApp;
