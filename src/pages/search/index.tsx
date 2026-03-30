import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router"
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";


export const getServerSideProps = async(context: GetServerSidePropsContext) => {
    const q = context.query.q;
    const searchBooks = await fetchBooks(q as string);
    
    return {
        props: {
            searchBooks
        }
    }
}

const search = ({searchBooks}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return(
        <div>
            {searchBooks.map((book) => <BookItem key={book.id} {...book} />)}
        </div>
    )

}

export default search


search.getLayout = (search: ReactNode) => {
    return <SearchableLayout>{search}</SearchableLayout>
}