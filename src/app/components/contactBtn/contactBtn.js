import EmailIcon from '@mui/icons-material/Email';

export default function ContactBtn({text}) {
  return (
    <div className="pt-6 flex justify-center lg:justify-normal">
    <a href="/kontakt" className="contactBtn">
      <div className="svg-wrapper">
          <EmailIcon/>
        </div>
      <span>{text}</span>
    </a>
  </div>
  )
}
