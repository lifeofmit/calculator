

const getStyleName = btn => {
    const className = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
    }
    return className[btn]
}

const Button = ({ value}) => {
    const handleBtnClick = () => {
        console.log(value);
    }

  return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button