import { useTranslation } from 'react-i18next';

import cl from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <div className={cl.page}>
            {t('Страница не найдена')}
        </div>
    );
};