import kelvinDurant from "../assets/images/kelvin-durant.png";
import chrisWebber from "../assets/images/chris-webber.png";

const Messages = () => {
    return (
        <div className="">
            <div className={'tc-green h2 mt-one-rem'}>Messages</div>

            <div className={'mt-one-rem'}>
                <div className={'display-flex justify-content-evenly align-item-center mb-one-rem'}>
                    <img className={'profile-image'} src={chrisWebber} alt={'Chris Webber'}/>
                    <div>
                        <div className={'tc-green text-font-bold'}>Chris Webber</div>
                        <div className={'tc-gray text-font-default'}>Hi Michael! How are You?</div>
                    </div>
                </div>
                <div className={'display-flex justify-content-evenly align-item-center'}>
                    <img className={'profile-image'} src={kelvinDurant} alt={'Kelvin Durant'}/>
                    <div>
                        <div className={'tc-green text-font-bold'}>Chris Webber</div>
                        <div className={'tc-gray text-font-default'}>Do you need that design?</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages;