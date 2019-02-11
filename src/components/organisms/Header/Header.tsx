import React from 'react';
import { Badge, Avatar, NameTag } from '../../atoms';

const Header = () => (
    <header>
        <Badge 
            prefix='fal'
            icon='plus'
        />

        <Badge 
            prefix='fal'
            icon='folder'
            count={3}
        />

        <Badge 
            prefix='fal'
            icon='bell'
            count={123}
        />

        <NameTag title={'Web Designer'} right={true}>{'Devin Townsend'}</NameTag>
        <Avatar url={'https://randomuser.me/api/portraits/men/32.jpg'} />
    </header>
);

export default Header;