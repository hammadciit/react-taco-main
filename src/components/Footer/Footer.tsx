import { FC } from "react";
import { Link, HStack, Stack, Divider } from "@chakra-ui/react";
import classes from "./Footer.module.css";
import facebook from "../../Assets/fb.svg";
import insta from "../../Assets/insta.svg";
import twitter from "../../Assets/twitter.svg";
import linkedin from "../../Assets/linkedin.svg";
import logo from "../../Assets/logoFooter.svg";

interface IProps {
	
}

export const Footer: FC<IProps> = ({}) => {
  return (
    <div className={classes.footer}>
      <div className={classes.secondaryFooter}>
        <div className={classes.container}>
          <div className={classes.flexBox1}>
            <div className={classes.links}>
              <HStack spacing={{ base: "15px", lg: "30px" }}>
                <Link>Home</Link>
              </HStack>
            </div>
            <div className={classes.icons}>
              <HStack spacing="18px">
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={linkedin} alt="linkedin" />
                <img src={insta} alt="insta" />
              </HStack>
            </div>
          </div>
          <Divider orientation="horizontal" />
         
          <div className={classes.iconsMobile}>
            <HStack spacing="18px">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={linkedin} alt="linkedin" />
              <img src={insta} alt="insta" />
            </HStack>
          </div>
        </div>
        <div className={classes.copyRight}>
          <p>© Taco Truck- All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};
