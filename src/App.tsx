import { useChallenge } from './hooks/useChallenge'
import { Layout } from './components/Layout'
import { JobList } from './components/JobList'
import { Toaster } from 'react-hot-toast'

function App() {
  const { candidate, jobs, loading, error } = useChallenge('francoespinoza1107@gmail.com')

  if (loading) return <div className="p-10 text-center">Cargando...</div>
  if (error) return <div className="p-10 text-red-500 text-center">{error}</div>

  return (
    <Layout>
      <Toaster position="top-right" reverseOrder={false} />
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Listado de las Posiciones
        </h1>
        <p className="text-gray-400">
          Hola {candidate?.firstName}, elige el puesto y enviá tu repo 
        </p>
      </header>

      <JobList jobs={jobs} candidate={candidate} />
    </Layout>
  )
}

export default App;
