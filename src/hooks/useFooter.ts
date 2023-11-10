import {useEffect} from "react";

const useFooter = () => {
    useEffect(() => {
        // 在组件加载时设置display样式
        // @ts-ignore
        document.querySelector('.footer').style.display = 'block';

        return () => {
            // 在组件卸载时设置display:none样式

            // @ts-ignore
            document.querySelector('.footer').style.display = 'none';
        };
    }, []);
}

export default useFooter;