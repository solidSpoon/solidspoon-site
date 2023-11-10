import {twMerge} from "tailwind-merge";

const Footer = () => {
    return (
        <footer
            className={twMerge('w-full h-24 bg-slate-800 text-white')}
        >
            <p>Footer</p>
        </footer>
    )
}

export default Footer