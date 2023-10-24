import React from 'react';
import styled from 'styled-components';


export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <nav>
            <StyledMenu>
                <ul>
                    {props.menuItems.map((item, index) =>
                        <li key={index}><a href="">{item}</a></li>
                    )}
                </ul>
            </StyledMenu>
        </nav>
    );
};

const StyledMenu = styled.header`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`