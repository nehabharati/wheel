import React, { useState } from "react";

import { Container } from "neetoui/v2/layouts";

import {
  NOTES as notes,
  LABELS as labels,
  SEGMENTS as segments,
  TAGS as tags,
} from "./constants";
import Delete from "./Delete";
import List from "./List";

import Header from "../Common/Header";
import Sidebar from "../Common/Sidebar";

const Notes = () => {
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isNoteSidebarOpen, setIsNoteSidebarOpen] = useState(true);

  const handleDeleteAlert = () => setIsDeleteAlertOpen(true);
  const handleSidebarOpen = () => setIsNoteSidebarOpen(!isNoteSidebarOpen);

  return (
    <div className="flex">
      {isNoteSidebarOpen && (
        <Sidebar
          title="Notes"
          labels={labels}
          segments={segments}
          tags={tags}
        />
      )}
      <Container>
        <Header
          title="All Notes"
          buttonText="Add Note"
          isNote={true}
          handleSidebarOpen={handleSidebarOpen}
        />

        <List
          notes={notes}
          setIsDeleteAlertOpen={setIsDeleteAlertOpen}
          handleDeleteAlert={handleDeleteAlert}
        />

        {isDeleteAlertOpen && (
          <Delete onClose={() => setIsDeleteAlertOpen(false)} />
        )}
      </Container>
    </div>
  );
};

export default Notes;
