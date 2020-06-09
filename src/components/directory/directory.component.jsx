import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import { createStructuredSelector } from 'reselect';
import { SelectDirectorySections } from '../../redux/directory/directory.selector';
import { connect } from 'react-redux';

const Directory = ({sections}) => (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
  
);

const mapStateToProps = createStructuredSelector({
  sections : SelectDirectorySections
});

export default connect(mapStateToProps)(Directory);
