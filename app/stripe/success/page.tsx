import { Button } from "@/components/ui/button";
import { CheckCheck, Link } from "lucide-react";


export default function StripeSuccess() {
    <div className="mt-32 md:mx-w-[50vw] mx-auto">
        <CheckCheck className="h-20 w-20 text-green-500 mx-auto my-6" />
        <div className="text-center">
            <h3 className="text-2xl font-bold">Payment Successful!!!</h3>
            <p>Thanks for your Purchase!!!</p>

            <Button asChild  className="mt-5">
                <Link href="/">
                    <a>Go Home</a>
                </Link>
            </Button>
        </div>

    </div>
}
