import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

const AboutTab = (props: { url: string | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; position: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined }) => {
    return (
        <div className="flex flex-col items-center">
                <img className="pb-5" src={props.url} alt={`${props.name} image`} />

                <span className="font-semibold sm:text-sm md:text-md lg:text-lg">
                    {props.name}
                </span>

                <span className="sm:text-sm md:text-sm lg:text-md pb-5">
                    {props.position}
                </span>
        </div>
    )
}

export default AboutTab