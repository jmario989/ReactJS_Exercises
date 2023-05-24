import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import pt from "prop-types";

import VISIBILITY_TYPES from '../const';
const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

function getButtonVariant(visibilityType, currentVisibilityType){
    return visibilityType === currentVisibilityType ? "dark" : "outline-dark";
}

function VisibilityToolbar({ visibilityType, onVisibilityChange }){

    return (
        <ToggleButtonGroup type="radio" name="visibility" defaultValue={ALL} className="mt-3" onChange={onVisibilityChange} >
            <ToggleButton id={ALL} value={ALL} variant={getButtonVariant(visibilityType, ALL)}>All</ToggleButton>
            <ToggleButton id={ACTIVE} value={ACTIVE} variant={getButtonVariant(visibilityType, ACTIVE)}>Active</ToggleButton>
            <ToggleButton id={COMPLETED} value={COMPLETED} variant={getButtonVariant(visibilityType, COMPLETED)}>Completed</ToggleButton>
        </ToggleButtonGroup>
    );

}

VisibilityToolbar.propTypes = {
    visibilityType: pt.string,
    onVisibilityChange: pt.func
}

export default VisibilityToolbar;