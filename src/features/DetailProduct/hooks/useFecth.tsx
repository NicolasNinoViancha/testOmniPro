import React, { useState, useEffect } from "react";
//models
import { StoreItem } from 'src/models';
//constant
const API_URL = 'https://fakestoreapi.com/products';
//hook
const useFecth = (idProduct: number) => {
    //states
    const [data, setData] = useState<StoreItem>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    //functions
    //description : handle event get store items
    const refetch = async (idProduct: number) => {
        setError(false);
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}/${idProduct}`);
            const resJson = await response.json();
            setData(resJson);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    //effects
    useEffect(() => {
        refetch(idProduct || 1);
    }, [idProduct])

    return {
        data,
        loading,
        error,
        refetch
    }
}

export default useFecth;
