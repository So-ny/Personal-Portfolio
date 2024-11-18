/**
 * @copyright 2024 Syon Chau
 * @license Apache-2.0
 */


/**
 * Node Modules
 */
import PropTypes from "prop-types";


/**
 * Primary Button
 */

const ButtonPrimary = ({
    href,
    target = "_self",
    label,
    icon,
    classes
}) => {
  return (
    <div>Button</div>
  )
}

ButtonPrimary.proptypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

export{
    ButtonPrimary
}