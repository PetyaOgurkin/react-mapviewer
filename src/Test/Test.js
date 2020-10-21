import React from 'react'
import TestComponent from './TestComponent';
import { TestProvider } from './TestContext';

export default function Test() {
    return (
        <TestProvider>
            <TestComponent />
        </TestProvider>
    )
}
