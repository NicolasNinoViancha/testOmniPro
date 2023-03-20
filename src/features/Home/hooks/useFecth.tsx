import React, { useState, useEffect } from "react";
//models
import { StoreItem } from 'src/models';
//constant
const API_URL = 'https://fakestoreapi.com/products';
const LIMIT = 10;
//hook
const useFecth = (endPoint?: string) => {
    //states
    const [data, setData] = useState<StoreItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(LIMIT);
    const [isAll, setIsAll] = useState<boolean>(false);
    //functions
    //description : handle event get store items
    const refetch = async (endPoint?: string) => {
        setError(false);
        setLoading(true);
        try {
            const response = await fetch(`${API_URL}${endPoint ? endPoint : `?limit=${LIMIT}`}`);
            const resJson = await response.json();
            setData(resJson);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    //description : handle event fecht more
    const fetchMore = async () => {
        const verifyIsAll = isAll;
        if (verifyIsAll)
            return;
        setIsLoadingMore(true);
        setError(false);
        try {
            const response = await fetch(`${API_URL}?limit=${LIMIT * limit}`);
            const resJson = await response.json();
            const newItems = resJson.slice(LIMIT * limit - limit, LIMIT * limit),
                verify = newItems.length === 0;
            setIsAll(verify);
            if (verify)
                return;
            setLimit(prev => prev + 1);
            setData(prev => ([...prev, ...newItems]));
        } catch (error) {
            setError(true);
        } finally {
            setIsLoadingMore(false);
        }
    }
    //effects
    useEffect(() => {
        refetch(endPoint || '');
    }, [endPoint])

    return {
        data,
        loading,
        isLoadingMore,
        error,
        refetch,
        fetchMore
    }
}

export default useFecth;
