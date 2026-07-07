import Friend from "./Friend";
import Special from "./Special";


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Tom tom' && <Special asset={asset} />
            }
            {
                name === 'Jo Joooo' && <Friend />
            }
        </div>
    );
};

export default Cousin;