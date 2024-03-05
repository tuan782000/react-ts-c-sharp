import React, { useEffect, useState } from "react";
import CompFinderItem from "./CompFinderItem/CompFinderItem";
import { CompanyCompData } from "../../company";
import { getCompData } from "../../api";
type Props = {
  ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
  const [companyData, setCompanyData] = useState<CompanyCompData>();
  console.log(companyData)
  useEffect(() => {
    const getComps = async () => {
      const value = await getCompData(ticker);
      setCompanyData(value?.data[0]);
    };
    getComps();
  }, [ticker]);
  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {companyData?.peersList.map((ticker) => {
        return <CompFinderItem ticker={ticker} />;
      })}
    </div>
  );
};

export default CompFinder;