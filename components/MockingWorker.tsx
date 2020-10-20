import React, { useEffect, useState } from 'react';

const MockingWorkerProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function setupMockingWorker() {
      const { worker } = require('@/mocks/browser');
      await worker.start();
      setLoading(false);
    }
    setupMockingWorker();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default MockingWorkerProvider;
