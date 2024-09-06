import React from 'react';

const MyTheme = React.createContext('light');

export const MyThemeProvider = ({children}) => {
    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const create = () => {};
    const read = () => {};
    const update = () => {};
    const deletex = () => {};

    return (
        <MyTheme.Provider value={{
            theme,
            toggleTheme,
            setTheme,
            create,
            read,
            update,
            deletex,
        }}>
            {children}
        </MyTheme.Provider>
    );
};

export const useMyTheme = () => {
    return React.useContext(MyTheme);
};