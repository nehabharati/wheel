import React, { useState } from "react";

// import EmptyNotesListImage from "images/EmptyNotesList";
import { Search } from "@bigbinary/neeto-icons";
import { Button, Input } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import { NOTES as notes } from "./constants";
import DeleteAlert from "./DeleteAlert";
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
      {/* <Header
        title="Notes"
        actionBlock={
          <Button
            onClick={() => setShowNewNotePane(true)}
            label="Add New Note"
            icon="ri-add-line"
          />
        }
      /> */}
      {/* {notes.length ? ( */}
      <>
        {/* <SubHeader
            searchProps={{
              value: searchTerm,
              onChange: e => setSearchTerm(e.target.value),
              clear: () => setSearchTerm(""),
            }}
            deleteButtonProps={{
              onClick: () => setShowDeleteAlert(true),
              disabled: !selectedNoteIds.length,
            }}
          /> */}
        {/* <NoteTable
            setSelectedNoteIds={setSelectedNoteIds}
            notes={notes}
            fetchNotes={fetchNotes}
          /> */}
        {/* {console.log("hi")} */}
        <NotesList notes={notes} />
      </>
      {/* ) : (
        <EmptyState
          image={EmptyNotesListImage}
          title="Looks like you don't have any notes!"
          subtitle="Add your notes to send customized emails to them."
          primaryAction={() => setShowNewNotePane(true)}
          primaryActionLabel="Add New Note"
        />
      )} */}
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
  );
};

export default Notes;
