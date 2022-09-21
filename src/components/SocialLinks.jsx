import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { blue, grey } from "@mui/material/colors";


export default function SocialLinks() {
  return (
    <div>
        <div className="flex justify-center p-3 space-x-10 ">
            <a href="mailto:oluwateniolaoyelakin1@gmail.com" target="_blank" rel="noreferrer">
                <EmailIcon fontSize="large" style={{ color: grey[600] }} />
            </a>
            <a href="https://twitter.com/teni_adee" target="_blank" rel="noreferrer">
                <TwitterIcon fontSize="large" style={{ color: blue[400] }} />
            </a>
            <a href="https://www.linkedin.com/in/oluwateniola-oyelakin-b95a9021a/" target="_blank" rel="noreferrer">
                <LinkedInIcon fontSize="large" style={{ color: blue[700] }} />
            </a>
        </div>
        <div className="flex justify-center font-semibold bg-slate-300">
            @2022 Teniola Oyelakin. All rights reserved.
        </div>
    </div>
    
  );
}
