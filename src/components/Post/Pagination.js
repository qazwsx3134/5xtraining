/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';

const Pagination = ({
  totalPosts, postPerPage, paginate, currentPage,
}) => {
  const pageNumbers = [];


  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }


  // 計算共有幾頁 => 把 總post/每頁篇數 然後無條件進入


  return (
    <div>
      <ul className="pagination flex-wrap" style={{ justifyContent: 'center' }}>
        <li key="首頁" className="page-item">
          <a className="page-link" onClick={() => paginate(1)}>
            首頁
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${number === currentPage ? ' active ' : ''}`}>
            <a className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        <li key="下一頁" className="page-item">
          <a className="page-link" onClick={() => paginate(currentPage + 1)}>
            下一頁
          </a>
        </li>
        <li key="最後一頁" className="page-item">
          <a className="page-link" onClick={() => paginate(Math.ceil(totalPosts / postPerPage))}>
            最後一頁
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
