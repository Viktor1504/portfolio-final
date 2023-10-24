import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/images/photo.jpeg'
import {FlexWrapper} from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Victor Denisevich</Name>
                    <MainTitle>A Web Developer</MainTitle>
                </div>
                <Photo src={photo} alt="photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #f5b7b7;
`

const Photo = styled.img`
  width: 350px;
  height: 450px;
  object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`