import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CompanyList from './components/companies/CompanyList';
import CompanyDetail from './components/companies/CompanyDetail';
import JobList from './components/jobs/JobList';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import Navigation from './paths/Navigation';
import './App.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/companies" element={<CompanyList />} />
					<Route
						path="/companies/:handle"
						element={<CompanyDetail />}
					/>
					<Route path="/jobs" element={<JobList />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
