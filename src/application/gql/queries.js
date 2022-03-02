import { gql } from "@apollo/client"

export const getCategoryByName = categoryName => gql`
    query { 
        category(input: {title: "${categoryName}"}) { 
        name,
        products {
                id,
                name,
                inStock,
                gallery,
                description,
                category,
                attributes {
                id,
                name,
                type,
                items {
                    displayValue,
                    value,
                    id
                }
                },
                prices{
                currency,
                amount
                },
                brand
            }
        }
    }      
`;

export const getProductById = productId => gql`
    query { 
        product(id: "${productId}") { 
            id,
            name,
            inStock,
            gallery,
            description,
            category,
            attributes {
            id,
            name,
            type,
            items {
                displayValue,
                value,
                id
            }
            },
            prices{
            currency,
            amount
            },
            brand
        }
    }
`;

export const getCurrencies = () => gql`
    query {
        currencies
    }
`;