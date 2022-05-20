import Button from './Button'
import PropTypes from 'prop-types';


const Header = ({ title, onAdd, ShowAdd }) => {
    return ( 
      <header className = 'header' >
        <h1> { title } </h1> 
       <Button color = { ShowAdd ? 'red' : 'green' }
        text = { ShowAdd ? 'Close' : 'Add' }
        onClick = { onAdd }/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// using CSS in js
// const headerStyle = {
//     color:'red', backgroundColor:'black',
// }
// style={headerStyle} don't forget this

export default Header