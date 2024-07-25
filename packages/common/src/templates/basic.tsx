"use client";

import { useEffect } from "react";

import { createTemplate } from "@sacred-craft/valhalla-resource";
import {
  ResourceMonacoEditor,
  ResourceSave,
  useResourceFileContext,
} from "@sacred-craft/valhalla-resource-components";

const Editor = () => {
  const { setRightActions } = useResourceFileContext();

  useEffect(() => {
    setRightActions(<ResourceSave />);
  }, [setRightActions]);

  return <ResourceMonacoEditor loading={false} />;
};

export const basic = createTemplate({
  name: "Basic",
  matchedPaths: [
    ".*.json$",
    ".*.ya?ml$",
    ".*.toml$",
    ".*.java$",
    ".*.kt$",
    ".*.properties$",
    ".*.md$",
  ],
  filesOptions: {
    read: "utf-8",
  },
  options: {
    render: [
      {
        component: Editor,
        value: "editor",
        label: "Editor",
      },
    ],
  },
});
