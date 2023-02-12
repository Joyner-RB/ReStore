import Badge from '@mui/material/Badge';
import { ShoppingCart } from '@mui/icons-material';

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="secondary">
      <ShoppingCart/>
    </Badge>
  );
}