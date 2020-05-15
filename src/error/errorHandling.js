import React from 'react'
import BuggyCounter from './buggyCounter'
import ErrorBoundary from './errorBoundary'
export default function ErrorHandling() {
    return (
        <div>
            <p>Example of Error Boundries</p>
            <ErrorBoundary>
                <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
                <BuggyCounter />
                <BuggyCounter />
            </ErrorBoundary>
        </div>
    )
}