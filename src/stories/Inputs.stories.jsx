import React from "react";

import { Input } from "components";

export default {
  title: "ajeet_singh_s_application20/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  shape: "square",
  color: "black_900_33",
  size: "xs",
  variant: "fill",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
