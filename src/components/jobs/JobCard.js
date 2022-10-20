import React, { useContext, useState } from 'react';
import './JobCard.css';
import UserContext from '../../private/auth/UserContext';

/** Show limited information about a job.
 *
 * Is rendered by JobCardList to show a "card" for each job.
 *
 * Receives apply func prop from parent, which is called on apply.
 *
 * JobCardList -> JobCard
 */

function JobCard({ id, title, salary, equity, companyName, companyHandle }) {
	console.debug('JobCard');

	const { hasAppliedToJob, applyToJob } = useContext(UserContext);
	const [applied, setApplied] = useState();

	React.useEffect(
		function updateAppliedStatus() {
			console.debug(
				'JobCard useEffect updateAppliedStatus',
				'id=',
				id
			);

			setApplied(hasAppliedToJob(id));
		},
		[id, hasAppliedToJob]
	);

	// apply for a job
	async function handleApply(evt) {
		if (hasAppliedToJob(id)) return;

		// applyToJob is a method within the JoblyApi class
		applyToJob(id);
		setApplied(true);
	}

	// displaying the job card on the screen
	return (
		<div className="JobCard card">
			<div className="card-body">
				<h6 className="card-title">{title}</h6>
				<p>
					<a href={'companies/' + companyHandle}>
						{companyName}
					</a>
				</p>
				{salary && (
					<div>
						<small>Salary: ${formatSalary(salary)}</small>
					</div>
				)}
				{equity && (
					<div>
						<small>Equity: {equity}</small>
					</div>
				)}
				<button
					className="btn btn-info font-weight-bold float-right"
					onClick={handleApply}
					disabled={applied}
				>
					{applied ? 'Applied' : 'Apply'}
				</button>
			</div>
		</div>
	);
}

// format salary with commas in between numbers
function formatSalary(salary) {
	const digitsRev = [];
	const salaryStr = salary.toString();

	for (let i = salaryStr.length - 1; i >= 0; i--) {
		digitsRev.push(salaryStr[i]);
		if (i > 0 && i % 3 === 0) digitsRev.push(',');
	}

	return digitsRev.reverse().join('');
}

export default JobCard;
