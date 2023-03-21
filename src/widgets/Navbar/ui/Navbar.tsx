import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/Applink'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string 
}

export const Navbar: FC<NavbarProps> = ({className}) => {
    const {t} = useTranslation()

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink 
                className={cls.mainLink} 
                to={'/'}
                theme={AppLinkTheme.SECONDARY}
            >
                {t('Главная')}
            </AppLink>
            <AppLink 
                to={'/about'}
                theme={AppLinkTheme.SECONDARY}
            >
                {t('О нас')}
            </AppLink>
        </div>
    </div>
  )
}
