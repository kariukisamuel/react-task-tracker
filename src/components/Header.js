import PropTypes from 'prop-types'
import Button from './Button'


const Header = (props) => {
    return (
      <header className='header'>
          <h5>{props.title}</h5>
          <Button className='btn' color='black' text='Add'/>
         
      </header>
    )
}

Header.defaultProps={
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
// css in js
// const headStyle ={ color: 'green', backgroundColor:'purple'}
export default Header
