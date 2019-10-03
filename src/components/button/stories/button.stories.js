import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "components/button";

export default {
  title: "Button",
};

export const withText = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const withEmoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
