import React from 'react'

const FilterList = ({suggestedList, setsearchInput}) => {

const handleClick = id => setsearchInput(id)

    return (
        <ul>
            {
                suggestedList?.map(location => (
                    <li onClick={() => handleClick(location.id)} key={location.id}>{location.name}</li>
                ))
            }
        </ul>
    )
}

export default FilterList