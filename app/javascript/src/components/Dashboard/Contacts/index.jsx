import React, { useState } from "react";

import { Container } from "neetoui/v2/layouts";

import { CONTACTS as contacts } from "./constants";
import Delete from "./Delete";
import List from "./List";

import Header from "../Common/Header";
import Sidebar from "../Common/Sidebar";
import { LABELS as labels } from "../Notes/constants";

const Contacts = () => {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isContactSidebarOpen, setIsContactSidebarOpen] = useState(true);

  const handleSidebarOpen = () =>
    setIsContactSidebarOpen(!isContactSidebarOpen);

  return (
    <div className="flex w-full overflow-auto">
      {isContactSidebarOpen && <Sidebar title="Contacts" labels={labels} />}
      <Container>
        <Header
          title="All Contacts"
          buttonText="Add Contact"
          isNote={false}
          handleSidebarOpen={handleSidebarOpen}
        />

        <List contacts={contacts} setIsDeleteAlertOpen={setIsDeleteAlertOpen} />

        {isDeleteAlertOpen && (
          <Delete onClose={() => setIsDeleteAlertOpen(false)} />
        )}
      </Container>
    </div>
  );
};

export default Contacts;
