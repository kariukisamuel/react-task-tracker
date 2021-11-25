import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <div>
             <button className='btn'  style={{backgroundColor:color}} onClick={onClick}> {text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'green'
}
Button.propTypes ={
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button
