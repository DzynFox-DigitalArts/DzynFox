import Select from 'react-select';
import expertiseDetails from '../../data/expertiseDetails';

const selectOptions = [
    {value: 'hindi', label: 'Hindi'},
    {value: 'English', label: 'English'},
    {value: 'CHinese', label: 'CHinese'},
]

const ExpertiseNames = Object.keys(expertiseDetails).map(name => (
    {value: name, label: name}
))

const JumpToExpertise = ({name}) => {
    return (
        <div className="CustomSelectContainer">
            <label htmlFor="lang">Jump to another expertise: </label>
            <Select
                className="customSelect"
                isSearchable={true} 
                options={ExpertiseNames}
                defaultValue={{value: name, label: name}}
                onChange={e => window.location = `/expertise/${e.value}`}
            />
        </div>
    )
}

export default JumpToExpertise;