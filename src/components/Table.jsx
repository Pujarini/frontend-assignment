import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch";
import { paginate } from "../utils/paginate";
import Pagination from "./Pagination";

export default function TableComponent() {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);

    const { data } = useFetch();

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / 5);

    useEffect(() => {
        if (data.length > 0) {
            const updatedData = paginate(data, currentPage);
            setPaginatedData(updatedData);
        }
    }, [data, currentPage])



    const onPageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page)
        }
    }



    return <>
        <table aria-label="Data table showing funding information">
            <thead>
                <tr>
                    <th scope="col">S.No.</th>
                    <th scope="col">Percentage Funded</th>
                    <th scope="col">Amount Pledged</th>
                </tr>
            </thead>
            <tbody>
                {paginatedData.map((item) => {
                    return (
                        <tr key={item['s.no']}>
                            <td>{item['s.no']}</td>
                            <td>{item['percentage.funded']}</td>
                            <td>{item['amt.pledged']}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
    </>
}