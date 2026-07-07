import Aunt from "./Aunt";
import Dad from "./Dad";
import Uncle from "./Uncle";

const Grandpa = ({asset}) => {
  return (
    <div>
      <h3>Grandpa</h3>
      <section className="flex">
        <Dad asset={asset} />
        <Uncle />
        <Aunt />
      </section>
    </div>
  );
};

export default Grandpa;
