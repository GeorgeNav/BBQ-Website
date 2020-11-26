import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, Typography } from '@material-ui/core'
import shortid from 'shortid'

const PagesList = ({
  page,
  setPage,
  pageNames,
}) => {
  const triggerSetPage = (selectedPage) =>
    () => page !== selectedPage && setPage(selectedPage)

  return <List>
    {pageNames.map((pageName) =>
      <ListItem button
        selected={page === pageName}
        onClick={triggerSetPage(pageName)}
        key={shortid.generate()}>
        <Typography
          variant='h5'>
          {pageName}
        </Typography>
      </ListItem>)}
  </List>
}

PagesList.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
  pageNames: PropTypes.array.isRequired,
}

export default PagesList