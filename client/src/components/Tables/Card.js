import '../../styles/Card.css';

const Card = ({ name, onClick, selected }) => {
    if (selected) {
        return (
            <button onClick={onClick} className="dib tracked bg-black-60 white ph4 pv3 mh3 mv3 ba bw2 br-pill grow pointer fw6 b--transparent">
                {name}
            </button>
        );
    } else {
        return (
            <button onClick={onClick} className="dib tracked bg-white fw6 dark-gray ph4 pv3 mh3 mv3 ba bw2 br-pill grow pointer not-selected">
                {name}
            </button>
        );
    }
}

export default Card;