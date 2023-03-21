import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [open, setOpen] = useState(false)
    const {t} = useTranslation()

    const onToggle = () => {
        setOpen(prev => !prev)
    }


    return (
        <div className={classNames(cls.Sidebar, {
            [cls.toggle]: open
        }, [className])}>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
            
            <Button
                onClick={onToggle}
            >
                {t('Свернуть')}
            </Button>
        </div>
    );
};
