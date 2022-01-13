import React from "react";

import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

import { SEGMENT_OPTIONS, TAG_OPTIONS } from "./constants";

const Sidebar = ({ title, labels, segments = [], tags = [] }) => {
  return (
    <MenuBar showMenu title={title}>
      <MenuBar.Block active label="All" count={200} />
      {labels.map(label => (
        <MenuBar.Block
          key={label.name}
          label={label.name}
          count={label.count}
        />
      ))}
      <MenuBar.SubTitle iconProps={SEGMENT_OPTIONS}>
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>
      {segments.map(label => (
        <MenuBar.Block
          key={label.name}
          label={label.name}
          count={label.count}
        />
      ))}
      <MenuBar.SubTitle iconProps={TAG_OPTIONS}>
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
      {tags.map(label => (
        <MenuBar.Block
          key={label.name}
          label={label.name}
          count={label.count}
        />
      ))}
    </MenuBar>
  );
};

export default Sidebar;
