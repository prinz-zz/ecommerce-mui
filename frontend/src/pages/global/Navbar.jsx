
import { useDispatch, useSelector } from 'react-redux'
import { Badge, Box, IconButton } from '@mui/material'
import {
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined
} from '@mui/icons-material'

import { useNavigate } from 'react-router-dom'
import { shades } from '../../theme'
import { setIsCartOpen } from '../../state'

export default function Navbar() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    console.log(cart);

    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            width={'100%'}
            height={'60px'}
            backgroundColor={'rgba(255, 255, 255, 0.95)'}
            color={'black'}
            position={'fixed'}
            left={0}
            top={0}
            zIndex={2}
        >
            <Box
                display={'flex'}
                width={'80%'}
                margin={'auto'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                <Box
                    onClick={() => navigate('/')}
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                    color={shades.secondary[500]}
                >
                    eCommerce
                </Box>
                <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    columnGap={'20px'}
                    zIndex={2}
                >
                    <IconButton sx={{ color: 'black' }}>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton sx={{ color: 'black' }}>
                        <PersonOutline />
                    </IconButton>

                    <Badge
                        badgeContent={cart.length}
                        color={'secondary'}
                        invisible={cart.length === 0}
                    >
                        <IconButton onClick={() => dispatch(setIsCartOpen({}))}
                            sx={{ color: 'black' }}>
                            <ShoppingBagOutlined />
                        </IconButton>
                    </Badge>

                    <IconButton sx={{ color: 'black' }}>
                        <MenuOutlined />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}