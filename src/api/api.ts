import axios from 'axios'
import type { Candidate, Job, ApplicationPayload, ApiResponse } from '../types'

const api = axios.create({
  baseURL: 'https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api',
})

export const getCandidateData = async (email: string): Promise<Candidate> => {
  const { data } = await api.get<Candidate>(`/candidate/get-by-email?email=${email}`)
  return data
}

export const getJobsList = async (): Promise<Job[]> => {
  const { data } = await api.get<Job[]>('/jobs/get-list')
  return data
}

export const applyToJob = async (payload: ApplicationPayload): Promise<ApiResponse> => {
  const { data } = await api.post<ApiResponse>('/candidate/apply-to-job', payload)
  return data
}