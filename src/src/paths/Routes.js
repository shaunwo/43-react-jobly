import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import CompanyList from '../components/companies/CompanyList';
import CompanyDetail from '../components/companies/CompanyDetail';
import JobList from '../components/jobs/JobList';
import LoginForm from '../components/account/LoginForm';
import SignupForm from '../components/account/SignupForm';
import Profile from '../components/Profile';
import PrivateRoute from './PrivateRoute';

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Paths({ login, signup }) {
	console.debug(
		'Routes',
		`login=${typeof login}`,
		`register=${typeof register}`
	);

	//
	return (
		<div className="pt-5">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					exact
					path="/login"
					element={<LoginForm login={login} />}
				/>
				<Route
					exact
					path="/signup"
					element={<SignupForm signup={signup} />}
				/>
				<Route exact path="/companies" element={<CompanyList />} />
				<Route exact path="/jobs" element={<JobList />} />
				<Route
					exact
					path="/companies/:handle"
					element={<CompanyDetail />}
				/>
				<Route exact path="/profile" element={<Profile />} />
			</Routes>
		</div>
	);
}

export default Paths;
