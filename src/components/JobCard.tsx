import { useState } from 'react'
import type { Job, Candidate } from '../types'
import { applyToJob } from '../api/api'
import toast from 'react-hot-toast'

interface JobCardProps {
  job: Job
  candidate: Candidate | null
}

export const JobCard = ({ job, candidate }: JobCardProps) => {
  const [repoUrl, setRepoUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!candidate) return

    if (!repoUrl.trim()) {
      setError('Ingresá la URL de tu repositorio')
      return
    }

    if (!repoUrl.includes('github.com')) {
      setError('Debe ser un repositorio de GitHub válido')
      return
    }

    setError('')
    setLoading(true)

    try {
      const res = await applyToJob({
        uuid: candidate.uuid,
        jobId: job.id,
        applicationId: candidate.applicationId,
        candidateId: candidate.candidateId,
        repoUrl
      })

      if (res.ok) {
        toast.success(`¡Postulado con éxito a ${job.title}!`, {
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
        setRepoUrl('')
      }
    } catch {
      toast.error('Ocurrió un error al enviar la postulación', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02] transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-4 tracking-wide">
        {job.title}
      </h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex flex-col">
          <input
            type="url"
            value={repoUrl}
            onChange={(e) => {
              setRepoUrl(e.target.value)
              setError('')
            }}
            placeholder="https://github.com/tuusuario/repo"
            className={` px-4 py-3 rounded-xl bg-black/30 text-white placeholder:text-gray-400 border transition
              ${error ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-cyan-400'} focus:outline-none focus:ring-2`}/>

          {error && (
            <span className="text-red-400 text-xs mt-1">
              {error}
            </span>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:brightness-110 active:scale-95 disabled:opacity-40 text-white transition-all cursor-pointer"
        >
          {loading ? 'Enviando...' : 'Submit'}
        </button>

      </div>
    </div>
  )
}
