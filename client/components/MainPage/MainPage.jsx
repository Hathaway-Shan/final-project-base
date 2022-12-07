import jobCard from '../jobCard/jobCard.jsx';
import useJobs from '../../hooks/useJobs.js';

export default function MainPage() {
  const { jobs, setJobs, loading, error } = useJobs();
  return (
    <main>
      <span>{loading ? <>loading...</> : <></>}</span>
      <span>{error ? <h2>{error}</h2> : <></>}</span>
      <div className="jobWrapper">
        {jobs.map((job) => (
          <jobCard key={job.id} {...job} />
        ))}
      </div>
    </main>
  );
}
