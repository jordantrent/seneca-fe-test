import React, { useState, useEffect } from 'react';
import './Slider.css';

interface SliderProps {
    options: string[];
    selected: string;
    onChange: (value: string) => void;
    disabled: boolean;
}

const Slider: React.FC<SliderProps> = ({ options, selected, onChange, disabled }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 480);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const selectedIndex = options.indexOf(selected);

    const thumbWidth = selected ? 100 / options.length : 0;
    const thumbLeft = selected ? (selectedIndex * 100) / options.length : 0;

    const thumbTop = isMobile && selected ? `${(selectedIndex * 100) / options.length}%` : '0';
    const thumbHeight = isMobile && selected ? `${100 / options.length}%` : '0';

    const thumbStyle = isMobile
        ? { top: thumbTop, height: thumbHeight }
        : { left: `${thumbLeft}%`, width: `${thumbWidth}%` };

    return (
        <div className="slider-container">
            <div className="slider-options">
                {options.map((option) => (
                    <button
                        key={option}
                        className={`slider-option ${option === selected ? 'selected' : ''}`}
                        onClick={() => onChange(option)}
                        disabled={disabled}
                    >
                        {option}
                    </button>
                ))}
            </div>
            <div
                className="slider-thumb"
                style={thumbStyle}
            />
        </div>
    );
};

export default Slider;
