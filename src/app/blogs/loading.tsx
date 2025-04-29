import Image from "next/image";

export default function Loading() {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center pompiere-font text-2xl font-bold">
            <Image className="" src={"/R.gif"} height={200} width={200} alt="loading" unoptimized/>
            <p>Calm down!! we are fetching blogs..</p>
        </div>
    )
}