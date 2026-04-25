import { useState, useCallback } from 'react';
import { analyzeRepo } from '../services/api';

/**
 * Custom hook for managing repo analysis state.
 * Returns { data, loading, error, analyze, reset }
 */
export default function useRepoAnalysis() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyze = useCallback(async (repoUrl) => {
    if (!repoUrl || !repoUrl.trim()) {
      setError('Please enter a valid GitHub repository URL.');
      return;
    }

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await analyzeRepo(repoUrl.trim());
      setData(result);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return { data, loading, error, analyze, reset };
}
