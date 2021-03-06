import React from 'react'
import PropTypes from 'prop-types'

import theme from './theme'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.grey.darker,
    fontSize: 18,
    fontWeight: 'bold',
  },
  expired: {
    marginLeft: 10,
    padding: '4px 8px',
    color: '#FFFFFF',
    fontSize: 12,
    fontWight: 'bold',
    borderRadius: 2,
    backgroundColor: theme.colors.warning,
  },
}

const MemberName = ({ value, expired }) => (
  <div style={styles.root}>
    <span>{value}</span>
    {expired ? <span style={styles.expired}>Membership Expired</span> : null}
  </div>
)

MemberName.propTypes = {
  value: PropTypes.string,
  expired: PropTypes.bool,
}

MemberName.defaultProps = {
  value: '',
  expired: false,
}

export default MemberName
