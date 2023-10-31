import React from 'react';
import {Icon} from '../../components/icon/Icon';
import {FlexWrapper} from '../../components/FlexWrapper';
import {S} from './Footer_Styles'

const socialItemsData = [
    {
        iconId: 'instagram'
    },
    {
        iconId: 'telegram'
    },
    {
        iconId: 'vk'
    },
    {
        iconId: 'linkedin'
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Victor</S.Name>
                <S.SocialList>
                    {socialItemsData.map((s, item) => {
                        return (
                            <S.SocialItem key={item}>
                                <S.SocialLink>
                                    <Icon iconId={s.iconId}
                                          height={'21px'}
                                          width={'21px'}
                                          viewBox={'0 0 21 21'}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Victor Denisevich, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};
