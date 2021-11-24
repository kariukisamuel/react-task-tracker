import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    return (
        <div>
             <button style={{backgroundColor:color}}> {text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'green'
}
Button.propTypes ={
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Button
