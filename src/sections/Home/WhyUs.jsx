import Select from 'react-select';
import YoutubeEmbed from '../../components/YoutubeEmbed';

import {useState} from 'react'

const selectOptions = [
    {value: 'hindi', label: 'Hindi'},
    {value: 'english', label: 'English'},
]

const WhyUs = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState('hindi')

    return(
        <section className="whyUs">
            <h1 className="section-header marker">Why Choose Us?</h1>
            <div className="whyUsContent">
                <p>Because the right choice can make you happier</p>
                <div className="CustomSelectContainer">
                    <label htmlFor="lang">Select your preferred language for our introduction videos: </label>
                    <Select
                        className="customSelect"
                        isSearchable={false} 
                        options={selectOptions}
                        defaultValue={{value: 'hindi', label: 'Hindi'}}
                        onChange={e => setSelectedLanguage(e.value)}
                    />
                </div>
                <div className="whyUsTilesContainer">
                    {
                        selectedLanguage === 'hindi' ? 
                        <>
                            <YoutubeEmbed embedId="ZL6xb02QqRc" />
                            <YoutubeEmbed embedId="zFYtS3IlSp0" />
                            <YoutubeEmbed embedId="T57n-vX0vpA" />
                            <YoutubeEmbed embedId="n346ZLHBnRQ" />
                        </>
                        :
                        <>
                            <YoutubeEmbed embedId="ZZ7HjyadAGg" />
                            <YoutubeEmbed embedId="8e1PHdWTk_c" />
                            <YoutubeEmbed embedId="CroNZYv2L4s" />
                        </>
                    }
                </div>
            </div>
        </section>
    )
}

export default WhyUs;