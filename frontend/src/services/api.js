const API_BASE = 'http://localhost:5000';

/**
 * Analyze a GitHub repository via the backend API.
 * @param {string} repoUrl - Full GitHub repository URL
 * @returns {Promise<object>} Analysis result containing summary, explanation, techStack, etc.
 */
export async function analyzeRepo(repoUrl) {
  const response = await fetch(`${API_BASE}/explain`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ repoUrl }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Server error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
