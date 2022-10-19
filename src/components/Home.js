import React from 'react';
import './Home.css';

function Home() {
	return (
		<div id="content">
			<h1>Welcome to Jobly</h1>
			<p>You need an account to use the application.</p>
			<a class="btn btn-primary" href="/login" role="button">
				Login
			</a>
			&nbsp; OR &nbsp;
			<a class="btn btn-primary" href="/signup" role="button">
				Signup
			</a>
		</div>
	);
}

export default Home;
