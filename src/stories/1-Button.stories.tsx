import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../components/button";

export default {
  title: "Button",
  component: Button,
};

export const Text = () => (
  <Button look="primary" onClick={action("Button onClick")}>
    Hello Button
  </Button>
);

export const Emoji = () => (
  <Button look="primary" onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
