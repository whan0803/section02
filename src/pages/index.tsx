import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css'
import { ReactNode, useEffect } from 'react';

import books from '@/mook/books.json'
import BookItem from '@/components/book-item';
import { InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';

//SSR
//next를 쓸때는 어떤 조건없이window함수 못씀
//컴포넌트보다 먼저 실행이되어서, 컴포넌트에 필요한 데이터를 불러오는 함수
export const getServerSideProps = async() => {
  const [allBooks, randomBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      randomBooks
    }
  }
}

export default function Home({allBooks, randomBooks} : InferGetServerSidePropsType<typeof getServerSideProps>) {


  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {randomBooks.map((book) => <BookItem key={book.id} {...book} />)}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
          {allBooks.map((book) => <BookItem key={book.id} {...book} />)}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
