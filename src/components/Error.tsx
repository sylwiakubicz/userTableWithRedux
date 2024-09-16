
interface ErrorProps {
    errorMsg?: string;
}

function Error({errorMsg} : ErrorProps) {
    return (
        <h2 className="text-lg dark:text-dark-text pb-2 pl-6">
            {errorMsg || 'An unknown error occurred.'}
        </h2>
    )
}

export default Error