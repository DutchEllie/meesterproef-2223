
export enum ChallengeStatus {
	OPEN = 'OPEN',
	CLOSED = 'CLOSED',
	FINISHED = 'FINISHED',
	DRAFT = 'DRAFT',
	HIDDEN = 'HIDDEN',
	PUBLISHED = 'PUBLISHED'
}

export interface Challenge {
	id: string;
	title: string;
	description: string;
	image: string;
	start_date: string;
	end_date: string;
	status: ChallengeStatus;
	creators: number;
	entries: number;
	creators_last_week: number;
	entries_last_week: number;
}

// TODO: in the future, this is best for getting stuff from the db
//export class ChallengeImpl implements Challenge {
//}