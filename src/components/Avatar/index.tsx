interface AvatarProps {
    url: string;
}

function Avatar(props: AvatarProps) {
    return(
        <div className="w-[52px] h-[52px]">
            <img src={props.url} className="w-full h-full rounded-full object-cover shadow-md"/>
        </div>
    )
}

export default Avatar;