import PropTypes from 'prop-types'
import Button from './Button'

const onClick =()=>{
   console.log('clicked')
}  
const Header = ({title,onAdd,showAdd}) => {
    return (
      <header className='header '>
          <h5>{title}</h5>
          <Button color='black' text='Add' onClick={onAdd}  />
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
