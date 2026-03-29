import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router"
import { ReactNode } from "react";

const search = () => {

    const router = useRouter();

    const { q } = router.query;
    return(
        <div>
            <h1>search {q}</h1>
        </div>
    )
}

export default search


search.getLayout = (search: ReactNode) => {
    return <SearchableLayout>{search}</SearchableLayout>
}