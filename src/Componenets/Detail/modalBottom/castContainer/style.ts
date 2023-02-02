import styled from "styled-components";


export const CastContainer = styled.div`
    padding: 4px 0;
    border-radius: 10px;
    @media screen and  (min-width: 1256px) {
        margin-right: 3rem;
        margin-bottom: 5rem;
    };
    @media screen and (max-width: 600px)and (min-width: 555px) {
        margin-right: 2rem;
        margin-bottom: 5rem;
    };
    @media screen and (max-width: 587px) and (min-width: 300px) {
        margin-bottom: 5rem;
    };
`;