import Grandpa from "./Grandpa";
import "./FamilyTree.css";
import { createContext, useState } from "react";

export const AssetContext = createContext("");
export const MoneyContext = createContext(0);

const FamilyTree = () => {
const [money, setMoney] = useState(0)

  const asset = "Diamond";
  const newAsset = "gold";
  return (
    <div className="family-tree">
      <h3>Family Tree</h3>
      <h4>Total Family Money: {money}</h4>
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset} />
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;

/**
 * 1. Create a context using createContext with a default value
 * make sure you export the context to be used in other files.
 */
