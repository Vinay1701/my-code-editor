// src/CodeEditor.tsx

import React, { useState } from "react";

const CodeEditor: React.FC = () => {
  const [code, setCode] = useState<string>(""); // State to hold the code content

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(event.target.value); // Update state with the latest code content
  };

  return (
    <div className="code-editor">
      <textarea
        className="code-textarea"
        value={code}
        onChange={handleChange}
        placeholder="Enter your code here..."
      />
      <div className="code-preview">
        <pre>{code}</pre> {/* Display the code entered */}
      </div>
    </div>
  );
};

export default CodeEditor;
