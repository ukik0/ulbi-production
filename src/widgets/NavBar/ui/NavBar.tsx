import { clsx } from '@/shared/lib/helprers/classNames/classNames';
import cl from './NavBar.module.scss';
import { Anchor } from '@/shared/ui/Anchor/Anchor';
import { RoutePaths } from '@/shared/config/routesConfig/routesConfig';

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={clsx({ cls: cl.Navbar, additional: [className] })}>
            <div className={cl.links}>
                <Anchor to={RoutePaths.main} theme="secondary">
                    Главная
                </Anchor>
                <Anchor to={RoutePaths.about} theme="secondary">
                    О нас
                </Anchor>
            </div>

        </div>
    );
};
