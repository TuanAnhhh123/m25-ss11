import { useRouter } from 'next/router';

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  const changeLocale = (newLocale: string) => {
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <select
      onChange={(e) => changeLocale(e.target.value)}
      defaultValue={locale}
    >
      {locales?.map((loc) => (
        <option key={loc} value={loc}>
          {loc === 'en' ? 'English' : 'Vietnamese'}
        </option>
      ))}
    </select>
  );
};

export default LocaleSwitcher;