import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
    faDiceD6,
} from '@fortawesome/free-solid-svg-icons';

const Die = ({number}) => {
    console.log(number);

    let chosenIcon = faDiceD6;

    if (number === 1) {
        chosenIcon = faDiceOne;
    } else if (number === 2) {
        chosenIcon = faDiceTwo;
    } else if (number === 3) {
        chosenIcon = faDiceThree;
    } else if (number === 4) {
        chosenIcon = faDiceFour;
    } else if (number === 5) {
        chosenIcon = faDiceFive;
    } else if (number === 6) {
        chosenIcon = faDiceSix;
    }

    return (
        <FontAwesomeIcon icon={chosenIcon} className='fa-die'/>
    );
};

export default Die;