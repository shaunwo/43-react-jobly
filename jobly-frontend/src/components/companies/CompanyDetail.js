import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../../private/api/api';
import JobCardList from '../jobs/JobCardList';
import LoadingSpinner from '../common/LoadingSpinner';

/** Company Detail page.
 *
 * Renders information about company, along with the jobs at that company.
 *
 * Routed at /companies/:handle
 *
 * Routes -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
	const { handle } = useParams();
	console.debug('CompanyDetail', 'handle=', handle);

	// setting company in state
	const [company, setCompany] = useState(null);

	// generating details for company
	useEffect(
		function getCompanyAndJobsForUser() {
			async function getCompany() {
				setCompany(await JoblyApi.getCompany(handle));
			}

			getCompany();
		},
		[handle]
	);

	// displaying the spinner until the API call returns the companies data
	if (!company) return <LoadingSpinner />;

	// displaying the company details on the screen
	return (
		<div className="CompanyDetail col-md-8 offset-md-2">
			<h4>{company.name}</h4>
			<p>{company.description}</p>
			<JobCardList jobs={company.jobs} />
		</div>
	);
}

export default CompanyDetail;
