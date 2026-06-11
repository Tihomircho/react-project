import style from "./FacebookIcon.module.scss";

interface IconProps {
  widthSize?: number;
  heightSize?: number;
}

const FacebookIcon: React.FC<IconProps> = ({ widthSize, heightSize }) => {
  return (
    <svg
      className={style.iconWrapper}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      id="Icons"
      viewBox="0 0 32 32"
      width={`${widthSize}px`}
      height={`${heightSize}px`}
    >
      <path
        className={style.st1}
        d="M23,0H9C4,0,0,4,0,9v14c0,5,4,9,9,9h14c5,0,9-4,9-9V9C32,4,28,0,23,0z"
      />
      <path
        className={style.st0}
        d="M26.8,15.4C26.6,15.2,26.3,15,26,15h-5v-3.8c0-0.1,0.1-0.2,0.2-0.2H25c0.6,0,1-0.4,1-1V7c0-0.6-0.4-1-1-1h-4  
c-3.3,0-5,2.7-5,6v3h-4c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1h4v12h5V20h3c0.4,0,0.8-0.2,0.9-0.6l2-3C27.1,16.1,27,15.7,26.8,15.4z"
      />
    </svg>
  );
};
export default FacebookIcon;
