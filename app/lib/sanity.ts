import { createClient } from "next-sanity";
import  imageUrlBuidler  from "@sanity/image-url";

export const client = createClient({
    projectId: "srrawz6s",
    dataset: "production",
    apiVersion  : "2022-03-25",
    useCdn : true,
    });

 const builder = imageUrlBuidler(client)

    export function urlFor(source: any){
        return builder.image(source);
    }