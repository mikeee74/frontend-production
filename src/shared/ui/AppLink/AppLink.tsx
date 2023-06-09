import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames'
import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = ({
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => {


    return (
        <Link 
            className={classNames(cls.AppLink, {}, [className, cls[theme]])} 
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
