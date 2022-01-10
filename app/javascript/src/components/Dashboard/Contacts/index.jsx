import React from "react";

import Sidebar from "../Common/Sidebar";
import { LABELS as labels } from "../Notes/constants";

const Contacts = () => {
  return (
    <div>
      <Sidebar title="Contacts" labels={labels} segments={{}} tags={{}} />
    </div>
  );
};

export default Contacts;
