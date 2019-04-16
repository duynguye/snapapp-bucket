import React from 'react';

import styles from './UserCard.module.scss';

interface IUserCardProps {
  image?: string;
  name?: string;
  tags?: [];
  title?: string;
}

const UserImage = ({ src }: { src: string }) => (
  <img src={src} className={styles.avatar} />
);

const ColoredTag = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return <span className={styles.tag} style={{ backgroundColor: `rgba(${red}, ${green}, ${blue}, 1)` }}></span>;
};

const UserName = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className={styles.name}>{ children }</p>
  );
}

const UserTitle = ({ children }: { children: React.ReactNode }) => (
  <p className={styles.title}>{ children }</p>
);

export default ({}: IUserCardProps) => (
  <div className={styles.container}>
    <UserImage src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`} />
    
    <div className={styles.wrapper}>
      <UserName>Bryan Clayton<ColoredTag /><ColoredTag /></UserName>
      <UserTitle>project manager</UserTitle>
    </div>
  </div>
)