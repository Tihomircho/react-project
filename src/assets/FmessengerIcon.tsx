import style from "./FmessengerIcon.module.scss";

interface IconProps {
  widthSize?: number;
  heightSize?: number;
}

const FmessengerIcon: React.FC<IconProps> = ({ widthSize, heightSize }) => {
  return (
    <div className={style.wrapperIconMessenger}>
      <span className={style.btnAnime}></span>
      <svg
        width={`${widthSize}px`}
        height={`${heightSize}px`}
        className={style.wrapperStyle}
        viewBox="0 0 24 24"
        xmlns="http://w3.org"
        fill="#0081ff"
      >
        <path d="M12 2C6.36 2 2 6.14 2 11.25c0 2.92 1.45 5.54 3.74 7.23V22l3.37-1.85c.91.25 1.88.39 2.89.39 5.64 0 10-4.14 10-9.25S17.64 2 12 2zm1.09 11.95l-2.55-2.73-4.97 2.73 5.46-5.8 2.61 2.73 4.91-2.73-5.46 5.8z" />
      </svg>
    </div>
  );
};
export default FmessengerIcon;
