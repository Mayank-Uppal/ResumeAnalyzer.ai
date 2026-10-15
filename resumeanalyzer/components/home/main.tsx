"use client"
import { useState } from 'react'
import { Button } from '../ui/button' // add near other imports
import { DialogDemo } from './login'

const subheading = "Stop getting filtered out by automated recruiters—optimize your keywords, fix formatting errors, and tailor your CV to any job description effortlessly."

const features: Array<string> = ["Instant ATS Compatibility Score", "Job Description Matcher", "AI Bullet Optimizer"]

export default function Main() {
    const [open,setOpen]=useState<boolean>(false);
    return (
        <div className='flex flex-col h-screen justify-center items-center '>
            <p className='font-mono text-4xl text-white font-bold drop-shadow-md'>
                Resume Analyzer.ai
            </p>

            <p className='font-mono text-center max-w-2xl text-md text-slate-400 mt-4'>
                {subheading}
            </p>

            <Button variant="secondary" size="lg" onClick={() => setOpen(true)} className='mt-4 px-4 font-mono'>
                Get Started
                </Button>

        {open && <DialogDemo open={open} setOpen={setOpen}/>}
        </div>


    )
}

