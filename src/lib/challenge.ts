
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
	start_date: string;
	end_date: string;
	status: ChallengeStatus;
}