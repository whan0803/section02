import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css'
import { ReactNode } from 'react';

export default function Home() {
  return (
    <div>
      <h1 className={style.h1}>인덱스</h1>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}
