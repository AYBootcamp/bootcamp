import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import styled from 'styled-components'

import { StateCode } from '../constants'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks'
import { fetchParks, isDataLoading, updateStateFilter } from '../redux/parks'

const StateCodeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    > * {
        width: 80px;
    }
`

const FilterByState = () => {
    /* ===========================
     Hooks
     ============================= */
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector((state) => isDataLoading(state))
    const filterByStateCode = useAppSelector(
        (state) => state.parks.filters.filterByStateCode
    )

    /* ===========================
     Handlers
     ============================= */
    const handleFilterByState = (state: string) => {
        const checked = filterByStateCode.includes(state)
        const newFilters = [...filterByStateCode]

        if (checked) {
            const index = newFilters.indexOf(state)
            newFilters.splice(index, 1)
        } else {
            newFilters.push(state)
        }

        dispatch(updateStateFilter(newFilters))
        dispatch(fetchParks({ reset: true }))
    }

    /* ===========================
     JSX
     ============================= */
    return (
        <StateCodeContainer>
            {StateCode.map((code, index) => (
                <FormGroup
                    aria-disabled={isLoading}
                    key={`state-code-${code}-${index}`}
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                onClick={() => handleFilterByState(code)}
                                value={code}
                                checked={filterByStateCode.includes(code)}
                            />
                        }
                        label={code}
                    />
                </FormGroup>
            ))}
        </StateCodeContainer>
    )
}

export default FilterByState
