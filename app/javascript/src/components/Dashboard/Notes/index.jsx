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
  // const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  // const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  // const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  // const fetchNotes = async () => {
  // try {
  //   setLoading(true);
  //   const { data } = await notesApi.fetch();
  //   setNotes(data.notes);
  // } catch (error) {
  //   logger.error(error);
  // } finally {
  //   setLoading(false);
  // }
  // };

  // if (loading) {
  //   return <PageLoader />;
  // }

  return (
    <div className="flex">
      <NoteSidebar />
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
          // searchProps={{
          //   onChange: function noRefCheck() {},
          //   value: "",
          // }}
          menuBarToggle={function noRefCheck() {}}
          title="All Notes"
        />

        <NotesList notes={notes} />
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          // fetchNotes={fetchNotes}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteIds={selectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
            // refetch={fetchNotes}
            setSelectedNoteIds={setSelectedNoteIds}
          />
        )}
      </Container>
    </div>
  );
};

export default Notes;
