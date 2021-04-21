/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAllProducts = /* GraphQL */ `
  query GetAllProducts {
    getAllProducts {
      id
      briefDescription
      category
      currentPrice {
        date
        discountAmount
        discountStartDate
        discountEndDate
        discountPrice
        regularPrice
      }
      description {
        allergens
        alcohol
        additionalInformation
        producer
        expiryDate
        ingredients
        imports
        countryOfOrigin
        maintenance
      }
      name
      nutriScore
      nutritionalValues {
        carbs
        energy
        fats
        proteins
        salt
        saturatedFats
        sugar
        fibers
      }
      status
      images
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      briefDescription
      category
      currentPrice {
        date
        discountAmount
        discountStartDate
        discountEndDate
        discountPrice
        regularPrice
      }
      description {
        allergens
        alcohol
        additionalInformation
        producer
        expiryDate
        ingredients
        imports
        countryOfOrigin
        maintenance
      }
      name
      nutriScore
      nutritionalValues {
        carbs
        energy
        fats
        proteins
        salt
        saturatedFats
        sugar
        fibers
      }
      status
      images
    }
  }
`;
