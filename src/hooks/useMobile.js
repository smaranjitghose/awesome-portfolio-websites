/* this custom hook can be reused in different parts of the project
 * it contains the stateful logic of when the window goes to mobile dimensions
 *
 * USAGE:
 *  const [isMobile] = useMobile();
 * 
 *  isMobile is true/false depending on the window size
 */
import { useState, useEffect } from 'react';

const MOBILE_WIDTH = 840;
const useMobile = () => {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        function updateWindowWidth() {
    
            /* the following if, fixes the bug when you are in mobile dimensions with open
             * menu and then you resize to full screen, the menu doesnt close automatically
             * so we listen to the window height, and when it detects mobile mode, it closes the menu
             */
            if(window.innerWidth > MOBILE_WIDTH) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        }
        window.addEventListener('resize', updateWindowWidth);
        updateWindowWidth();
        return () => window.removeEventListener('resize', updateWindowWidth);
    }, []);
    
    return [isMobile];
}

export default useMobile;