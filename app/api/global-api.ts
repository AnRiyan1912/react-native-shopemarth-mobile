import { request, gql } from "graphql-request";
import { constans } from "../utils/Constants";

export const getSlider = async () => {
  const document = gql`
    query Products {
      products {
        id
        productName
        img {
          url
        }
      }
    }
  `;
  await request(constans.masterUrl, document);
};
