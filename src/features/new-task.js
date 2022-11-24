import todayScheduleIcon from "../assets/images/todays-schedule-icon.svg";
import lessThan from '../assets/images/less-than.svg';
import greaterThan from '../assets/images/greater-than.svg';
import angela from '../assets/images/angela.png';
import chris from '../assets/images/chris.png';

import { useState } from 'react';
import Messages from "../components/messages";

import { useDispatch } from 'react-redux';
import { addTask } from '../store/task.slice';


const NewTask = () => {

    let fetchEmojis = () => {
        let emojis = ['🎉','😍','😁','🔥','😘','😉','😎','👩','🙄']
        return (
            emojis.length > 0 ?
            <div className={'mt-one-rem mb-one-rem display-flex'}>
                <img src={lessThan} alt={'lessThan'}/>
                {emojis.map((emoji, index) => <span key={index} onClick={()=>onEmojiClick(emoji)} className={'space-lr-5 pointer'}>{emoji}</span>)}
                <img src={greaterThan} alt={'greaterThan'}/>
            </div> : <div></div>
        )
    }

    let fetchCollaborators = () => {
        return (
            <div className={'form-item mt-one-rem'}>
                <div className={'tc-gray text-font-default mb-one-rem'}>Add Collaborators</div>
                <div className={'display-flex justify-content-between'}>
                    <div className={'space-lr-3 display-flex align-item-center justify-content-evenly capsule purple-capsule'}>
                        <img className={'capsule-img'} src={angela} alt={'angela'}/>
                        <div>Angela</div>
                        <div>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.93909 3.99943L7.80299 1.14179C7.92841 1.01635 7.99886 0.846231 7.99886 0.668843C7.99886 0.491455 7.92841 0.321332 7.80299 0.1959C7.67758 0.0704672 7.50748 0 7.33011 0C7.15275 0 6.98265 0.0704672 6.85724 0.1959L4 3.06021L1.14276 0.1959C1.01735 0.0704672 0.847248 -1.32164e-09 0.669885 0C0.492522 1.32165e-09 0.322423 0.0704672 0.197008 0.1959C0.0715939 0.321332 0.00113664 0.491455 0.00113663 0.668843C0.00113663 0.846231 0.0715939 1.01635 0.197008 1.14179L3.06091 3.99943L0.197008 6.85708C0.134583 6.919 0.085035 6.99267 0.0512219 7.07385C0.0174088 7.15502 0 7.24208 0 7.33002C0 7.41795 0.0174088 7.50502 0.0512219 7.58619C0.085035 7.66737 0.134583 7.74104 0.197008 7.80296C0.258924 7.8654 0.332587 7.91495 0.413748 7.94877C0.494909 7.98259 0.581962 8 0.669885 8C0.757808 8 0.844861 7.98259 0.926022 7.94877C1.00718 7.91495 1.08085 7.8654 1.14276 7.80296L4 4.93866L6.85724 7.80296C6.91915 7.8654 6.99282 7.91495 7.07398 7.94877C7.15514 7.98259 7.24219 8 7.33011 8C7.41804 8 7.50509 7.98259 7.58625 7.94877C7.66741 7.91495 7.74108 7.8654 7.80299 7.80296C7.86542 7.74104 7.91497 7.66737 7.94878 7.58619C7.98259 7.50502 8 7.41795 8 7.33002C8 7.24208 7.98259 7.15502 7.94878 7.07385C7.91497 6.99267 7.86542 6.919 7.80299 6.85708L4.93909 3.99943Z" fill="#5051F9"/>
                            </svg>
                        </div>
                    </div>
                    <div className={'space-lr-3 display-flex align-item-center justify-content-evenly capsule blue-capsule'}>
                        <img className={'capsule-img'} src={chris} alt={'chris'}/>
                        <div>Chris</div>
                        <div>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.93909 3.99943L7.80299 1.14179C7.92841 1.01635 7.99886 0.846231 7.99886 0.668843C7.99886 0.491455 7.92841 0.321332 7.80299 0.1959C7.67758 0.0704672 7.50748 0 7.33011 0C7.15275 0 6.98265 0.0704672 6.85724 0.1959L4 3.06021L1.14276 0.1959C1.01735 0.0704672 0.847248 -1.32164e-09 0.669885 0C0.492522 1.32165e-09 0.322423 0.0704672 0.197008 0.1959C0.0715939 0.321332 0.00113664 0.491455 0.00113663 0.668843C0.00113663 0.846231 0.0715939 1.01635 0.197008 1.14179L3.06091 3.99943L0.197008 6.85708C0.134583 6.919 0.085035 6.99267 0.0512219 7.07385C0.0174088 7.15502 0 7.24208 0 7.33002C0 7.41795 0.0174088 7.50502 0.0512219 7.58619C0.085035 7.66737 0.134583 7.74104 0.197008 7.80296C0.258924 7.8654 0.332587 7.91495 0.413748 7.94877C0.494909 7.98259 0.581962 8 0.669885 8C0.757808 8 0.844861 7.98259 0.926022 7.94877C1.00718 7.91495 1.08085 7.8654 1.14276 7.80296L4 4.93866L6.85724 7.80296C6.91915 7.8654 6.99282 7.91495 7.07398 7.94877C7.15514 7.98259 7.24219 8 7.33011 8C7.41804 8 7.50509 7.98259 7.58625 7.94877C7.66741 7.91495 7.74108 7.8654 7.80299 7.80296C7.86542 7.74104 7.91497 7.66737 7.94878 7.58619C7.98259 7.50502 8 7.41795 8 7.33002C8 7.24208 7.98259 7.15502 7.94878 7.07385C7.91497 6.99267 7.86542 6.919 7.80299 6.85708L4.93909 3.99943Z" fill="#1EA7FF"/>
                            </svg>
                        </div>
                    </div>
                    <div className={'space-lr-3'}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.5" cy="17.5" r="17.5" fill="#E8EDF1"/>
                            <path d="M13.96 19.064V17.64H16.984V14.808H18.456V17.64H21.48V19.064H18.456V21.912H16.984V19.064H13.96Z" fill="#232360"/>
                        </svg>
                    </div>
                    <div className={'space-lr-3'}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="18" fill="#4BA8A8"/>
                            <path d="M21.3708 16.9458L15.7108 11.2958C15.6178 11.2021 15.5072 11.1277 15.3854 11.0769C15.2635 11.0261 15.1328 11 15.0008 11C14.8688 11 14.7381 11.0261 14.6162 11.0769C14.4944 11.1277 14.3838 11.2021 14.2908 11.2958C14.1045 11.4832 14 11.7366 14 12.0008C14 12.265 14.1045 12.5184 14.2908 12.7058L19.2408 17.7058L14.2908 22.6558C14.1045 22.8432 14 23.0966 14 23.3608C14 23.625 14.1045 23.8784 14.2908 24.0658C14.3834 24.1603 14.4939 24.2355 14.6157 24.287C14.7376 24.3384 14.8685 24.3652 15.0008 24.3658C15.1331 24.3652 15.264 24.3384 15.3859 24.287C15.5077 24.2355 15.6182 24.1603 15.7108 24.0658L21.3708 18.4158C21.4723 18.3222 21.5533 18.2085 21.6087 18.082C21.6641 17.9555 21.6927 17.8189 21.6927 17.6808C21.6927 17.5427 21.6641 17.4061 21.6087 17.2796C21.5533 17.1531 21.4723 17.0394 21.3708 16.9458Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

    const [inputs, setInputs] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const dispatch = useDispatch();


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
        if (!isValidated()) {
            dispatch(addTask(inputs));
            setInputs({});
            setIsSubmitted(false)
        }
    }

    const isValidated = () => {
        let isInvalid = false;

        if ((inputs.title === undefined) || (inputs.title === '')) {
            isInvalid = true;
        }

        if ((inputs.startDate === undefined) || (inputs.startDate === '')) {
            isInvalid = true;
        }

        if ((inputs.endDate === undefined) || (inputs.endDate === '')) {
            isInvalid = true;
        }

        if ((inputs.hours === undefined) || (inputs.hours === '')) {
            isInvalid = true;
        }

        return isInvalid;
    }

    const onEmojiClick = (emoji) => {
        setInputs(values => ({...values, title: values['title'] ? values['title'] + emoji : emoji}));
    }

    return (
        <div className={'padding-one-rem'}>
            <div className={'display-flex justify-content-between'}>
                <div className={'tc-green h2'}>Today's Schedule</div>
                <img src={todayScheduleIcon} alt={'Today schedule icon'}/>
            </div>

            <div className={'tc-green h2 mt-one-rem'}>New Task</div>

            <div className={'form'}>
                <form onSubmit={handleSubmit}>
                    <div className={'margin-lr-auto'}>
                        <div className={'form-item mt-one-rem'}>
                            <div className={'tc-gray text-font-default mb-one-rem'}>Task Title</div>
                            <input
                                type="text" name="title"
                                value={inputs.title || ""}
                                onChange={handleChange}
                                className="text-input text-input-height-40"
                                placeholder="Create new"/>
                            {isSubmitted && ((inputs.title === "") || (inputs.title === undefined))  ?
                                <div className={'validation-error'}>Title is required</div>
                                : <div/>
                            }
                        </div>

                        <div>{fetchEmojis()}</div>

                        <div className={'border-line mt-one-rem'}/>

                        <div>{fetchCollaborators()}</div>

                        <div className={'border-line mt-one-rem'}/>

                        <div className={'form-item mt-one-rem'}>
                            <div className={'tc-gray text-font-default mb-one-rem'}>Time To Complete</div>
                            <input type="date"
                                   name="startDate"
                                   value={inputs.startDate || ""}
                                   onChange={handleChange}
                                   className="text-input text-input-height-40" placeholder="Start Date"/>
                            {isSubmitted && ((inputs.startDate === "") || (inputs.startDate === undefined))  ?
                                <div className={'validation-error'}>Start date is required</div>
                                : <div/>
                            }
                            <input type="date"
                                   name="endDate"
                                   value={inputs.endDate || ""}
                                   onChange={handleChange}
                                   className="text-input text-input-height-40 mt-one-rem" placeholder="End Date"/>
                            {isSubmitted && ((inputs.endDate === "") || (inputs.endDate === undefined))  ?
                                <div className={'validation-error'}>End date is required</div>
                                : <div/>
                            }
                        </div>

                        <div className={'border-line mt-one-rem'}/>

                        <div className={'form-item mt-one-rem'}>
                            <div className={'tc-gray text-font-default mb-one-rem'}>Hours Budget</div>
                            <input type="number"
                                   name="hours"
                                   value={inputs.hours || ""}
                                   onChange={handleChange}
                                   className="text-input text-input-height-40" placeholder="Enter Hours"/>
                            {isSubmitted && ((inputs.hours === "") || (inputs.hours === undefined))  ?
                                <div className={'validation-error'}>Hours budget is required</div>
                                : <div/>
                            }
                        </div>

                        <div className={'form-item flex-row-reverse mt-one-rem'}>
                            <input className={'primary-btn'} type='submit'/>
                        </div>

                        <div className={'border-line mt-one-rem'}/>
                    </div>
                </form>
            </div>

            <div>
                <Messages/>
            </div>
        </div>
    );
}

export default NewTask;