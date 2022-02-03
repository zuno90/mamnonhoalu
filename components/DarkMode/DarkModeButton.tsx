import { useState } from 'react'
import ToggleDarkMode from './ToggleDarkMode'

export default function DarkModeButton() {
    const [colorTheme, setTheme]: any = ToggleDarkMode()
    const [enabled, setEnabled] = useState(colorTheme === "dark" ? false : true)

    const handleToggle = () => {
        setTheme(colorTheme)
        setEnabled(!enabled)
    }

    return (
        <div
            onClick={handleToggle}
            className="cursor-pointer inline-flex"
        >
            <svg className={classNames(enabled ? 'text-gray-600' : 'text-yellow-800')} width="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="4" />
                <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
            </svg>
            <span className={classNames(enabled ? 'text-gray-600' : 'text-gray-300', "mx-2")}>/</span>
            <svg className={enabled ? 'text-white' : 'text-gray-300'} width="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
            </svg>
        </div>
    )
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
