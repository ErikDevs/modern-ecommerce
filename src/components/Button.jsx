import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Button = ({displayName, onClick}) => {
  return (

    <button onClick={onClick} className="btn" >{displayName} <span className='arrow'><ArrowForwardIcon className='arrow-icon' /></span></button>
  )
}

export default Button