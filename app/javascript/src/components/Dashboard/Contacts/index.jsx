import React from "react";

import { Container } from "neetoui/v2/layouts";

import Header from "../Common/CommonHeader";
import Sidebar from "../Common/CommonSidebar";
import { LABELS as labels } from "../Notes/constants";

const Contacts = () => {
  return (
    <div className="flex w-full">
      <Sidebar title="Contacts" labels={labels} segments={{}} tags={{}} />
      <Container>
        <Header title="All Contacts" buttonText="Add Contact" isNote={false} />
      </Container>
    </div>
  );
};

export default Contacts;
