

export default function News() {
    return (
        <div className='relative'>
            <h3 className="font-bold text-3xl text-center">TIN TỨC</h3>
            <img src="/img/bg-tintuc-left.png" alt="" className='z-[-1] sm:w-fit h-full absolute top-0 left-0' />
        </div>
    )
}

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}