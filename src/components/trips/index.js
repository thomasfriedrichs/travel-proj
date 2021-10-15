import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import  { StaticImage }  from 'gatsby-plugin-image';

import {
  ProductsContainer,
  ProductsHeading,
  ProductsWrapper
} from './TripsElements';

const Trips = () => {
  const data = useStaticQuery(graphql `
    query TripsQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const getTrips = (data) => {
    const tripsArray = [];
    data.allTripsJson.edges.forEach((item, index) => {
      tripsArray.push(
        <div key={index}>
          <StaticImage 
            src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
          /> 
        </div>
      )
    })
    console.log(tripsArray);
    return tripsArray;
  };

  return (
    <>
      <ProductsContainer>
        <ProductsHeading>Heading</ProductsHeading>
        <ProductsWrapper>{getTrips(data)}</ProductsWrapper>
      </ProductsContainer>
    </>
  )
}

export default Trips;
