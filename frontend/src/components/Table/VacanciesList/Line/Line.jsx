import ControlButtons from './ControlButtons/ControllButtons.jsx';
import Cells from './Cells/Cells.jsx';

const Line = ({vacancy}) => {
    return (
        <div className={'line'}>
            <Cells vacancy={vacancy}/>
            <ControlButtons vacancyId={vacancy.id}/>
        </div>

    );
};

export default Line;