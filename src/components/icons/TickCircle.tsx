import React from 'react'

const TickCircle = ({ w, h }) => {
    return (
        <svg width={w} height={h} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_311_158)">
                <path d="M9 14.6666C13.125 14.6666 16.5 11.6666 16.5 7.99992C16.5 4.33325 13.125 1.33325 9 1.33325C4.875 1.33325 1.5 4.33325 1.5 7.99992C1.5 11.6666 4.875 14.6666 9 14.6666Z" stroke="#20BF55" strokeOpacity="0.65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.8125 7.99995L7.935 9.88661L12.1875 6.11328" stroke="#20BF55" strokeOpacity="0.65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="cli{w,h}p0_311_158">
                    <rect width={w} height={h} fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default TickCircle