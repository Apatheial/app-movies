import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css";

function ScrollToTopButton() {
    
    const [ isVisible, setIsVisible ] = useState<boolean>(false)
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button 
            onClick={scrollToTop} 
            className={ styles.button }
            style={{ display: isVisible ? 'block' : 'none'}}
        > &#9650; </button>
    );
}

export default ScrollToTopButton;
