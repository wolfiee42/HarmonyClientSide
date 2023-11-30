/* eslint-disable react/prop-types */
const Button = ({ children }) => {
    return (
        <button className='btn bg-[#4F6F52] hover:bg-[#739072] text-white'>
            {children}
        </button>
    );
};

export default Button;