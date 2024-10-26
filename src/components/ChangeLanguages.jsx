import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { useTheme } from './Theme';
function ChangeLanguage() {
    const { i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme(); 
    const handleChange = (event) => {
        i18n.changeLanguage(event.target.value); 
    };

    return (
        <div>
            <select id="language-select" className={theme === 'light' ? 'w-32 bg-transparent h-10 ':'w-32 bg-transparent h-10 text'} onChange={handleChange}>
                <option className={theme === 'light' ? 'text-black' : 'text-black'} value="en">Inglizcha</option>
                <option className={theme === 'light' ? 'text-black' : 'text-black'} value="uz">O'zbekcha</option>
                <option className={theme === 'light' ? 'text-black' : 'text-black'} value="ru">Ruscha</option>
            </select>
        </div>
    );
}

export default ChangeLanguage;