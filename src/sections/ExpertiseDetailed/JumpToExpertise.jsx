import Select from 'react-select';
import expertiseDetails from '../../data/expertiseDetails';
import { useNavigate } from 'react-router-dom';

const ExpertiseNames = Object.keys(expertiseDetails).map(slug => (
    {value: expertiseDetails[slug].route ? expertiseDetails[slug].route : `/expertise/${slug}`, label: expertiseDetails[slug].name}
))

const JumpToExpertise = ({name}) => {

    const navigate = useNavigate();

    return (
        <div className="CustomSelectContainer">
            <label htmlFor="lang">Jump to another expertise: </label>
            <Select
                className="customSelect"
                isSearchable={true} 
                options={ExpertiseNames}
                defaultValue={{value: name, label: name}}
                onChange={e => navigate(e.value)}
            />
        </div>
    )
}

export default JumpToExpertise;