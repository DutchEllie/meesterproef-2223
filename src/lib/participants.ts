export interface Participant {
    profilePicture: string,
    creator: string,
    creatorhandle: string,
    status: 'handed-in' | 'registered',
    submitDate: Date,
    yesno: boolean,
    feedback: number | undefined
}