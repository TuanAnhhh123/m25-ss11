import { useTranslation } from 'react-i18next';
import LocaleSwitcher from '../components/LocaleSwitcher';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div>
      <LocaleSwitcher />
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}