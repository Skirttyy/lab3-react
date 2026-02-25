import { useState } from "react";

export function useNavigation(page) {
    const [currentPage, setCurrentPage] = useState(page)

    function navigate(page) {
        setCurrentPage(page);
    }

    return {currentPage, navigate}
}