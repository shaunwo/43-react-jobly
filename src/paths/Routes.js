import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import CompanyList from '../components/companies/CompanyList';
import CompanyDetail from '../components/companies/CompanyDetail';
import JobList from '../components/jobs/JobList';
import LoginForm from '../components/account/LoginForm';
import SignupForm from '../components/account/SignupForm';
import ProfileForm from '../components/account/ProfileForm';
import PrivateRoutes from './PrivateRoutes';

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

function Paths({ login, signup }) {
	// definining the available Routes for the application
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
				<Route element={<PrivateRoutes />}>
					<Route
						exact
						path="/companies"
						element={<CompanyList />}
					/>
					<Route exact path="/jobs" element={<JobList />} />
					<Route
						exact
						path="/companies/:handle"
						element={<CompanyDetail />}
					/>
					<Route
						exact
						path="/profile"
						element={<ProfileForm />}
					/>
				</Route>
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</div>
	);
}

export default Paths;
