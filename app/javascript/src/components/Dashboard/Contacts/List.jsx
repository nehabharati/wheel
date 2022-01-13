import React, { useState } from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Table, Dropdown } from "neetoui/v2";

import { COLUMN_DATA } from "./constants";

const List = ({ contacts, setIsDeleteAlertOpen }) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  return (
    <>
      <Table
        rowData={contacts}
        columnData={
          ({
            render: () => (
              <Dropdown buttonStyle="text" icon={MenuVertical} options>
                <li>Edit</li>
                <li onClick={() => setIsDeleteAlertOpen(true)}>Delete</li>
              </Dropdown>
            ),
          },
          [...COLUMN_DATA])
        }
        currentPageNumber={currentPageNumber}
        defaultPageSize={10}
        handlePageChange={page => setCurrentPageNumber(page)}
        onRowClick={function noRefCheck() {}}
        onRowSelect={function noRefCheck() {}}
      />
    </>
  );
};

export default List;
