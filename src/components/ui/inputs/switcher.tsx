import { useState, useEffect } from 'react';

interface SwitcherProps {
    label: string;
    onChange: (value: boolean) => void;
    options: { yes: string; no: string };
}

const Switcher11 = ({ onChange, options }: SwitcherProps) => {
    const [isChecked, setIsChecked] = useState(false); // Default is 'No'

    // Effect to handle initial value
    useEffect(() => {
        onChange(isChecked); // Notify parent component of the initial value
    }, [isChecked, onChange]);

    const handleCheckboxChange = () => {
        setIsChecked(prev => !prev);
    };

    return (
        <label className="themeSwitcherTwo shadow-card flex flex-col w-full rounded-3xl border border-deep-purple-600 bg-white p-1 ">
            <div className="flex flex-col w-full">
                <div className="flex flex-row w-full">
                    <span
                        className={`flex items-center justify-center w-full rounded-3xl py-2 text-sm font-medium ${!isChecked ? 'text-primary bg-deepPurple text-white' : 'text-body-color'}`}
                    >
                        {options.no}
                    </span>
                    <span
                        className={`flex items-center justify-center w-full rounded-3xl py-2 text-sm font-medium ${isChecked ? 'text-primary bg-deepPurple  text-white' : 'text-body-color'}`}
                    >
                        {options.yes}
                    </span>
                </div>
            </div>
            <input
                type='checkbox'
                className='sr-only'
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
        </label>
    );
};

export default Switcher11;
