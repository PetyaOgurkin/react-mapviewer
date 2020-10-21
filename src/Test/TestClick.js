import React, { useEffect } from 'react'
import { useTest } from './TestContext'

export default function TestClick() {

    const test = useTest()

    useEffect(() => {
        console.log(test, 'fromclick');
    })

    return (
        <div>
            {/* <button onClick={logger}>click</button> */}
        </div>
    )
}
