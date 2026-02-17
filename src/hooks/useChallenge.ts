import { useState, useEffect } from 'react'
import type { Candidate, Job } from '../types'
import { getCandidateData, getJobsList } from '../api/api'

export const useChallenge = (email: string) => {
  const [candidate, setCandidate] = useState<Candidate | null>(null)
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true)
        const [cData, jData] = await Promise.all([
          getCandidateData(email),
          getJobsList()
        ])
        setCandidate(cData)
        setJobs(jData)
      } catch (err) {
        setError('No se pudo cargar la información del desafio')
        console.error(err);
      } finally {
        setLoading(false)
      }
    }

    if (email) init()
  }, [email])

  return { candidate, jobs, loading, error }
}