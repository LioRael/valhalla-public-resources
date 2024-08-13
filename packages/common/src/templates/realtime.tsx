"use client";

import { useEffect } from "react";

import { createTemplate } from "@sacred-craft/valhalla-resource";
import {
  ResourceSave,
  ResourceRefresh,
  useResourceFileContext,
  ResourceRealtimeMonacoEditor,
} from "@sacred-craft/valhalla-resource-components";

const RealtimeEditor = () => {
  const { setRightActions } = useResourceFileContext();

  useEffect(() => {
    setRightActions(
      <>
        <ResourceRefresh />
        <ResourceSave />
      </>
    );
  }, [setRightActions]);

  return <ResourceRealtimeMonacoEditor />;
};

export const realtime = createTemplate({
  name: "Realtime",
  priority: 1,
  matchedPaths: [".*.json$", ".*.ya?ml$", ".*.toml$"],
  filesOptions: {
    read: "utf-8",
  },
  options: {
    render: [
      {
        component: RealtimeEditor,
        value: "editor",
        label: "RealtimeEditor",
      },
    ],
  },
});
