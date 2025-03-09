import React from 'react';

const AddJob = () => {
    return (
        <div>
        <h2 className="text-3xl text-center my-4 font-semibold">Post a new Job</h2>
        <form  className="card-body">
            {/* Job title */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
            <div className="form-control">
                <label className="label">
                    <span className="label-text mr-2 mb-1">Job Title</span>
                </label>
                <input type="text" name='title' placeholder="Job Title" className="input input-bordered rounded-sm" required />
            </div>
            {/* job location */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Location</span>
                </label>
                <input type="text" name='location' placeholder="Job Location" className="input input-bordered rounded-sm" required />
            </div>
            {/* job Type */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Type</span>
                </label>
                <select defaultValue="Pick a Job type" className="select  w-full max-w-xs rounded-sm input-bordered">
                    <option disabled>Pick a Job type</option>
                    <option>Full-time</option>
                    <option>Intern</option>
                    <option>Part-time</option>
                </select>
            </div>
            {/* job Type */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Field</span>
                </label>
                <select defaultValue="Pick a Job Field" className="select input-bordered rounded-sm w-full max-w-xs">
                    <option disabled>Pick a Job Field</option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                    <option>Teaching</option>
                </select>
            </div>
           
            </div>
            {/* salary range */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Salary Range</span>
                    </label>
                    <input type="text" name='min' placeholder="Min" className="input input-bordered rounded-sm" required />
                </div>
                <div className="form-control">
                    <input type="text" name='max' placeholder="Max " className="input input-bordered rounded-sm" required />
                </div>
                <div className="form-control">
                    <select defaultValue="Currency" name="currency" className="select input-bordered rounded-sm w-full max-w-xs">
                        <option disabled>Currency</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>INR</option>
                    </select>
                </div>
            </div>
            {/* Job Description */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Description</span>
                </label>
                <textarea className="textarea textarea-bordered rounded-sm" placeholder="Job Description" name="description" required></textarea>
            </div>
            {/* Company Name */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Company Name</span>
                </label>
                <input type="text" name='company' placeholder="Company Name" className="input input-bordered rounded-sm" required />
            </div>
            {/* requirements */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Requirements</span>
                </label>
                <textarea className="textarea textarea-bordered rounded-sm" placeholder="put each requirements in a new line" name="requirements" required></textarea>
            </div>
            {/* responsibilities */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Job Responsibilities</span>
                </label>
                <textarea className="textarea textarea-bordered rounded-sm" placeholder="Write each responsibility in a new line" name="responsibilities" required></textarea>
            </div>
            {/* HR Name */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">HR Name</span>
                </label>
                <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered rounded-sm" required />
            </div>

            {/* HR Email */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">HR Email</span>
                </label>
                <input type="text"  name='hr_email' placeholder="HR Email" className="input input-bordered rounded-sm" required />
            </div>
            {/* application Deadline */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Deadline</span>
                </label>
                <input type="date" name='applicationDeadline' placeholder="Deadline" className="input input-bordered rounded-sm" required />
            </div>
            {/* HR Name */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Company Logo URL</span>
                </label>
                <input type="text" name='company_logo' placeholder="Company Logo URL" className="input input-bordered rounded-sm" required />
            </div>
            </div>
            {/* submit button */}
            <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    );
};

export default AddJob;