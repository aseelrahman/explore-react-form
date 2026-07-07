import Cousin from "./Cousin";


const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className="flex">
                <Cousin name='Tom tom' />
                <Cousin name='Jo Joooo' />
            </section>
        </div>
    );
};

export default Aunt;