import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Power2, TimelineMax, TweenMax } from 'gsap';
import classnames from 'classnames';

// Custom imports and styles
import { Label, FORMSIZE_FULL } from 'components/forms';
import { getSizeStyle } from 'components/forms/withLabel';
import styles from './Dropdown.module.scss';

/**
 * This is a helper component that holds the currently selected value of the dropdown.
 */
const DropdownSelected = ({ children }) => <div className={styles.selected}>{ children }</div>;

/**
 * This wrapper just adds the ability to have a font awesome icon floating to the right.
 */
const DropdownWrapper = ({ children, onClick, onBlur, onFocus, onKeyPress, onKeyUp, disabled, active = false }) => {
  if (disabled) {
    return (
      <div className={classnames(styles.wrapper, styles.wrapperDisabled)}>
        {children}
    
        <FontAwesomeIcon icon={['fas', 'sort']} className={styles.icon} />
      </div>
    )
  } else {
    return (
      <div 
        className={classnames(styles.wrapper, active && styles.wrapperActive)}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        tabIndex={0}
      >
        {children}

        <FontAwesomeIcon icon={['fas', 'sort']} className={classnames(styles.icon, active && styles.iconActive)} />
      </div>
    );
  }
};

/**
 * Main dropdown class.
 * 
 * @param label This label will automatically populate in the correct position.
 * @param placeholder This is the text that shows up inside of the dropdown before a selection is made.
 * @param dataProps Holds all the dropdown data. Extends the type DropdownArray.
 */
class Dropdown extends Component {
  state = {
    active: false,
    disabled: false
  }

  dropdown = React.createRef();
  timeline = new TimelineMax({ paused: true });
  height = 0;
  
  componentDidMount = () => {
    const target = this.dropdown.current;
    this.height = this.dropdown.current.offsetHeight;

    if (this.height >= 500) {
      this.height = 500;
    }

    TweenMax.set(target, { css: { border: '3px solid #f4f5f7', height: 44, opacity: 1, pointerEvents: 'none' }});

    this.timeline
      .set(target, { zIndex: 'initial' }, 0.01)
      .set(target, { height: 44, zIndex: 100000, pointerEvents: 'all' }, 0.015)
      .to(target, 0.25, { boxShadow: '0 0 5px 2px rgba(50, 50, 50, 0.2)', ease: Power2.easeInOut }, 0.02)
      .to(target, 0.30, { height: this.height, ease: Power2.easeInOut, delay: 0.05 }, 0.02);
  }

  buildList = () => {
    const { dataProps } = this.props;

    if (dataProps) {
      return dataProps.map(item => <li key={item.name} onClick={this.handleDropdown} className={styles.dropdownItem}>{ item.name }</li>);
    }
  }

  handleDropdown = (e) => {
    const { input: { onChange }, handleUpdate } = this.props;
    
    if (handleUpdate) {
      handleUpdate(e.currentTarget.innerHTML);
    }

    onChange(e.currentTarget.innerHTML);
  }

  toggleDropdown = () => {
    const { active } = this.state;
    
    if (active) {
      this.timeline.reverse();
    } else {
      this.timeline.play();
    }

    this.setState({ active: !active });
  }

  focusDropdown = () => {
    const target = this.dropdown.current;

    TweenMax.to(target, 0.3, { css: { borderColor: '#5c7aff'}, ease: Power2.easeInOut });
  }

  closeDropdown = () => {
    const { active } = this.state;
    const target = this.dropdown.current;

    TweenMax.to(target, 0.3, { css: { borderColor: '#f4f5f7' }, ease: Power2.easeInOut});
    
    if (active) {
      this.timeline.reverse();
      this.setState({ active: !active });
    }
  }

  handleKeyboard = (e) => {
    const { active } = this.state;

    if (e.charCode === 32) {
      if (active) {
        this.timeline.reverse();
      } else {
        this.timeline.play();
      }

      this.setState({ active: !active });
    }

    if (e.keyCode === 38 && active) {

    }

    if (e.keyCode === 40 && active) {
      console.log('Down');
    }
  }

  render() {
    const { active } = this.state;
    const { input: { value }, label, placeholder, size = FORMSIZE_FULL, required = false } = this.props;
    const style = getSizeStyle(size);

    return (
      <div
        style={{ padding: '0 10px' }}
        className={style}
      >
        <Label dark required={required}>{label}</Label>
        <DropdownWrapper 
          active={active} 
          onClick={this.toggleDropdown} 
          onBlur={this.closeDropdown} 
          onFocus={this.focusDropdown} 
          disabled={this.state.disabled} 
          onKeyPress={this.handleKeyboard}
          onKeyUp={this.handleKeyboard}
        >
          <DropdownSelected>{ value ? value : placeholder }</DropdownSelected>

          <div className={styles.dropdownWrapper} ref={this.dropdown}>
            <ul className={styles.dropdown}>
              { this.buildList() }
            </ul>
          </div>
        </DropdownWrapper>
      </div>
    );
  }
}

export default Dropdown;
