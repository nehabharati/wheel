import React, { useState } from "react";

import { Container } from "neetoui/v2/layouts";

import { CONTACTS as contacts } from "./constants";
import ContactList from "./ContactList";
import DeleteAlert from "./DeleteAlert";

import Header from "../Common/CommonHeader";
import Sidebar from "../Common/CommonSidebar";
import { LABELS as labels } from "../Notes/constants";

const Contacts = () => {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

  return (
    <div className="flex w-full overflow-auto">
      <Sidebar title="Contacts" labels={labels} segments={{}} tags={{}} />
      <Container>
        <Header title="All Contacts" buttonText="Add Contact" isNote={false} />

        <ContactList
          contacts={contacts}
          setIsDeleteAlertOpen={setIsDeleteAlertOpen}
        />

        {isDeleteAlertOpen && (
          <DeleteAlert onClose={() => setIsDeleteAlertOpen(false)} />
        )}
      </Container>
    </div>
  );
};

export default Contacts;
