import './Slider.css';

interface SliderProps {
    options: string[];
    selected: string;
    onChange: (value: string) => void;
    disabled: boolean;
    isMobile: boolean;
}

const Slider = ({ options, selected, onChange, disabled, isMobile }: SliderProps) => {

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
            <div className="slider-thumb" style={thumbStyle} />
        </div>
    );
};

export default Slider;
