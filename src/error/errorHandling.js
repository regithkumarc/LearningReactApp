import React from 'react'
import BuggyCounter from './buggyCounter'
import ErrorBoundary from './errorBoundary'
export default function ErrorHandling() {
    return (
        <div>
            <p>Example of Error Boundries</p>
            <ErrorBoundary>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
        </div>
    )
}