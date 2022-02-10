import { useState } from 'react'
import Confetti from 'react-confetti'
import './style.css'

const wishes = [
`The more you praise and celebrate your life,
the more there is in life to celebrate.`,

`A birthday is a reminder to celebrate the life
as well as to update the life.`,

`Celebrations add colours in our life
And birthday is one of them.
We wish you unlimited happy days
And celebrate hundreds of birthdays.`,

`We promise that the more birthday candles you blow,
the more we will be here for you to celebrate every special event in your life.`,

`Today is the oldest you've ever been,
and the youngest you'll ever be again.`,

`Celebrate your birthday today.
Celebrate being happy every day.`,
]

const HBD = () => {

    const [index, setIndex] = useState(0);

    const showNextMsg = () => {
        setIndex((index + 1) % wishes.length)
    }

    return(
        <div className="hbd">
            <Confetti 
                height={300}
                width={300}
            />
            <pre>{wishes[index]}</pre>
            <div className="next-wish">
                <p>We have more wishes for you</p>
                <button onClick={showNextMsg}>See Next</button>
            </div>
        </div>
    )
}

export default HBD