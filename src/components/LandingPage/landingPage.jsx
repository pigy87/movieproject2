import React  from 'react';
import '../LandingPage/landingPage.css';

class LandingPage extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <ul id={'landingUl'}>
                    <li className={'landingLis'}>Search Movies!</li>
                    <li className={'landingLis'}>Top 20 Movies!</li>
                </ul>
            </div>
        );
    }
}

export default LandingPage;