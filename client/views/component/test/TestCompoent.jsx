import React from 'react';

import styled from 'styled-components';

const TestStyle = styled.span`
    font-size: 1.2rem;
    padding: 0.2rem 0.3rem;
    margin-right: 0.1rem;
    &:last-child {
        margin-right: 0rem;
    }
`;

function TestCompoent () {
    return (
        <>
            <TestStyle>
                <div className="test">TestCompoent 입니다.</div>
            </TestStyle>
        </>
    )
}

export default TestCompoent;