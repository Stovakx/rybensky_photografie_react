import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <div className="footer bg-gray-100 block md:flex mt-6 h-16  md:bottom-0  md:left-0 md:right-0">
      <div className="h-full flex items-center justify-center md:">
        <h3 className="text-2xl lg:text-xl  ">gdpr</h3>
      </div>
      <div className="h-full flex justify-end items-center  mx-auto px-4 sm:px-6 lg:px-8">
        <a href="https://www.instagram.com/photo_rybensky" target="_blank">
          <InstagramIcon className="text-4xl lg:text-xl" />
        </a>
      </div>
    </div>
  );
}
