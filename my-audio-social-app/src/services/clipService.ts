import axios from 'axios';
import { Clip } from '../types';

const API_URL = 'https://api.yourservice.com/clips';

export const fetchClips = async (): Promise<Clip[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createClip = async (clipData: Omit<Clip, 'id'>): Promise<Clip> => {
    const response = await axios.post(API_URL, clipData);
    return response.data;
};

export const deleteClip = async (clipId: string): Promise<void> => {
    await axios.delete(`${API_URL}/${clipId}`);
};