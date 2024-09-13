import style from "./index.module.css";

const Readme = () => {
	return (
		<div className={style.readme}>
			<h1>Readme</h1>
			<article>
				<h2>Welcome to the Winamax monorepo!</h2>
				<p>This repo contains 2 apps :</p>
				<ul>
					<li>
						A simple poker app that allows you to filter and register to
						tournaments.
					</li>
					<li>A storybook that displays all the UI components.</li>
				</ul>
				<p>
					This app is built with React and TypeScript. It was build using a
					feature by package architecture.
					<br />
					Each feature is a package that contains all the necessary components
					and styles.
					<br />
					There are 3 main features in this app:
					<ul>
						<li>
							<b>Poker:</b> Contains all the components related to the poker.{" "}
							<br />
							It has a sub package "tournaments" that contains all the
							components related to the tournaments.
						</li>
						<li>
							<b>UI:</b> Contains all the UI building block that are shared
							between the features.
						</li>
						<li>
							<b>Information:</b> Contains all component giving global
							information to users, including this readme.
						</li>
					</ul>
				</p>
			</article>
			<article>
				<h2>Pre-requisite</h2>
				<p>
					To run the app, you need to have NodeJs - Turbo and pnpm installed.
					<br />
					You can install them by following their documentation
					<ul>
						<li>
							<a
								href="https://turbo.build/repo/docs/getting-started/installation"
								target="_blank"
								rel="noreferrer"
							>
								Turbo
							</a>
						</li>
						<li>
							<a
								href="https://pnpm.io/installation"
								target="_blank"
								rel="noreferrer"
							>
								pnpm
							</a>
						</li>
						<li>
							<a
								href="https://nodejs.org/fr/download/package-manager"
								target="_blank"
								rel="noreferrer"
							>
								NodeJs
							</a>
						</li>
					</ul>
				</p>
			</article>
			<article>
				<h2>How to run the apps</h2>
				<p>
					To run the poker app, you can run the following command in the root
					folder:
					<code>turbo dev</code>
				</p>
				<p>
					To run the storybook, you can run the following command in the root
					folder:
					<code>turbo storybook</code>
				</p>
			</article>
			<article>
				<h2>There is sill a lot to be done !</h2>
				<div>
					<h3>Design :</h3>
					<ul>
						<li>
							The app was build using PNG as a reference. Font size, border
							radius, shadows... are not accurate
						</li>
						<li>
							Design System: Implement a design system using tools like Figma or
							Sketch to define and manage design tokens (colors, fonts, spacing,
							etc.) for consistent UI across the app.
						</li>
					</ul>
				</div>
				<div>
					<h3>UX :</h3>
					<ul>
						<li>
							Data filtering is not user friendly
							<br />- Allow manual entry of min and max budget for filtering.
							<br />- Max budget was set to 500 because most of the tournaments
							are in this range. To increase max budget cap to €10,000, we
							should create an exponential slider for better user control (in
							steps of 1, 10, 50, 100...)
							<br />- Implement a "close on scroll" feature to hide the filter
							panel when the user scrolls tournaments.
							<br />- Add a "reset button to clear all filter selections.
						</li>
						<li>
							There is no loading component when the data is being fetched, it
							is important to give feedback to the user
							<br />
						</li>
						<li>
							There is no error handling component, users should be informed
							when something goes wrong...
						</li>
					</ul>
				</div>
				<div>
					<h3>Documentation :</h3>
					<ul>
						<li>
							More components should be added to the storybook and the stories
							should be more detailed and have more controls
						</li>
						<li>
							The readme (README.md) should be more detailed and have more
							information about guidelines, best practices, naming
							conventions...
						</li>
					</ul>
				</div>
				<div>
					<h3>Seo :</h3>
					<ul>
						<li>No SEO strategie was implemented</li>
						<li>
							The poker app should have a sitemap to help search engines to
							index the app
						</li>
						<li>
							The poker app should have a robots.txt to tell search engines
							which pages to index
						</li>
						<li>
							The tournaments should have Rich Results to have a better
							visibility in the search results
						</li>
					</ul>
				</div>
				<div>
					<h3>Testing :</h3>
					<ul>
						<li>
							The poker app was not properly tested in a real devices. It should
							be tested on mobile and tablet.
						</li>
						<li>
							The poker app should have e2e tests to make sure the app is
							working as expected
						</li>
						<li>
							The storybook app should have visual tests to make sure there is
							no regression
						</li>
						<li>Test coverage can be improve</li>
					</ul>
				</div>
				<div>
					<h3>Accessibility :</h3>
					<ul>
						<li>The poker app was not tested with a screen reader</li>
						<li>
							To improve the accessibility, the app should have a11y tests
						</li>
						<li>
							The tournament list items should offer a comprehensive description
							of the tournament
						</li>
					</ul>
				</div>
				<div>
					<h3>Internationalization :</h3>
					<ul>
						<li>
							Add support for multiple languages to cater to a wider audience.
						</li>
					</ul>
				</div>
				<div>
					<h3>Performances :</h3>
					<ul>
						<li>
							The app has never been build to production, assets and chunk size
							should be checked to ensure they're optimized for production
						</li>
						<li>
							To improve the user experience (avoid an empty page) server side
							rendering should render a tournament list
						</li>
						<li>
							Images should be adaptive with different "srcset" depending on
							device size
						</li>
						<li>
							The filter algorithm should be fine tuned to optimized performance
						</li>
						<li>
							Implement caching strategies to reduce server load and improve
							response times.
						</li>
						<li>
							Lazy load components or data when needed to enhance initial page
							load performance.
						</li>
					</ul>
				</div>
				<div>
					<h3>Tooling :</h3>
					<ul>
						<li>
							The poker app should have a CI/CD pipeline to automate the
							deployment
						</li>
						<li>
							The monorepo should have commit hooks to ensure the code quality
							and style
						</li>
						<li>
							The monorepo should use an automated dependency updater (like
							Renovate).
						</li>
						<li>
							The api types should be generated from the api schema to avoid
							errors
						</li>
						<li>
							Feature Flags: Implement feature flags to enable controlled
							rollout of new features and experiments without affecting the
							entire codebase.
						</li>
					</ul>
				</div>
				<div>
					<h3>Monitoring :</h3>
					<ul>
						<li>
							The poker app should monitor the performance of the app to detect
							issues
						</li>
						<li>
							The poker app should monitor the user interactions to improve the
							user experience
						</li>
					</ul>
				</div>
			</article>
		</div>
	);
};
export { Readme };
