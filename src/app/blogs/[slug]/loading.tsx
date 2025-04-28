import Image from "next/image";

export default function Loading() {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-slate-900">
            <Image className="" src={"/R.gif"} height={200} width={200} alt="loading"/>
        </div>
    )
}