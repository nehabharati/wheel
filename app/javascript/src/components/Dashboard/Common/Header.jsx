import React, { useState } from "react";

import ActionBlock from "./ActionBlock";

import ContactPane from "../Contacts/Pane/AddContact";
import NotePane from "../Notes/Pane/AddNote";

const Header = ({ title, buttonText, isNote, handleSidebarOpen }) => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);

  return (
    <>
      <ActionBlock
        isNote={isNote}
        title={title}
        buttonText={buttonText}
        handleSidebarOpen={handleSidebarOpen}
        setShowNewNotePane={setShowNewNotePane}
        setShowNewContactPane={setShowNewContactPane}
      />
      {showNewNotePane ? (
        <NotePane showPane={showNewNotePane} setShowPane={setShowNewNotePane} />
      ) : (
        <ContactPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
        />
      )}
    </>
  );
};
export default Header;
