import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobsListings from '../components/JobsListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <JobsListings showAll={false} />
            <ViewAllJobs />
        </>
    )
}

export default HomePage