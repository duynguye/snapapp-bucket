import React, { Component } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Power2, TimelineMax, TweenMax } from 'gsap';
import classnames from 'classnames';

// Custom imports and styles
import { Label } from '../../forms';
import { getSizeStyle } from '../withLabel';
import { FormSize } from '../';
import styles from './Dropdown.module.scss';

type DropdownArray = {
  name: string;
  type?: string;
};

interface IDropdownProps extends WrappedFieldProps {
  dataProps: DropdownArray[];
  disabled?: boolean;
  handleUpdate?: (value: string) => void;
  label: string;
  placeholder: string;
  required?: boolean;
  size?: FormSize;
}

interface IDropdownWrapperProps {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void | undefined;
  onBlur: () => void | undefined;
  disabled: boolean;
}

interface IDropdownSelectedProps {
  children: React.ReactNode;
}

/**
 * This is a helper component that holds the currently selected value of the dropdown.
 */
const DropdownSelected = ({ children }: IDropdownSelectedProps) => <div className={styles.selected}>{ children }</div>;

/**
 * This wrapper just adds the ability to have a font awesome icon floating to the right.
 */
const DropdownWrapper = ({ children, onClick, onBlur, disabled, active = false }: IDropdownWrapperProps) => {
  if (disabled) {
    return (
      <div className={classnames(styles.wrapper, styles.wrapperDisabled)}>
        {children}
    
        <FontAwesomeIcon icon={['fas', 'sort']} className={styles.icon} />
      </div>
    )
  } else {
    return (
      <div className={styles.wrapper} onClick={onClick} onBlur={onBlur} tabIndex={0}>
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
class Dropdown extends Component<IDropdownProps> {
  state = {
    active: false,
    disabled: false
  }

  private dropdown = React.createRef<HTMLUListElement>();
  private timeline = new TimelineMax({ paused: true });
  private height = 0;
  
  componentDidMount = () => {
    const target: any = this.dropdown.current;
    this.height = this.dropdown.current!.offsetHeight;

    TweenMax.set(target, { css: { pointerEvents: 'none' }});

    this.timeline
      .set(target, { opacity: 0, zIndex: 'initial', visibility: 'hidden' }, 0.01)
      .set(target, { height: 44, opacity: 1, zIndex: 100000, visibility: 'visible', pointerEvents: 'all' }, 0.015)
      .to(target, 0.25, { border: '3px solid #5c7aff;', boxShadow: '0 0 5px 2px rgba(50, 50, 50, 0.2)', ease: Power2.easeInOut }, 0.02)
      .to(target, 0.30, { height: this.height, ease: Power2.easeInOut, delay: 0.05 }, 0.02);
  }

  buildList = () => {
    const { dataProps } = this.props;

    if (dataProps) {
      return dataProps.map(item => <li key={item.name} onClick={this.handleDropdown} className={styles.dropdownItem}>{ item.name }</li>);
    }
  }

  handleDropdown = (e: React.FormEvent<HTMLLIElement>) => {
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

  closeDropdown = () => {
    const { active } = this.state;
    
    if (active) {
      this.timeline.reverse();
      this.setState({ active: !active });
    }
  }

  render() {
    const { active } = this.state;
    const { input: { value }, label, placeholder, size = FormSize.Full, required = false } = this.props;
    const style = getSizeStyle(size);

    return (
      <div
        style={{ padding: '0 10px' }}
        className={style}
      >
        <Label dark required={required}>{label}</Label>
        <DropdownWrapper active={active} onClick={this.toggleDropdown} onBlur={this.closeDropdown} disabled={this.state.disabled}>
          <DropdownSelected>{ value ? value : placeholder }</DropdownSelected>

          <ul className={styles.dropdown} ref={this.dropdown}>
            { this.buildList() }
          </ul>
        </DropdownWrapper>
      </div>
    );
  }
}

export default Dropdown;
