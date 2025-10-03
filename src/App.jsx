import React, { useState, Suspense } from "react";
import { useErrorHandler } from "./utils/CustomHooks";

// Static imports for Vite MF
const RemoteHeader = React.lazy(() => import("remoteApp/Header"));
const RemoteCard = React.lazy(() => import("remoteApp/Card"));
const RemoteButton = React.lazy(() => import("remoteApp/Button"));

// Mapping object for dynamic selection
const remotes = {
  Header: RemoteHeader,
  Card: RemoteCard,
  Button: RemoteButton,
};

function App() {
  const [selectedComponent, setSelectedComponent] = useState("Header");
  const RemoteComponent = remotes[selectedComponent];

  const { error, handleError, resetError } = useErrorHandler();

  const RemoteRenderer = () => {
    try {
      if (!RemoteComponent) return null;
      if (selectedComponent === "Card") {
        return (
          <RemoteComponent title="From Remote">
            <p>This Card is coming from the remote app!</p>
          </RemoteComponent>
        );
      }
      return <RemoteComponent label="Click Me" />;
    } catch (err) {
      handleError(err);
      return null;
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🏠 Container App POC</h1>

      {/* Error display */}
      {error && (
        <div style={{ color: "red", marginBottom: "1rem" }}>
          <p>Error: {error.message}</p>
          <button onClick={resetError}>Dismiss</button>
        </div>
      )}

      {/* Buttons to switch components */}
      <div style={{ marginBottom: "1rem" }}>
        {Object.keys(remotes).map((name) => (
          <button
            key={name}
            style={{ marginRight: "0.5rem" }}
            onClick={() => setSelectedComponent(name)}
          >
            Load {name}
          </button>
        ))}
      </div>

      {/* Render selected remote component */}
      <Suspense fallback={<p>Loading {selectedComponent}...</p>}>
        <RemoteRenderer />
      </Suspense>
    </div>
  );
}

export default App;
