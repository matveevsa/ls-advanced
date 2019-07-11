import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/projects";
import "./scripts/reviews";
import "./scripts/popup-menu";
import "./scripts/parallax-train";
import "./scripts/parallax-foliage";