import React from 'react';
import { Badge, Avatar, NameTag } from '../../atoms';
import background from '../../_global/background.jpg';
import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.container}>
        <img src={background} alt={'Background'} className={styles.background} />
        
        <div style={{ display: 'flex', padding: '0 30px'}}>
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
        </div>

        <NameTag title={'Web Designer'} right={true}>{'Devin Townsend'}</NameTag>
        <Avatar url={'https://randomuser.me/api/portraits/men/32.jpg'} />
    </header>
);

export default Header;