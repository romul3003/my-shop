import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { SelectDirectorySections } from '../../redux/directory/directorySelectors'
import MenuItem from '../MenuItem/MenuItem'
import { DirectoryMenuContainer } from './Directory.styles'

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: SelectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
