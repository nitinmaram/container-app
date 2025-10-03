import { useState, useEffect } from "react";

/**
 * Hook for centralized error handling
 */
export function useErrorHandler() {
  const [error, setError] = useState(null);

  const handleError = (err) => {
    console.error("Error caught by useErrorHandler:", err);
    setError(err);
  };

  const resetError = () => setError(null);

  return { error, handleError, resetError };
}

/**
 * Hook for dynamically loading remote components
 * @param {string} remoteName - Name of the remote as defined in container Vite config
 * @param {string} exposedModule - Module path exposed by the remote (e.g., "Header")
 */
export function useRemoteComponent(remoteName, exposedModule) {
  const [Component, setComponent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRemote = async () => {
      try {
        const remoteModule = await import(`${remoteName}/${exposedModule}`);
        setComponent(() => remoteModule.default || remoteModule);
      } catch (err) {
        console.error(`Failed to load remote ${remoteName}/${exposedModule}:`, err);
        setError(err);
      }
    };

    loadRemote();
  }, [remoteName, exposedModule]);

  return { Component, error };
}
