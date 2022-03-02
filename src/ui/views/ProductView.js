import styled from "styled-components";

const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: auto;
    row-gap: 2em;
    margin: 1rem 5rem;
    position: relative;
    border: 1px solid red;
`   

const GalleryWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0.2em;
    border: 1px solid green;
`;

const MainImg = styled.img` 
    max-width: 500px;
`

const SideImgWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin: auto;
    row-gap: 1em;

    img { 
        width: 100px;
    }
`

const DetailsHeading = styled.div`
    display: flex;
    flex-direction: column;
`;

const DetailsWrapper = styled.div`
    border: 1px solid blue;

`;

const ProductView = ({product}) => { 
    const { id, name, brand, inStock, gallery, prices } = product;

    const renderGallery = () => { 
        return (
            gallery.map((imgUrl, index) => { 
                if(index === 0) {
                    return null;
                }
                return (
                    <img src={imgUrl} 
                         alt={`${id}-img-${index}`}
                         key={`${id}-${index}`}
                    />
                );
            })
        );
    };

    return (
        <PageWrapper>
            <GalleryWrapper nrOfPhoros={gallery.length}>
                <SideImgWrapper>
                    {renderGallery()}
                </SideImgWrapper>
                <MainImg src={gallery[0]} alt={`${id}-main-img`}/>
            </GalleryWrapper>
            <DetailsWrapper>
                <DetailsHeading>
                    <h1>{name}</h1>
                    <h2>{brand}</h2>
                </DetailsHeading>
            </DetailsWrapper>
        </PageWrapper>
    );
}

export default ProductView;