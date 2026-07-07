import Grandpa from "./Grandpa";
import './FamilyTree.css'

const FamilyTree = () => {
    const asset = 'Diamond'
    return (
        <div className="family-tree">
            <h3>Family Tree</h3>
            <Grandpa />
        </div>
    );
};

export default FamilyTree;