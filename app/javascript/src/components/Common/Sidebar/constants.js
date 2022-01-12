import React from "react";

import { Text, UserCircle, Settings } from "@bigbinary/neeto-icons";

const NotesIcon = () => <Text />;
const ContactsIcon = () => <UserCircle />;
const SettingsIcon = () => <Settings />;

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: NotesIcon,
  },
  {
    label: "Contacts",
    to: "/contacts",
    icon: ContactsIcon,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: SettingsIcon,
    items: [
      {
        label: "My Profile",
        to: "/my/profile",
      },
      {
        label: "Change Password",
        to: "/my/password/edit",
      },
    ],
  },
];
