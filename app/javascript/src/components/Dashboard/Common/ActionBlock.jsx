import React from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Button, Input } from "neetoui/v2";
import { Header as MainHeader } from "neetoui/v2/layouts";

const ActionBlock = ({
  isNote,
  setShowNewNotePane,
  setShowNewContactPane,
  buttonText,
  handleSidebarOpen,
  title,
}) => {
  return (
    <MainHeader
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
      menuBarToggle={handleSidebarOpen}
      title={title}
    />
  );
};

export default ActionBlock;
