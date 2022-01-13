import React from "react";

import { Alert, Toastr } from "neetoui/v2";

const Delete = ({ onClose }) => {
  const handleDelete = async () => {
    try {
      Toastr.success("Note deleted successfully");
      onClose();
    } catch (error) {
      logger.error(error);
    }
  };
  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to delete the note? This action cannot be undone."
      title="Delete note"
    />
  );
};

export default Delete;
