import { createResource } from "@sacred-craft/valhalla-resource";
import { basic } from "./templates/basic";

export const common = createResource({
  name: "common",
  version: "1.0.0",

  templates: [basic],
});
