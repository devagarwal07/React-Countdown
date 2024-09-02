// src/components/Countdown.js
import { useState, useEffect } from 'react';

const Countdown = () => {
    const [endDate, setEndDate] = useState('');
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        let interval;
        if (endDate) {
            const calculateCountdown = () => {
                const end = new Date(endDate);
                const now = new Date();
                const timeRemaining = end - now;

                if (timeRemaining <= 0) {
                    clearInterval(interval);
                    setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                    return;
                }

                const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            };

            interval = setInterval(calculateCountdown, 1000);
            return () => clearInterval(interval);
        }
    }, [endDate]);

    const handleChange = (e) => {
        setEndDate(e.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen text-white">
            <input
                type="datetime-local"
                onChange={handleChange}
                className="mb-9 p-2 border rounded bg-transparent absolute top-7 right-7"
            />
            <div className="flex gap-8 justify-center items-center p-10 glass">
                {Object.entries(countdown).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col items-center">
                        <div className="relative">
                            <div
                                className="countdown-item text-9xl font-semibold w-48 text-center"
                            // w-28 ensures that all digits have a constant width.
                            >
                                {value.toString().padStart(2, '0')}
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-gray-600 to-transparent"></div>
                        </div>
                        <div className="text-3xl mt-4 uppercase tracking-widest">
                            {unit.charAt(0).toUpperCase() + unit.slice(1)}
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default Countdown;
