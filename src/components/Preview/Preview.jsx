import { html } from 'htm/preact';

import meetingImg from '../../assets/meeting.jpg';
import styles from './Preview.module.css';

export default function Preview() {
	return html`<article className=${styles.preview}>
		<div className=${styles.image}>
			<div className=${styles.inner}>
				<img src=${meetingImg} alt="People at a meeting" />
			</div>
		</div>
		<div className=${styles.content}>
			<h2 className=${styles.title}>
				Get <mark>insights</mark> that help your business grow.
			</h2>
			<p className=${styles.desc}>
				Discover the benefits of data analytics and make better
				decisions regarding revenue, customer experience, and overall
				efficiency.
			</p>
			<ul className=${styles.statuses}>
				<li>
					<span className=${styles.num}>10K+</span>
					<span className=${styles.label}>Companies</span>
				</li>
				<li>
					<span className=${styles.num}>314</span>
					<span className=${styles.label}>Templates</span>
				</li>
				<li>
					<span className=${styles.num}>12M+</span>
					<span className=${styles.label}>Queries</span>
				</li>
			</ul>
		</div>
	</article>`;
}
