import React, { useEffect, useState } from 'react';
import '../styles/TablePagination.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const TablePagination = () => {
  const [users, setUsers] = useState(null);
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(API_URL);
    const res = await data.json();

    setUsers(res);
  };

  const pageSize = 4;
  const startIndex = currPage * pageSize - pageSize;
  const endIndex = currPage * pageSize;

  const isLastPage = currPage === Math.ceil(users?.length / pageSize);

  const handleNext = () => {
    setCurrPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrPage((prev) => prev - 1);
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <b>Id</b>
        <b>Name</b>
        <b>User Name</b>
      </div>

      {users?.slice(startIndex, endIndex)?.map((user) => {
        return (
          <div key={user.id} className="table-body">
            <span>{user.id}</span>
            <span>{user.name}</span>
            <span>{user.username}</span>
          </div>
        );
      })}

      <button onClick={() => handlePrev()} disabled={currPage === 1}>
        Prev
      </button>
      <span>Page-{currPage}</span>
      <button onClick={() => handleNext()} disabled={isLastPage}>
        Next
      </button>
    </div>
  );
};

export default TablePagination;
