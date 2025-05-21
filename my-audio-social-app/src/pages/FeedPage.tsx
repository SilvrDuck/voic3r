import React, { useEffect, useState } from 'react';
import ClipCard from '../components/ClipCard';
import { fetchClips } from '../services/clipService';

const FeedPage: React.FC = () => {
    const [clips, setClips] = useState([]);

    useEffect(() => {
        const getClips = async () => {
            const fetchedClips = await fetchClips();
            setClips(fetchedClips);
        };

        getClips();
    }, []);

    return (
        <div className="feed-page">
            <h1>Audio Clips Feed</h1>
            <div className="clips-container">
                {clips.map(clip => (
                    <ClipCard key={clip.id} clip={clip} />
                ))}
            </div>
        </div>
    );
};

export default FeedPage;