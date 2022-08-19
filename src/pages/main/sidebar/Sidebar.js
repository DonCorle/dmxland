import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Brand */}
          <Link href="/main/home/">
            <a className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-2xl uppercase font-bold p-4 px-0">
              <img src="/logo2-removebg-preview.png" width="200" height="200" />
            </a>
          </Link>

          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded '
            }
          >
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blue-500 text-xl uppercase font-bold block pt-1 pb-4 no-underline">
              Main Menu
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/main/home/">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-base uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-base"></i>{' '}
                    Work Orders
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/main/home/">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-base uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-base"></i>{' '}
                    Requests
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/main/home/">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-base uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-base"></i>{' '}
                    Procedure Template
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blue-500 text-xl uppercase font-bold block pt-1 pb-4 no-underline">
              Settings
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/main/home/">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-base uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-base"></i>{' '}
                    Team
                  </a>
                </Link>
              </li>
              <li className="items-center">
                <Link href="/main/home/">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-base uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-base"></i>{' '}
                    Custom Fields
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
