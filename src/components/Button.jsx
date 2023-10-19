const Button = ({displayName, onClick}) => {
  return (

    <button onClick={onClick} className="btn" >{displayName}</button>
  )
}

export default Button