export interface Clip {
    id: string;
    title: string;
    audioUrl: string;
    duration: number; // duration in seconds
    createdAt: Date;
    userId: string;
}

export interface User {
    id: string;
    username: string;
    profilePictureUrl: string;
    clips: Clip[];
}