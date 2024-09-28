const TransferIcon = ({
    size = 36,

  }) => (

    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size}
    height={size}
    viewBox="0 0 32 32" 
    >
        <path d="M19.924 10.383a1 1 0 0 0-.217-1.09l-5-5-1.414 1.414L16.586 9H4v2h15a1 1 0 0 0 .924-.617zM4.076 13.617a1 1 0 0 0 .217 1.09l5 5 1.414-1.414L7.414 15H20v-2H5a.999.999 0 0 0-.924.617z"></path>
    </svg>

    // <svg
    //   fill="none"
    //   height={size || height}
    //   viewBox="0 0 32 32"
    //   width={size || width}
    //   {...props}
    // >
    //   <path
    //     clipRule="evenodd"
    //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
    //     fill="currentColor"
    //     fillRule="evenodd"
    //   />
    // </svg>
  );
  

  export default TransferIcon;