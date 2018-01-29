import React from 'react'

const Test = ({ match }) => (
    <div>
        {match.params.customerId}
    </div>
)

export default Test