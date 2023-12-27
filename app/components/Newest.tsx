import { simplifedProduct } from "../interface";
import { client } from "../lib/sanity";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from "lucide-react";

async function getData() {
    const query = `*[_type == "product"][0...3] | order(_createdAt desc) {
        _id,
          price,
        name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;
    const data = await client.fetch(query);  

    return data;
}
export default async function Newest() {
    const data: simplifedProduct[] = await getData();

    return (
        <div className="bg-white">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row ml-4">
            <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
                <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active :bg-gray-200">
                    Men
                </Link>
                <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active :bg-gray-200">
                    Women
                </Link>
                <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active :bg-gray-200">
                    Kids
                </Link>
            </div>
        </div>
        <div className="mx-auto max-w-2x1 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7x1 lg:px-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Our Newest products
            </h2>
  
            <Link className="text-primary flex items-center gap-x-1" href="/all">
              See All{" "}
              <span>
                <ArrowRight />
              </span>
            </Link>
          </div>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
            {data.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageUrl}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>
  
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={`/product/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.categoryName}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

}