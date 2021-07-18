import {useRouter} from 'next/router'


const MenuItem = ({title, Icon, active})=>{
    const router = useRouter()

    const navigate = ()=>{
        router.push(`/?sec=${title.toLowerCase()}`)
    }
    return (
            <div onClick={navigate} className="flex flex-col pt-3 justify-center items-center group w-12 sm:w-20 hover:text-white cursor-pointer transition duration-400">
                <Icon className="h-5 mb-1 group-hover:animate-bounce" />
                <p className={`${active ? 'opacity-100': 'opacity-0'} group-hover:opacity-100 transition-all duration-500 uppercase tracking-widest text-sm`}>{title}</p>
            </div>

    )

}

export default MenuItem