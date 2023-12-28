"use client";

import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { urlFor } from '../lib/sanity';

export interface ProductCart {
    name: string;
    price: number;
    description: string;
    currency: string;
    image: any;
}

export default function AddToBag({name, price, description, currency, image}: ProductCart) {

    const { addItem, handleCartClick } = useShoppingCart();

    const product = {
        name: name,
        price: price,
        description: description,
        currency: currency,
        image: urlFor(image).url(),
        id: "adkaod",

    };

    return <Button onClick={() => {
        addItem(product),
        handleCartClick();
    }}>Add to Bag</Button>
}