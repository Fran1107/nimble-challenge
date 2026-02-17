import type { Job, Candidate } from '../types'
import { JobCard } from './JobCard'

export const JobList = ({ jobs, candidate }: { jobs: Job[], candidate: Candidate | null }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {jobs.map(job => (
      <JobCard key={job.id} job={job} candidate={candidate} />
    ))}
  </div>
)
