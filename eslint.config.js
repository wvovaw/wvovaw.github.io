import antfu from "@antfu/eslint-config";
import oxlint from "eslint-plugin-oxlint";

export default antfu({
  plugins: [oxlint.configs["flat/recommended"]],
  ignores: ["public/**/*"],
  stylistic: {
    semi: true,
    quotes: "double",
    indent: 2,
  },
  vue: true,
});
