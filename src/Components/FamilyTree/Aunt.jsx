import { useContext } from "react";
import Cousin from "./Cousin";
import { MoneyContext } from "./FamilyTree";


const Aunt = () => {
    const [money, setMoney] = useContext(MoneyContext);

    const handleAddMoney = () => {
        setMoney(money + 5000)
    }
    return (
        <div>
            <h3>Aunt</h3>
            <section className="flex">
                <Cousin name='Tom tom' />
                <Cousin name='Jo Joooo' />
                <button onClick={handleAddMoney}>Add 5000 TK</button>
            </section>
        </div>
    );
};

export default Aunt;