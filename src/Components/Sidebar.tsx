import React, { useState, useMemo } from 'react';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  CollapsIcon,
  HomeIcon,
  LogoutIcon,
  UsersIcon,
  WorkorderIcon,
  CategoryIcon,
  ProcedureIcon,
} from './icons';

const menuItems = [
  { id: 1, label: 'Home', icon: HomeIcon, link: '/main/home' },
  {
    id: 2,
    label: 'Work Orders',
    icon: WorkorderIcon,
    link: '/main/workorders',
  },
  { id: 3, label: 'Team & Users', icon: UsersIcon, link: '/main/users' },
  {
    id: 4,
    label: 'Categories',
    icon: CategoryIcon,
    link: '/main/categories',
  },
  {
    id: 5,
    label: 'Procedure Library',
    icon: ProcedureIcon,
    link: '/main/procedures',
  },
];

function Sidebar() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    'h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col',
    {
      'w-80': !toggleCollapse,
      'w-20': toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    'p-4 rounded bg-light-lighter absolute right-0',
    {
      'rotate-180': toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      'flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap',
      {
        'bg-light-lighter': activeMenu?.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-1 gap-4">
            <Image
              src="/img/logo2-removebg-preview.png"
              width="75"
              height="50"
              alt="로고 이미지"
            />
            <span
              className={classNames('mt-2 text-lg font-medium text-text', {
                hidden: toggleCollapse,
              })}
            >
              DX Maintenence
            </span>
          </div>
          {
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
          }
        </div>

        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={menu.label}>
                <Link href={menu.link}>
                  <a
                    className="flex py-4 px-3 items-center w-full h-full"
                    key="a"
                  >
                    <div style={{ width: '2.5rem' }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          'text-md font-medium text-text-light'
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: '2.5rem' }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames('text-md font-medium text-text-light')}>
            <Link href="/">Logout</Link>
          </span>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
