import type { PageLoad } from './$types';

export const load = (async ({ url }) => {

	const feedbackParam = url.searchParams.get('feedback');

	switch (feedbackParam) {
		case 'speed':
			return {
				feedbackType: 'speed'
			}
		case 'acc':
			return {
				feedbackType: 'acc'
			}
		case 'medals':
			return {
				feedbackType: 'medals'
			}
		default:
			return {
				feedbackType: 'none'
			}
	}
}) satisfies PageLoad;