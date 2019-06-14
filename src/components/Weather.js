import React from 'react';

const Weather = props => {
    return(
        <div>
            { props.city && props.country &&  <p>Location: { props.city }, { props.country }</p>}
            { props.temp && <p>Temperature: { props.temp }</p> }
            { props.humidity && <p>humidity: { props.humidity }</p> }
            { props.description && <p>Condition: { props.description }</p> }
            { props.pressure && <p>pressure: { props.pressure }</p> }
            { props.error && <p> {props.error}</p> }
        </div>
    );
}



// class Weather extends React.Component {
//     render() {
            // return(
            //     <div>
            //         { this.props.city && this.props.country &&  <p>Location: { this.props.city }, { this.props.country }</p>}
            //         { this.props.temp && <p>Temperature: { this.props.temp }</p> }
            //         { this.props.humidity && <p>humidity: { this.props.humidity }</p> }
            //         { this.props.description && <p>Condition: { this.props.description }</p> }
            //         { this.props.pressure && <p>pressure: { this.props.pressure }</p> }
            //         { this.props.error && <p> {this.props.error}</p> }
            //     </div>
            // );
//     }
// };

export default Weather;

// <p>Location: { this.props.city }, { this.props.country }</p>
// <p>Temperature: { this.props.temp }</p>
// <p>humidity: { this.props.humidity }</p>
// <p>Condition: { this.props.description }</p>
// <p>pressure: { this.props.pressure }</p>