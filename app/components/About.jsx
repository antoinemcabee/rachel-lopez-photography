import { Image } from "@shopify/hydrogen"
import { Link } from "@remix-run/react"
import { StyledLinkButton } from "~/routes/_index"
import transition from "~/transition"

const About = ({ data }) => {
    return (
        <div className="px-6 pt-12 pb-16 ">
            <Divider className="" />
            <p className="text-xs uppercase mt-12">{data.name || "Rachel Lopez"}</p>
            <h4 className="text-2xl my-2">{data.title || 'About Me'}</h4>
            <Description >{data.descriptionOne || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</Description>
            <Image className="my-6" data={data?.img} src={!data?.image && "https://cdn.shopify.com/s/files/1/0803/7282/6395/files/270528418_1415164945565229_4572411937038109825_n.png"}/>
            <Description styles={"mb-6"}>{data.descriptionOne || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</Description>
            <StyledLinkButton to={`/pages/${data.to_page || 'contact'}`} >Contact</StyledLinkButton>

        </div>
    )
}

export default About

export const Divider = () => {
    return <div className="border-b-[0.5px] border-[#707070] w-full " />
}

export const Description = ({children, styles}) => (
    <p className={`text-xs leading-6 ${styles}`}>{ children }</p>
)