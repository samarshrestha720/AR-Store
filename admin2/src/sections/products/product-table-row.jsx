// import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';

// import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { getCategoryName } from './utils';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export default function ProductTableRow({
  selected,
  name,
  avatarUrl,
  category,
  price,
  salePrice,
  productId,
  handleClick,
}) {
  // const [open, setOpen] = useState(null);

  // const handleOpenMenu = (event) => {
  //   setOpen(event.currentTarget);
  // };

  // const handleCloseMenu = () => {
  //   setOpen(null);
  // };

  return (
    <>
      <TableRow hover tabIndex={-1} role="checkbox" selected={selected}>
        <TableCell padding="checkbox">
          <Checkbox disableRipple checked={selected} onChange={handleClick} />
        </TableCell>

        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar alt={name} src={avatarUrl} />
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Stack>
        </TableCell>

        <TableCell>{getCategoryName(category)}</TableCell>

        <TableCell>{price}</TableCell>

        <TableCell align="center">{salePrice ? salePrice : 'null'}</TableCell>

        {/* <TableCell>
          <Label color={(status === 'banned' && 'error') || 'success'}>{status}</Label>
        </TableCell> */}

        <TableCell align="right" sx={{ display: 'flex' }} sortDirection="asc">
          {/* <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton> // this is the 3 dot button at the end of the row */}
          <MenuItem href={`/products/editproduct/${productId}`} component={RouterLink}>
            <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
            View / Edit
          </MenuItem>

          <MenuItem
            onClick={() => console.log('Delete Button Clicked')}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
            Delete
          </MenuItem>
        </TableCell>
      </TableRow>

      {/* <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          View
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover> */}
    </>
  );
}

ProductTableRow.propTypes = {
  avatarUrl: PropTypes.any,
  category: PropTypes.any,
  handleClick: PropTypes.func,
  salePrice: PropTypes.any,
  name: PropTypes.any,
  price: PropTypes.any,
  selected: PropTypes.any,
  status: PropTypes.string,
};
