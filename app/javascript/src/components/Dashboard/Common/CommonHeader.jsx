import React, { useState } from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Button, Input } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

import NewContactPane from "../Contacts/CreateContact";
import NewNotePane from "../Notes/Pane/CreateNote";

export default function CommonHeader({ title, buttonText, isNote }) {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);

  return (
    <>
      <Header
        actionBlock={
          <div className="flex space-x-2">
            <Input
              prefix={<Search />}
              className="w-64"
              placeholder="Search Name, Email, Phone Number,etc"
            />
            <Button
              onClick={() =>
                isNote ? setShowNewNotePane(true) : setShowNewContactPane(true)
              }
              label={buttonText}
              icon="ri-add-line"
            />
          </div>
        }
        menuBarToggle={function noRefCheck() {}}
        title={title}
      />

      {showNewNotePane ? (
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
        />
      ) : (
        <NewContactPane
          showPane={showNewContactPane}
          setShowPane={setShowNewContactPane}
        />
      )}
    </>
  );
}