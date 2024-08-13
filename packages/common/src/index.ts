import { createResource } from "@sacred-craft/valhalla-resource";
import { basic } from "./templates/basic";
import { realtime } from "./templates/realtime";

export const common = createResource({
  name: "common",
  version: "1.0.0",

  templates: [basic, realtime],
});
