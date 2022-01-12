import React, { useState } from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Button, Input } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import { NOTES as notes } from "./constants";
import DeleteAlert from "./DeleteAlert";
import NoteSidebar from "./NoteSidebar";
import NotesList from "./NotesList";
import NewNotePane from "./Pane/CreateNote";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [isNoteSidebarOpen, setIsNoteSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {isNoteSidebarOpen && <NoteSidebar />}
      <Container>
        <Header
          actionBlock={
            <div className="flex space-x-2">
              <Input
                prefix={<Search />}
                className="w-64"
                placeholder="Search Name, Email, Phone Number,etc"
              />
              <Button
                onClick={() => setShowNewNotePane(true)}
                label="Add Note"
                icon="ri-add-line"
              />
            </div>
          }
          menuBarToggle={() => setIsNoteSidebarOpen(!isNoteSidebarOpen)}
          title="All Notes"
        />

        <NotesList notes={notes} />
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteIds={selectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
            setSelectedNoteIds={setSelectedNoteIds}
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;
