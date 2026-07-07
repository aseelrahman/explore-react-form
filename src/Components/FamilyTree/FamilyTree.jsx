import Grandpa from "./Grandpa";
import './FamilyTree.css'
import { createContext } from "react";

export const AssetContext = createContext('')

const FamilyTree = () => {
    const asset = 'Diamond'
    const newAsset = 'gold'
    return (
        <div className="family-tree">
            <h3>Family Tree</h3>
            <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset} />
            </AssetContext.Provider>
        </div>
    );
};

export default FamilyTree;