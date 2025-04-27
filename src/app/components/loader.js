'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
export default function Load(){
    return (
        <>
              <ProgressBar
          height="2px"
          color="purple"
          options={{ showSpinner: true }}
          shallowRouting
        />
        </>
    )
}