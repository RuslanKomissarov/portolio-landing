const TextBlockWithHeader = ({ header, subheader, mainText }) => {
    return (
        <div className='text-center p-10'>
            <h2 className='text-3xl text-cyan-600 font-medium'>{header}</h2>
            <h3 className='text-xl py-2'>{subheader}</h3>
            <p className='text-medium py-5 leading-8 text-gray-800'>
                {mainText}
            </p>
        </div>
    )
}

export default TextBlockWithHeader;