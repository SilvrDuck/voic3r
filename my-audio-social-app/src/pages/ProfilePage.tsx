import React, { useEffect, useState } from 'react';
import { getUserProfile, getUserClips } from '../services/clipService';
import ClipCard from '../components/ClipCard';

const ProfilePage = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [clips, setClips] = useState([]);

    useEffect(() => {
        const fetchUserProfile = async () => {
            const profile = await getUserProfile(userId);
            setUser(profile);
        };

        const fetchUserClips = async () => {
            const userClips = await getUserClips(userId);
            setClips(userClips);
        };

        fetchUserProfile();
        fetchUserClips();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.name}'s Profile</h1>
            <p>{user.bio}</p>
            <h2>Audio Clips</h2>
            <div>
                {clips.map(clip => (
                    <ClipCard key={clip.id} clip={clip} />
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;