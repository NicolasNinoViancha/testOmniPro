import React from "react";
import DetailProduct from '@app/features/DetailProduct/container';
import { PropsDetailProduct } from '@app/features/DetailProduct/models';

const DetailProductScreen = (props: PropsDetailProduct) => (<DetailProduct {...props} />);

export default DetailProductScreen;