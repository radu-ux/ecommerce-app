import styled from "styled-components";

import Product from "../components/category/Product";

const ProducstWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1em;
    row-gap: 3em;
`

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2em;
    margin: 1rem 5rem;
    position: relative;
`   

const PageTitle = styled.div`
    font-weight: 700;
    font-size: 2.5em;
`

const CategoryView = ({category}) => { 
    console.log("<CategoryView />");
    
    const products = category.products;

    return (
        <PageWrapper id="products-page-wrapper">
            <PageTitle>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</PageTitle>
            <ProducstWrapper>
                {products.map((product, index) => <Product key={index} product={product} />)}
            </ProducstWrapper>
        </PageWrapper>
    );
};

export default CategoryView;