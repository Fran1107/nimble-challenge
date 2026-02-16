import axios from 'axios';

const BASE_URL = 'https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net/api';

export const getCandidate = (email: string) => 
    axios.get(`${BASE_URL}/candidate/get-by-email?email=${email}`);

export const getJobs = () => 
    axios.get(`${BASE_URL}/jobs/get-list`);

export const applyToJob = (data: object) => 
    axios.post(`${BASE_URL}/candidate/apply-to-job`, data);