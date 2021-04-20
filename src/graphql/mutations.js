/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct($input: createProductInput!) {
    createProduct(input: $input) {
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
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct($input: updateProductInput!) {
    updateProduct(input: $input) {
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
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct($input: deleteProductInput!) {
    deleteProduct(input: $input) {
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
    }
  }
`;
