import { useContext } from "react";
import { MoneyContext } from "./FamilyTree";

const Friend = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h3>Friend</h3>
            <p>Family got: {money}</p>
        </div>
    );
};

export default Friend;