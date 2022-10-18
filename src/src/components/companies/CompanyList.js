import React, { useState, useEffect } from 'react';
import SearchForm from '../common/SearchForm';
import JoblyApi from '../../private/api/api';
import CompanyCard from './CompanyCard';
import LoadingSpinner from '../common/LoadingSpinner';

/** Show page with list of companies.
 *
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routes -> { CompanyCard, SearchForm }
 */

function CompanyList() {
	console.debug('CompanyList');

	// setting companies in state
	const [companies, setCompanies] = useState(null);

	// generating list of companies
	useEffect(function getCompaniesOnMount() {
		console.debug('CompanyList useEffect getCompaniesOnMount');
		search();
	}, []);

	// trigger another API call if search is entered
	async function search(name) {
		let companies = await JoblyApi.getCompanies(name);
		setCompanies(companies);
	}

	// displaying the spinner until the API call returns the companies data
	if (!companies) return <LoadingSpinner />;

	// displaying the company list on the screen
	return (
		<div className="CompanyList col-md-8 offset-md-2">
			<SearchForm searchFor={search} />
			{companies.length ? (
				<div className="CompanyList-list">
					{companies.map((c) => (
						<CompanyCard
							key={c.handle}
							handle={c.handle}
							name={c.name}
							description={c.description}
							logoUrl={c.logoUrl}
						/>
					))}
				</div>
			) : (
				<p className="lead">Sorry, no results were found!</p>
			)}
		</div>
	);
}

export default CompanyList;
