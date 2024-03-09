import  { useState, useEffect } from 'react';
import HeroSection from "./components/HeroSection";
import Works from "./components/Works";
import About from "./components/About";




export default function App() {
    const [theme, setTheme] = useState(null);
    useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);
    return (
		<>
			<button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-10 p-1 text-lg bg-blue-500 rounded-md right-2 top-2"
			>
				{theme === 'dark' ? 
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.7 2a10 10 0 1 0 9.8 13.3 1 1 0 0 0-1-1.3H20a8 8 0 0 1-7.6-10.6l.1-.4a1 1 0 0 0-.8-1Z" clipRule="evenodd"/>
                </svg>
                : 
                <svg className="w-6 h-6 text-white text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7 7 5.7 5.7m12.8 12.8L17 17M5 12H3m18 0h-2M7 17l-1.4 1.4M18.4 5.6 17 7.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                </svg>
                }
			</button>
			<div className="min-h-screen bg-white dark:bg-slate-900 font-inter ">
				<div className="w-11/12 max-w-5xl mx-auto">
                    <div className='w-11/12 max-w-5xl mx-auto'>
					<HeroSection />
                    <Works />  
					<About />
                    </div>
					{/*<Works />
					<About />
					<Footer /> */}
				</div>
			</div>
		</>
	);
}

