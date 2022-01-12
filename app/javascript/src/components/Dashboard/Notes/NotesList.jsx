import React from "react";

import { MenuVertical, Clock } from "@bigbinary/neeto-icons";
import { Typography, Tag, Avatar, Dropdown, Tooltip } from "neetoui/v2";

export default function NotesList({ notes }) {
  return (
    <div className="flex flex-col w-full p-2 mb-2 space-y-2 text-gray-800 ">
      {notes.map((note, idx) => (
        <div
          className="w-full px-2 py-2 border divide-y shadow-sm shadow-gray-500/50"
          key={idx}
        >
          <div className="flex flex-col px-2 py-2 space-y-2 ">
            <div className="flex justify-between ">
              <Typography style="h4"> {note.title}</Typography>
              <Dropdown icon={MenuVertical} buttonStyle="text">
                <li>Edit</li>
                <li onClick={() => setIsDeleteAlertOpen(true)}>Delete</li>
              </Dropdown>
            </div>
            <div className="overflow-auto">{note.description}</div>
          </div>

          <div className="flex items-center justify-between px-2 py-2">
            <Tag label="Getting Started" color="gray" />
            <div className="space-y-8">
              <Tooltip
                content="Wednesday, 10.30AM"
                followCursor="horizontal"
                position="bottom"
              >
                {/* <Button label="Follow Cursor" style="secondary" /> */}
                <div className="flex items-center space-x-2">
                  <Clock size="15" color="gray" />
                  <Typography style="body3">Created {note.created} </Typography>
                  <Avatar
                    size="small"
                    user={{
                      name: note.assigned,
                    }}
                  />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
