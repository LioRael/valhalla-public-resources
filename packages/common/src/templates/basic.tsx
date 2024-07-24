import { createTemplate } from "@sacred-craft/valhalla-resource";
import { ResourceMonacoEditor } from "@sacred-craft/valhalla-resource-components";

const Editor = () => {
  return <ResourceMonacoEditor />;
};

export const basic = createTemplate({
  name: "Basic",
  matchedPaths: [".*.json$", ".*.ya?ml$", ".*.toml$"],
  options: {
    render: [
      {
        component: Editor,
        value: "editor",
        label: "Editor",
        order: 1,
      },
    ],
  },
});
