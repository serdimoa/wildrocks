import React from 'react';
const clickhandle = () => {
    console.log('click');
};

const Button = () => (
        <svg width="570px" height="253px" viewBox="0 0 570 253" version="1.1" >
            <title>Group</title>
            <desc>Created with Sketch.</desc>
            <defs>
                <path d="M20.386882,12.99984 L363.612736,12.99984 C373.767824,12.99984 381.999924,21.20771 381.999924,31.333176 L381.999924,49.666222 C381.999924,59.791688 373.767824,67.999616 363.612736,67.999616 L20.386882,67.999616 C10.232176,67.999616 2.000076,59.791688 2.000076,49.666222 L2.000076,31.333176 C2.000076,21.20771 10.232176,12.99984 20.386882,12.99984 Z" id="path-1"/>
                <filter x="-88.5%" y="-558.6%" width="277.0%" height="1265.5%" filterUnits="objectBoundingBox" id="filter-2">
                    <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"/>
                    <feGaussianBlur stdDeviation="102" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
                    <feColorMatrix values="0 0 0 0 0.6156863   0 0 0 0 0.54509807   0 0 0 0 0.45490196  0 0 0 0.77 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"/>
                    <feOffset dx="0" dy="14" in="SourceAlpha" result="shadowOffsetOuter2"/>
                    <feGaussianBlur stdDeviation="16" in="shadowOffsetOuter2" result="shadowBlurOuter2"/>
                    <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.55 0" type="matrix" in="shadowBlurOuter2" result="shadowMatrixOuter2"/>
                    <feMerge>
                        <feMergeNode in="shadowMatrixOuter1"/>
                        <feMergeNode in="shadowMatrixOuter2"/>
                    </feMerge>
                </filter>
                <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="linearGradient-3">
                    <stop stopColor="#94816B" offset="0%"/>
                    <stop stopColor="#E0CBB2" offset="100%"/>
                </linearGradient>
                <path d="M19.386882,1.999683 L362.612736,1.999683 C372.767824,1.999683 380.999924,10.937304 380.999924,21.962682 L380.999924,41.925618 C380.999924,52.950933 372.767824,61.888554 362.612736,61.888554 L19.386882,61.888554 C9.232176,61.888554 1.000076,52.950933 1.000076,41.925618 L1.000076,21.962682 C1.000076,10.937304 9.232176,1.999683 19.386882,1.999683 Z" id="path-4"/>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Artboard" transform="translate(-156.000000, -526.000000)">
                    <g id="header" transform="translate(-4.000000, -6.000000)">
                        <g id="оставить-заявку-копия" transform="translate(253.000000, 618.000000)" style={{cursor:'pointer'}} onClick={clickhandle}>
                            <g id="Group">
                                <g id="тень">
                                    <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"/>
                                    <use fill="#6B5E4E" fillRule="evenodd" xlinkHref="#path-1"/>
                                </g>
                                <g id="верхняя-часть-кнопки">
                                    <use fill="#D3BFA6" fillRule="evenodd" xlinkHref="#path-4"/>
                                    <use fill="url(#linearGradient-3)" fillRule="evenodd" xlinkHref="#path-4"/>
                                    <path strokeOpacity="0.05" stroke="#000000" strokeWidth="3" d="M19.386882,0.499683 L362.612736,0.499683 C373.625044,0.499683 382.499924,10.1351596 382.499924,21.962682 L382.499924,41.925618 C382.499924,53.7530878 373.625035,63.388554 362.612736,63.388554 L19.386882,63.388554 C8.37490119,63.388554 -0.499924,53.7530193 -0.499924,41.925618 L-0.499924,21.962682 C-0.499924,10.1352281 8.37489142,0.499683 19.386882,0.499683 Z"/>
                                </g>
                                <text id="ОСТАВЬТЕ-ЗАЯВКУ-СЕЙЧАС!" fontFamily=".AppleSystemUIFont" fontSize="18.3870968" fontWeight="normal" fill="#FFFFFF">
                                    <tspan x="43" y="40">ОСТАВЬТЕ ЗАЯВКУ СЕЙЧАС!</tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>)


export default Button;