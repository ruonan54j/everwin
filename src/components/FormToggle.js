import { useState } from 'react'
import chat from '../images/message-icon.svg'
import down from '../images/down-arrow.svg'

function FormToggle() {
    const [isVisible, setIsVisible] = useState(false)
    const handleChatClick = () => {
        if (isVisible) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
    }
    return (
        <div className="form-toggle">
            <div>
                {isVisible && (
                    <form id="how-form" action="/form-submit">
                        <p>
                            Fill out this form and we'll get back to you with a
                            quote within 24 hours.
                        </p>
                        <div className="row">
                            <div className="form-group col-sm">
                                <label for="firstName">First name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    required
                                />
                            </div>
                            <div className="form-group col-sm">
                                <label for="lastName">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="phone"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label for="phone">Request</label>
                            <textarea
                                class="form-control"
                                id="request"
                                rows="3"
                            ></textarea>
                        </div>
                        <button type="submit" className="theme-btn">
                            GET QUOTE
                        </button>
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
