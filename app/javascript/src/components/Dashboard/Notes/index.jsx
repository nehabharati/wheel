import React, { useState } from "react";

// import { Search } from "@bigbinary/neeto-icons";
// import { Button, Input } from "neetoui/v2";
import { Container } from "neetoui/v2/layouts";

import {
  NOTES as notes,
  LABELS as labels,
  SEGMENTS as segments,
  TAGS as tags,
} from "./constants";
import DeleteAlert from "./DeleteAlert";
import NotesList from "./NotesList";
// import NewNotePane from "./Pane/CreateNote";

import Header from "../Common/CommonHeader";
import Sidebar from "../Common/CommonSidebar";

const Notes = () => {
  // const [loading, setLoading] = useState(true);
  // const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

  const handleDeleteAlert = () => setIsDeleteAlertOpen(true);

  return (
    <div className="flex">
      <Sidebar title="Notes" labels={labels} segments={segments} tags={tags} />
      <Container>
        <Header title="All Notes" buttonText="Add Note" isNote={true} />

        <NotesList
          notes={notes}
          setIsDeleteAlertOpen={setIsDeleteAlertOpen}
          handleDeleteAlert={handleDeleteAlert}
        />

        {isDeleteAlertOpen && (
          <DeleteAlert onClose={() => setIsDeleteAlertOpen(false)} />
        )}
      </Container>
    </div>
  );
};

export default Notes;
