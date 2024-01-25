// ExampleComponent.js
import React from "react";
import { useTheme } from "./ThemeProvider";

const ExampleComponent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
      }}
    >
      <h1>My Component</h1>
      <p>
        This is an example component with dynamic styling based on the theme.
      </p>
    </div>
  );
};

export default ExampleComponent;
