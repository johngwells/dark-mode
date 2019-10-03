import React, { useState, useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false)

  useEffect(() => {
    // check if value is false or true
    // if true add class 'dark-mode' to the body
    // if false remove class from the body
    darkMode
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode')
  }, [darkMode])
  
  return [darkMode, setDarkMode]
}
