import { Disclosure } from "@headlessui/react";
import DarkModeButton from "../DarkMode/DarkModeButton";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-900 shadow">
      {({ open }) => (
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Main</span>
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="/img/logo.png"
                  alt="logo mobile"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="/img/logo.png"
                  alt="logo desktop"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex items-center justifu-center space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-green-400 text-white dark:bg-gray-100 dark:text-gray-700 font-bold"
                          : "text-gray-700 dark:text-gray-300 hover:bg-green-400 hover:text-white dark:hover:bg-white dark:hover:text-black",
                        "px-3 py-2 rounded text-sm cursor-pointer"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <DarkModeButton />
            </div> */}
          </div>
        </div>
      )}
    </Disclosure>
  );
}

const navigation = [
  { name: "GIỚI THIỆU", href: "#intro", current: true },
  { name: "GIÁO DỤC - TUYỂN SINH", href: "#edu", current: false },
  { name: "360 HOA LƯ", href: "#360", current: false },
  { name: "TIN TỨC", href: "#news", current: false },
  { name: "CÂU HỎI THƯỜNG GẶP", href: "#question", current: false },
  { name: "LIÊN HỆ", href: "#contact", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
