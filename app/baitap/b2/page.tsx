

import React from 'react';
import en from './en.json';
import vi from './vi.json';

const messages = {
  en,
  vi
};

const Header = ({ locale }: { locale: 'en' | 'vi' }) => {
  const t = messages[locale];

  return (
    <header>
      <h1>{t.welcome}</h1>
    </header>
  );
};

export default Header;
