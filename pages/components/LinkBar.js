const LinkBar = ({links}) => {
    return(
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            {links.map(link => (
                <a key={link.name} href={link.href}>{link.element}</a>
                ))}
        </div>
    )
}

export default LinkBar;