import React, { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://job-box-server-xi.vercel.app/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                
            })
    }, [])

    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-4'>All posted jobs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;