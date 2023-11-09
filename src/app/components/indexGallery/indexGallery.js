import Image from "next/image";


export default function IndexGallery() {
  return (
    <div className="gallery grid grid-cols-5 grid-rows-auto gap-3 my-8">
        <div className="grid-item relative h-52 sm:h-72 lg:h-80  col-span-3 md:col-span-2 lg:col-span-1">
            <Image
                src="/gallery/_DSC0194_result.jpg"
                alt=""
                fill={true}
            />
        </div>
        <div className="grid-item relative h-52 sm:h-72 lg:h-80  col-span-3 md:col-span-2 lg:col-span-1">
            <Image
                src="/gallery/_DSC0439_result.png"
                alt=""
                fill={true}
            />
        </div>
        <div className="grid-item relative h-52 sm:h-72 lg:h-80  col-span-3 md:col-span-2 lg:col-span-1">
            <Image
                src="/gallery/_DSC9207_result.jpg"
                alt=""
                fill={true}
            />
        </div>
        <div className="grid-item relative h-52 sm:h-72  lg:h-80  col-span-3 md:col-span-2 md:hidden lg:col-span-1">
            <Image
                src="/gallery/_DSC9401_result.jpg"
                alt=""
                fill={true}
            />
        </div>
        <div className="grid-item relative h-52 sm:h-64 md:h-80 row-span-1 col-span-6 lg:col-span-2">
            <Image
                src="/gallery/_DSC9274_result.jpg"
                alt=""
                fill={true}
            />
        </div>
        <div className="grid-item relative h-52 sm:h-64 md:h-80 row-span-1 col-span-6 lg:col-span-2">
            <Image
                src="/gallery/_DSC9275_result.jpg"
                alt=""
                fill={true}
            />
        </div>
        <div className="grid-item relative h-52 sm:h-64 md:h-80 row-span-1 col-span-6 lg:col-span-2">
            <Image
                src="/gallery/_DSC9276_result.jpg"
                alt=""
                fill={true}
            />
        </div>
        <div className="grid-item relative hidden md:block h-52 sm:72  lg:h-80  col-span-3 md:col-span-2 lg:col-span-1">
            <Image
                src="/gallery/_DSC9401_result.jpg"
                alt=""
                fill={true}
            />
        </div>
        <div className="grid-item relative h-52 sm:72  lg:h-80  col-span-3 md:col-span-2 lg:col-span-1">
            <Image
                src="/gallery/_DSC9379_result.jpg"
                alt=""
                fill={true}
            />
        </div>
        <div className="grid-item relative h-52 sm:72  lg:h-80  col-span-3 md:col-span-2 lg:col-span-1">
            <Image
                src="/gallery/_DSC9383_result.jpg"
                alt=""
                fill={true}
            />
        </div>
        <div className="grid-item relative h-52 sm:72  lg:h-80  col-span-3 md:col-span-2 lg:col-span-1">
            <Image
                src="/gallery/hex-1_result.jpg"
                alt=""
                fill={true}
            />
        </div>
        <div className="grid-item relative h-52 sm:72  lg:h-80  col-span-3 md:col-span-2 lg:col-span-1">
            <Image
                src="/gallery/_DSC9207_result.jpg"
                alt=""
                fill={true}
            />
        </div>
    </div>
  );
}
