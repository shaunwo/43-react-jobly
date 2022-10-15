import React, { useState, useEffect } from 'react';
import SearchForm from '../common/SearchForm';
import JoblyApi from '../api/api';
import JobCardList from './JobCardList';
import LoadingSpinner from '../common/LoadingSpinner';

/** Show page with list of jobs.
 *
 * On mount, loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 *
 * JobList -> JobCardList -> JobCard
 *
 * This is routed to at /jobs
 */

function JobList() {
	console.debug('JobList');

	// setting jobs in state
	const [jobs, setJobs] = useState(null);

	// generating list of jobs
	useEffect(function getAllJobsOnMount() {
		console.debug('JobList useEffect getAllJobsOnMount');
		search();
	}, []);

	// trigger another API call if search is entered
	async function search(title) {
		let jobs = await JoblyApi.getJobs(title);
		setJobs(jobs);
	}

	// displaying the spinner until the API call returns the jobs data
	if (!jobs) return <LoadingSpinner />;

	// displaying the job list on the screen
	return (
		<div className="JobList col-md-8 offset-md-2">
			<SearchForm searchFor={search} />
			{jobs.length ? (
				<JobCardList jobs={jobs} />
			) : (
				<p className="lead">Sorry, no results were found!</p>
			)}
		</div>
	);
}

export default JobList;
