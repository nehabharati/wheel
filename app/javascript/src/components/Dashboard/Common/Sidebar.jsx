import React from "react";

import { Search, Settings, Plus } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui/v2";
import { MenuBar } from "neetoui/v2/layouts";

export default function Sidebar({ title, labels, segments, tags }) {
  return (
    <div>
      <MenuBar showMenu={true} title={title}>
        <MenuBar.Block label="All" count={200} active />
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
              // onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
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

        {segments.length > 0 &&
          segments.map(label => (
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

        {tags.length > 0 &&
          tags.map(label => (
            <MenuBar.Block
              key={label.name}
              label={label.name}
              count={label.count}
            />
          ))}
      </MenuBar>
    </div>
  );
}
