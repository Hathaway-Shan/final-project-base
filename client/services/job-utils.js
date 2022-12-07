const BASE_URL = 'http://localhost:7891/api/v1';

export async function getAllJobs() {
  const response = await fetch(`${BASE_URL}/jobs`, {
    method: ' GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  console.log('RESPONSE IS: ', response);
  if (response.ok) {
    const jobList = await response.json();
    return jobList;
  }
}
