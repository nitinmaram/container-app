import { lazy, Suspense } from "react";

// Import only the ones you need from remote
const RemoteHeader = lazy(() => import("remoteApp/Header"));
const RemoteCard = lazy(() => import("remoteApp/Card"));
// Not importing Button — proves selective usage

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>🏠 Container App</h1>
      <Suspense fallback={<div>Loading Remote Components...</div>}>
        <RemoteHeader />
        <RemoteCard title="From Remote">
          <p>This Card is coming from the remote app!</p>
        </RemoteCard>
      </Suspense>
    </div>
  );
}

export default App;
