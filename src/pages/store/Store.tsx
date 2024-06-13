import Welcome from "../../components/Welcome/Welcome";
import Card2 from "../../components/CardList/card2";
import Changing from "../../components/changingimg/Changing";
import ProductList from "../../components/productlst";
import React from "react";

type Props = {};

const Store: React.FC = ({}: Props) => {
  return (
    <React.Fragment>
      <Welcome />
      <Card2 />
      <Changing />
      <ProductList />
    </React.Fragment>
  );
};

export default Store;
