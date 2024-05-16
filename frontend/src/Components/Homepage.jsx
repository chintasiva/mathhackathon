import React from 'react'
import Navbar from "./Navbar"
import HeadSection from "./HeadSection"
import AISection from "./AISection"
import FileUploader from './FileUploader'
export const Homepage = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <HeadSection />
            <AISection />
            <FileUploader />
        </div>
    )
}
