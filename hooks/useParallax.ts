import { useEffect, useState } from 'react';

const useParallax = (ref: React.RefObject<HTMLElement>, speed: number) => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        if (ref.current) {
            const top = ref.current.getBoundingClientRect().top;
            setOffset(top * speed);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref]);

    return offset; // Returns the calculated offset for parallax effect
};

export default useParallax;