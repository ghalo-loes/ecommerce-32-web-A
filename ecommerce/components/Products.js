import React from 'react'
import {data} from '../utils/data'
import {Box, Card, Grid, GridItem, Image, Link} from '@chakra-ui/react'
// import {Image} from 'next/image'

const Products = () => {
  return (
    <div>
      <Grid templateColumns={{base: "1fr", lg:"repeat(4,1fr)"}} gap={6}>
        {data.products.map((products) => (
          <GridItem>
            <Card>
              <Link href={`/product/${products.id}`}>
              <Image
              key={products.id}
              src={`/images${products.image}`}
              alt={products.title}
              width={230}
              height={230}
              style={{objectFit: "cover"}}
              />
              <Box py={1} px={1}>
                <h3>{products.title}</h3>
                <div>{products.description}</div>
                <div>${products.price}.00</div>
              </Box>
              </Link>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </div>
  )
}

export default Products