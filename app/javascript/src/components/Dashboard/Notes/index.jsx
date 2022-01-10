import React, { useState } from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Button, Input } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import {
  NOTES as notes,
  LABELS as labels,
  SEGMENTS as segments,
  TAGS as tags,
} from "./constants";
import DeleteAlert from "./DeleteAlert";
import NotesList from "./NotesList";
import NewNotePane from "./Pane/CreateNote";

import Sidebar from "../Common/Sidebar";

const Notes = () => {
  // const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);

  const handleDeleteAlert = () => setIsDeleteAlertOpen(true);

  return (
    <div className="flex">
      <Sidebar title="Notes" labels={labels} segments={segments} tags={tags} />
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
          menuBarToggle={function noRefCheck() {}}
          title="All Notes"
        />

        <NotesList
          notes={notes}
          setIsDeleteAlertOpen={setIsDeleteAlertOpen}
          handleDeleteAlert={handleDeleteAlert}
        />

        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
        />

        {isDeleteAlertOpen && (
          <DeleteAlert onClose={() => setIsDeleteAlertOpen(false)} />
        )}
      </Container>
    </div>
  );
};

export default Notes;
