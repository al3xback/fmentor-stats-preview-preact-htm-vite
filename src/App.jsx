import { html } from 'htm/preact';

import Header from './components/Header/Header.jsx';
import Preview from './components/Preview/Preview.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
	return html`
		<${Header} />
		<main class="main">
			<div class="container">
				<${Preview} />
			</div>
		</main>
		<${Footer} />
	`;
}

export default App;
