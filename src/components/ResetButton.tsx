import { Filters } from '../interfaces/filters'
import { AppDispatch, RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { resetUsersFilters } from '../redux/usersFilters/userFiltersSlice';


function ResetButton() {

    const usersFilters = useSelector((state : RootState) => state.userFilters)
    const dispatch = useDispatch<AppDispatch>();


    const hasActiveFilters : boolean = Object.values(usersFilters).some((value) => value !== '');
    return (
        <button 
            className={"text-end pr-6 pb-2 font-light capitalize cursor-pointer opacity-60 hover:opacity-100 " + 
                (hasActiveFilters ? 'show' : 'hidden')} 
            onClick={() => dispatch(resetUsersFilters())}
        >
            Reset filters
        </button>

    )
}

export default ResetButton