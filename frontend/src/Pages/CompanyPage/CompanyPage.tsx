/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";

interface Props {}

const CompanyPage = (props: Props) => {
    // https://localhost:3000/
    let { ticker } = useParams();
    const [company, setCompay] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompay(result?.data[0]);
        };
        getProfileInit();
    }, []);
    return (
        <>
            {company ? (
                <div>{company.companyName}</div>
            ) : (
                <div>Company Not Found</div>
            )}
        </>
    );
};

export default CompanyPage;
