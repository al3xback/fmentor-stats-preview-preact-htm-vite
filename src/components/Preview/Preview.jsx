import { html } from 'htm/preact';

import meetingImg from '../../assets/meeting.jpg';
import styles from './Preview.module.css';

export default function Preview() {
	return html`<article class=${styles.preview}>
		<div class=${styles.image}>
			<div class=${styles.inner}>
				<img src=${meetingImg} alt="People at a meeting" />
			</div>
		</div>
		<div class=${styles.content}>
			<h2 class=${styles.title}>
				Get <mark>insights</mark> that help your business grow.
			</h2>
			<p class=${styles.desc}>
				Discover the benefits of data analytics and make better
				decisions regarding revenue, customer experience, and overall
				efficiency.
			</p>
			<ul class=${styles.statuses}>
				<li>
					<span class=${styles.num}>10K+</span>
					<span class=${styles.label}>Companies</span>
				</li>
				<li>
					<span class=${styles.num}>314</span>
					<span class=${styles.label}>Templates</span>
				</li>
				<li>
					<span class=${styles.num}>12M+</span>
					<span class=${styles.label}>Queries</span>
				</li>
			</ul>
		</div>
	</article>`;
}
