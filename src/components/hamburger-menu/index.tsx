import cn from 'classnames';
import React, { useCallback, useState } from 'react';

import Footer from '../footer';
import Hamburger from '../hamburger';

import styles from './styles.module.css';

function HamburgerMenu() {
  const [menu, setMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => setMenu(!menu), [menu]);

  const close = useCallback(() => setMenu(false), [menu]);

  return (
    <div>
      <div className={styles.button} onClick={toggleMobileMenu}>
        <Hamburger open={menu} />
      </div>

      <div className={cn(styles.wrapper, menu && styles.open)}>
        <Footer onClick={close} />
      </div>
    </div>
  );
}

export default HamburgerMenu;
