import React, { useState } from "react";

import { Formik, Form as NoteForm } from "formik";
import { Button, Pane, Toastr } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";

import formValidationSchemas from "constants/formValidationSchemas";

const Form = ({ onClose, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async () => {
    try {
      setSubmitted(true);
      Toastr.success("Task has been added successfully");
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={formValidationSchemas.notesForm}
    >
      {({ isSubmitting, handleSubmit }) => (
        <NoteForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              className="flex-grow-0 w-full"
              placeholder="How to claim warranty"
              required
            />
            <Input
              label="Description"
              name="description"
              className="flex-grow-0 w-full"
              placeholder="Enter Note description"
              required
            />
            <Select
              name="Assigned Contact"
              label="Assigned Contact"
              className="flex-grow-0 w-full"
              placeholder="Select Role"
              required
            >
              <option value=""></option>
            </Select>
            <Select
              name="Tags"
              label="Tags"
              className="flex-grow-0 w-full"
              placeholder="Select Role"
              required
            >
              <option value=""></option>
            </Select>
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={e => {
                e.preventDefault();
                setSubmitted(true);
                handleSubmit();
              }}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </NoteForm>
      )}
    </Formik>
  );
};
export default Form;
