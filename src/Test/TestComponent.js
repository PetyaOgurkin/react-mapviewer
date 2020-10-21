import React, { useEffect, useState } from 'react'
import { useTest } from './TestContext'

export default function TestComponent() {

    const test = useTest()

    useEffect(() => {
        console.log(test);
    })


    return (
        <div>

        </div>
    )
}
