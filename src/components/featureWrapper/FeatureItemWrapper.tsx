export interface FeatureItemWrapperProps {
    children?: string;
}

const FeatureTitle = ({children}) => {
    return (
        <h3 className="text-4xl font-bold text-center">{children}</h3>
    );
}
const FeatureDescription = ({children}) => {
    return (
        <p className="text-center text-xl max-w-lg">{children}</p>
    );
}

const FeatureImage = ({src, alt}) => {
    return (
        <img src={src} alt={alt} className="w-full md:max-w-screen-md rounded-lg drop-shadow-xl shadow-black"/>
    );
}

const FeatureItemWrapper = ({children}) => {
    return (
        <div className="flex flex-col items-center gap-2">
            {children}
        </div>
    );
}

export {FeatureTitle, FeatureDescription, FeatureImage,FeatureItemWrapper};