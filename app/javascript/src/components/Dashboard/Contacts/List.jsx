import React, { useState } from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Table, Dropdown } from "neetoui/v2";

const List = ({ contacts, setIsDeleteAlertOpen }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const COLUMN_DATA = [
    {
      title: "Name and Role",
      dataIndex: "first_name",
      key: "first_name",
      width: "30%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "30%",
    },
    {
      title: "Created At",
      dataIndex: "created_at",
      key: "created_at",
      width: "20%",
    },
    {
      render: () => (
        <Dropdown buttonStyle="text" icon={MenuVertical} options>
          <li>Edit</li>
          <li onClick={() => setIsDeleteAlertOpen(true)}>Delete</li>
        </Dropdown>
      ),
    },
  ];

  return (
    <Table
      rowData={contacts}
      columnData={COLUMN_DATA}
      currentPageNumber={currentPageNumber}
      defaultPageSize={10}
      handlePageChange={page => setCurrentPageNumber(page)}
      onRowClick={function noRefCheck() {}}
      onRowSelect={function noRefCheck() {}}
    />
  );
};

export default List;
