import { useEffect, useState } from 'react'
import JobListing from './JobListing'
import Spinner from './Spinner'

const JobListings = ({ showAll = true }) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            const apiUrl = showAll ? '/api/jobs' : '/api/jobs?_limit=3'
            try {
                const res = await fetch(apiUrl)
                const data = await res.json()
                setJobs(data)
            } catch (error) {
                console.log('Error fetching data', error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchJobs()

    }, [])

    return (
        <><section className='bg-blue-50 px-4 py-10'>
            <div className='container-xl lg:container m-auto'>
                <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                    {showAll ? 'Browse Jobs' : 'Featured Jobs'}
                </h2>
                {loading ? (<Spinner loading={loading} />) : (<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>{
                    jobs.map((job) => (
                        <JobListing
                            key={job.id}
                            id={job.id}
                            type={job.type}
                            title={job.title}
                            description={job.description}
                            salary={job.salary}
                            location={job.location}
                        />
                    ))
                }</div>)}
            </div>
        </section></>
    )
}

export default JobListings