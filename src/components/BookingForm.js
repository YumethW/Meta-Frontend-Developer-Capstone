import React, { useState } from 'react';

const BookingForm = (props) => {
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guest, setGuest] = useState('')
    const [occasion, setOccasion] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.submitForm(e)
    }
    const handleChange = (e) => {
        setDate(e)
        props.dispatch(e)
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose a date</label>
                            <input id='book-date' value={date} onChange={(e)=> handleChange(e.target.value)} type='date' required/>
                        </div>

                        <div>
                            <label htmlFor='book-time' value={time} onChange={(e) => setTime(e.target.value)}>Choose a time</label>
                            <select id='book-time'>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return<option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor='book-guest'>Number of Guests</label>
                            <input id='book-guest' value={guest} min={1} onChange={(e) => setGuest(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor='book-occasion'>Occasion</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>

                            </select>
                        </div>

                        <div className='btnReceive'>
                            <input aria-label='On click' type='submit' value={"Make your Reservation"}/>
                        </div>

                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;