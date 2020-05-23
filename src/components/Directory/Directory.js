import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { SelectDirectorySections } from '../../redux/directory/directorySelectors'

import './Directory.scss'
import MenuItem from '../MenuItem/MenuItem'

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: SelectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
