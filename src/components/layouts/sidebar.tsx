'use client';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import IconCaretsDown from "../icon/icon-carets-down";
import { useDispatch, useSelector } from 'react-redux';
import {IRootState} from '../../../store'
import {toggleSidebar} from '../../../store/themeConfigSlice'
import { usePathname } from "next/navigation"; 
import PerfectScrollbar from 'react-perfect-scrollbar';
import IconMenuDashboard from "../icon/icon-menu-dashboard";
import IconCaretDown from "../icon/icon-caret-down";
import AnimateHeight from 'react-animate-height';

function SideBar() {
    const dispatch = useDispatch();
    const pathname = usePathname();
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        setActiveRoute();
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
    }, [pathname]);

    const setActiveRoute = () => {
        let allLinks = document.querySelectorAll('.sidebar ul a.active');
        for (let i = 0; i < allLinks.length; i++) {
            const element = allLinks[i];
            element?.classList.remove('active');
        }
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        selector?.classList.add('active');
    };

  return (
    <div>
      <nav className="sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] transition-all duration-300">
        <div className="h-full bg-white dark:bg-black">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              <img
                className="ml-[5px] w-8 flex-none"
                src="/assets/images/logo.svg"
                alt="logo"
              />
              <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">
                VRISTO
              </span>
            </Link>

            <button
                type="button"
                className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                onClick={() => dispatch(toggleSidebar())}
            >
                <IconCaretsDown className="m-auto rotate-90" />
            </button>
          </div>
          <PerfectScrollbar>
          <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
                <li className="menu nav-item">
                    <button type="button" className={`${currentMenu === 'dashboard' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('dashboard')}>
                        <div className="flex items-center">
                            <IconMenuDashboard className="shrink-0 group-hover:!text-primary" />
                            <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{t('dashboard')}</span>
                        </div>

                        <div className={currentMenu !== 'dashboard' ? '-rotate-90 rtl:rotate-90' : ''}>
                            <IconCaretDown />
                        </div>
                    </button>

                    <AnimateHeight duration={300} height={currentMenu === 'dashboard' ? 'auto' : 0}>
                        <ul className="sub-menu text-gray-500">
                            <li>
                                <Link href="/">{t('sales')}</Link>
                            </li>
                            <li>
                                <Link href="/analytics">{t('analytics')}</Link>
                            </li>
                            <li>
                                <Link href="/finance">{t('finance')}</Link>
                            </li>
                            <li>
                                <Link href="/crypto">{t('crypto')}</Link>
                            </li>
                        </ul>
                    </AnimateHeight>
                </li>

                

                
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
}

export default SideBar;
