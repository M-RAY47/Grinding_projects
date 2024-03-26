const TweetLogo = (color) => {
  console.log(color)
  return (
    <>
      <svg
        fill="none"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M0 0h512v512H0z" fill={color} />
        <path
          clipRule="evenodd"
          d="M192.034 98H83l129.275 170.757L91.27 412h55.908l91.521-108.34 81.267 107.343H429L295.968 235.284l.236.303L410.746 99.994h-55.908l-85.062 100.694zm-48.849 29.905h33.944l191.686 253.193h-33.944z"
          fill="#fff"
          fillRule="evenodd"
        />
      </svg>
    </>
  );
};

export default TweetLogo;

