import React from 'react';

interface ClipCardProps {
    title: string;
    duration: number; // duration in seconds
    onPlay: () => void;
}

const ClipCard: React.FC<ClipCardProps> = ({ title, duration, onPlay }) => {
    return (
        <div className="clip-card">
            <h3>{title}</h3>
            <p>Duration: {duration} seconds</p>
            <button onClick={onPlay}>Play</button>
        </div>
    );
};

export default ClipCard;