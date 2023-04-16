import { defineRule } from "vee-validate";
import { email } from "@vee-validate/rules";

export default () => {
  defineRule("email", email);
  defineRule("required", (value: string) => {
    if (!value || !value.length) {
      return "This field is required";
    }
    return true;
  });
};
