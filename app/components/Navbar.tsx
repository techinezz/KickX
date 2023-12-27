"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {Button} from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react'; 
const link = [
    { name: "Home", href: "/" },
    { name: "Men", href: "/Men" },
    { name: "Women", href: "/Women" },
    { name: "Kids", href: "/Kids" },
];

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="text-2xl md:text-4xl font-bold">Kick<span className="text-primary">X</span></h1>
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {link.map((link, idx) => (
                        <div key={idx}>
                            {pathname === link.href ? (
                                <Link className="text-lg font-semibold text-primary" href={link.href}>
                                    {link.name}
                                </Link>
                            ): (
                                <Link className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary" href={link.href}>
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
                <div className=" flex divide-x border-r sm:border-l">
                    <Button variant={"outline"} className="flex flex-col gap-y-1.5 h-12  w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">
                        <ShoppingBag className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"/>
                        <span className="hidden text-xs font-semibold text-gray-600 sm:block">Cart</span>
                    </Button>
                </div>
            </div>

        </header>
    );
}