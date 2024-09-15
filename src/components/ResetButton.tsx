import { Filters } from '../interfaces/filters'

interface ResetButtonProps {
    filters: Filters;
    handleReset: () => void;
}

function ResetButton({filters, handleReset} : ResetButtonProps) {

    const hasActiveFilters : boolean = Object.values(filters).some((value) => value !== '');
    return (
        <button 
            className={"text-end pr-6 pb-2 font-light capitalize cursor-pointer opacity-60 hover:opacity-100 " + 
                (hasActiveFilters ? 'show' : 'hidden')} 
            onClick={() => handleReset()}
        >
            Reset filters
        </button>

    )
}

export default ResetButton