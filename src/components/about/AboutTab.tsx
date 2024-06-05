const AboutTab = props => {
    return (
        <div className="flex flex-col items-center">
            <div>
                <img src={props.url} alt={`${props.name} image`} />
            </div>

            <div>
                <span className="font-semibold sm:text-sm md:text-md lg:text-lg">
                    {props.name}
                </span>
            </div>

            <div>
                <span className="sm:text-sm md:text-sm lg:text-md">
                    {props.position}
                </span>
            </div>
        </div>
    )
}

export default AboutTab