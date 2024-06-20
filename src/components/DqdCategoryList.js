import React from 'react';

export default function dqdCategoryList({ renderdqdCategories, onDelete, onEdit }) {
  const dqdHandleDelete = (dqdCategory) => {
    if (window.confirm(`Bạn có thực sự muốn xóa Category có mã ${dqdCategory.dqdId} không ?`)) {
      onDelete(dqdCategory.dqdId);
    }
  };

  const dqdCategoryElement = renderdqdCategories.map((dqdCategory, index) => (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{dqdCategory.dqdId}</td>
      <td>{dqdCategory.dqdCategoryName}</td>
      <td>{dqdCategory.dqdCategoryStatus ? 'Hiển thị' : 'Tạm khóa'}</td>
      <td>
        <button className="btn btn-warning" onClick={() => onEdit(dqdCategory)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => dqdHandleDelete(dqdCategory)}>
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container m-2">
      <h2>Danh Sách Loại Sản Phẩm</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã loại</th>
            <th>Tên loại</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>{dqdCategoryElement}</tbody>
      </table>
      <button className="btn btn-primary" onClick={() => onEdit(null)}>
        Thêm Mới
      </button>
    </div>
  );
}
