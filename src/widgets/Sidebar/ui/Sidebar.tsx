import React, { FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [open, setOpen] = useState(false)

    const onToggle = () => {
        setOpen(prev => !prev)
    }


    return (
        <div className={classNames(cls.Sidebar, {
            [cls.toggle]: open
        }, [className])}>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/* <LangSwitcher /> */}
            </div>
            
            <Button
                onClick={onToggle}
            >
                Toggle
            </Button>
        </div>
    );
};
