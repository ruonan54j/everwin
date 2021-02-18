import { useState } from 'react'
import chat from '../images/message-icon.svg'
import down from '../images/down-arrow.svg'
import axios from 'axios'

function FormToggle() {
    const [form, setForm] = useState({})
    const [isVisible, setIsVisible] = useState(false)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleChatClick = () => {
        if (isVisible) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
    }

    const handleSubmit = async (e) => {
        console.log('submit')
        e.preventDefault()
        const res = await axios.post(`http://localhost:3001/api/form`, form)
    }
    return (
        <div className="form-toggle">
            <div>
                {isVisible && (
                    <form id="how-form" className="row" onSubmit={handleSubmit}>
                        <div className="col-md how-it-works">
                            <h2>HOW IT WORKS</h2>
                            <div className="row no-gutters">
                                <h2 className="col-2 how-it-works-numbers">
                                    01:
                                </h2>
                                <h3 className="col-10">Fill out the form.</h3>
                            </div>
                            <div className="row no-gutters">
                                <h2 className="col-2 how-it-works-numbers">
                                    02:
                                </h2>
                                <div className="col-10">
                                    <h3>Get an instant quote.</h3>
                                    <p>
                                        Once you enter your shipment information
                                        on our platform, you’ll be able to
                                        compare discounted shipping rates and
                                        transit times from different carriers on
                                        one page. You can also access other
                                        shipping services like air freight,
                                        Ocean freight, courier services, and
                                        other specialized shipping services.
                                    </p>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <h2 className="col-2 how-it-works-numbers">
                                    03:
                                </h2>
                                <h3 className="col-10">
                                    Get instant message updates and one-on-one
                                    hospitality services.
                                </h3>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="row">
                                <div className="form-group col-sm">
                                    <label for="firstName">First name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="firstName"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group col-sm">
                                    <label for="lastName">Last name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="lastName"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label for="phone">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label for="phone">Request</label>
                                <textarea
                                    class="form-control"
                                    id="request"
                                    rows="3"
                                    name="request"
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button type="submit" className="theme-btn">
                                GET QUOTE
                            </button>
                        </div>
                    </form>
                )}
            </div>
            <button className="form-toggle-chat" onClick={handleChatClick}>
                <img
                    src={isVisible ? down : chat}
                    className="form-toggle-icon"
                    alt="chat"
                />
            </button>
        </div>
    )
}

export default FormToggle
