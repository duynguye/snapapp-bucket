import React, { Component } from 'react';
import { ContextLink } from '../../atoms';
import { PageTitleWithButton } from '../../molecules';
import background from '../../_global/background.jpg';
import styles from './LocalMenu.module.scss';

interface ILocalMenuProps {
    onClick: () => {}
}

interface ILocalMenuState {

}

class LocalMenu extends Component<ILocalMenuProps, ILocalMenuState> {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <PageTitleWithButton onClick={this.props.onClick}>Project Manager</PageTitleWithButton>    
                </div>

                <div className={styles.body}>
                    <ContextLink exact={true} path='/' icon={['fal', 'folder']}>My Workspace</ContextLink>
                    <ContextLink exact={false} path='/projects' icon={['fal', 'rocket']}>Projects</ContextLink>
                    <ContextLink exact={false} path='/proposals' icon={['fal', 'desktop']}>Proposals</ContextLink>
                    <ContextLink exact={false} path='/contracts' icon={['fal', 'file-contract']}>Contracts</ContextLink>
                    <ContextLink exact={false} path='/contests' icon={['fal', 'trophy']}>Contests</ContextLink>
                    <ContextLink exact={false} path='/archives' icon={['fal', 'archive']}>Archives</ContextLink>
                    <ContextLink exact={false} path='/domain' icon={['fal', 'atlas']}>Domain &amp; DNS</ContextLink>
                    <ContextLink exact={false} path='/hosting' icon={['fal', 'server']}>Hosting</ContextLink>
                    <ContextLink exact={false} path='/plugins' icon={['fal', 'plug']}>Plugins</ContextLink>
                </div>

                <img className={styles.background} src={background} alt="Background Image" />
            </div>
        );
    }
}

export default LocalMenu;