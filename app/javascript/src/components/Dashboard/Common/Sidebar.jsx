import React from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

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
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
          },
        ]}
      >
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
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Settings,
          },
          {
            icon: Plus,
          },
          {
            icon: Search,
          },
        ]}
      >
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
