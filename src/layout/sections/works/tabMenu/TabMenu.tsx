import React from 'react';
import styled from 'styled-components';
import {theme} from '../../../../styles/Theme';
import {Link} from '../../../../components/Link';


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <nav>
            <StyledTabMenu>
                <ul>
                    {props.menuItems.map((item, index) =>
                        <ListItem key={index}><Link href="">{item}</Link></ListItem>
                    )}
                </ul>
            </StyledTabMenu>
        </nav>
    );
};

const StyledTabMenu = styled.nav`

  ul {
    display: flex;
    //gap: 20px;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    border: 1px solid red;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`

`