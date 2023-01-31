const BASE_URL = '/api/v1'; //removed hard reference to localhost for heroku deploy

export async function getAllJobs() {
  const response = await fetch(`${BASE_URL}/jobs`, {
    method: ' GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (response.ok) {
    const jobList = await response.json();
    return jobList;
  }
}
