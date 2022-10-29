import Image from 'next/image';

const Avatar = ({ src }) => {
    return (
        <div className='relative mx-auto w-80 h-80 mt-20'>
            <Image src={src} alt='avatar' className='rounded-full' layout='fill' objectFit='cover' />
        </div>
    )
}

export default Avatar;