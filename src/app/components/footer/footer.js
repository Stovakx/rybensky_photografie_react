import InstagramIcon from "@mui/icons-material/Instagram";


export default function Footer() {
  return (
    <div className="footer bg-gray-100 block md:flex mt-6 h-16  md:bottom-0  md:left-0 md:right-0">
      <div className="h-full w-full flex justify-center md:justify-end items-center  mx-auto px-4 sm:px-6 lg:px-8">
        <a href="https://www.instagram.com/photo_rybensky" target="_blank">
          <InstagramIcon className="text-4xl lg:text-xl" />
        </a>
      </div>
    </div>
  );
}
