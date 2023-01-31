import React from 'react'
import CardMedia from '@mui/material/CardMedia';

function CardImage({image}) {
  return (
    <CardMedia
        component="img"
        sx={{
          width: {xs: 80, sm: '100%'},
        }}
        image={image}
        alt="Music card image"
    />
  )
}

export default CardImage