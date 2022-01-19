import Select from 'react-select';
import YoutubeEmbed from '../../components/YoutubeEmbed';

import {useState} from 'react'

const selectOptions = [
    {value: 'hindi', label: 'Hindi'},
    {value: 'english', label: 'English'},
]

const WhyUs = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState('english')

    return(
        <section className="whyUs">
            <h1 className="section-header marker">Why Choose Us?</h1>
            <div className="whyUsContent">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iste vero tenetur autem. Sequi, iusto sunt provident aperiam voluptatum at.</p>
                <div className="CustomSelectContainer">
                    <label htmlFor="lang">Select Your Preferred Language: </label>
                    <Select
                        className="customSelect"
                        isSearchable={false} 
                        options={selectOptions}
                        defaultValue={{value: 'english', label: 'English'}}
                        onChange={e => setSelectedLanguage(e.value)}
                    />
                </div>
                <div className="whyUsTilesContainer">
                    {
                        selectedLanguage === 'english' ? 
                        <>
                            <YoutubeEmbed embedId="gsnqXt7d1mU" />
                            <YoutubeEmbed embedId="gsnqXt7d1mU" />
                            <YoutubeEmbed embedId="gsnqXt7d1mU" />
                            <YoutubeEmbed embedId="gsnqXt7d1mU" />
                        </>
                        :
                        <>
                            <YoutubeEmbed embedId="6stlCkUDG_s" />
                            <YoutubeEmbed embedId="6stlCkUDG_s" />
                            <YoutubeEmbed embedId="6stlCkUDG_s" />
                            <YoutubeEmbed embedId="6stlCkUDG_s" />
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default WhyUs;