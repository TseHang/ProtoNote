import { SetupWorkerApi } from 'msw/lib/types/setupWorker/setupWorker';
import { useEffect, useState } from 'react';

type MockingWorker = {
  worker: SetupWorkerApi | null;
  loading: boolean;
};

const useMockingWorker = () => {
  const [mockingWorker, setMockingWorker] = useState<MockingWorker>({
    worker: null,
    loading: false,
  });

  useEffect(() => {
    async function setupMockingWorker() {
      setMockingWorker(prev => ({ ...prev, loading: true }));
      const { worker } = require('@/mocks/browser');
      await worker.start();
      setMockingWorker({ worker, loading: false });
    }
    setupMockingWorker();
  }, []);

  return mockingWorker;
};

export default useMockingWorker;
