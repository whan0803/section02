import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import style from './[id].module.css'
import fetchOneBook from '@/lib/fetch-one-book';



export const getServerSideProps = async(context : GetServerSidePropsContext) => {

    const id = context.params!.id;

    const OneBook = await fetchOneBook(Number(id));

    return{
        props: {
            OneBook
        }
    }
}

export default function Page({OneBook}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    if(!OneBook) return "문제갑 라생했습니다 다시시도해주세요";
    const {id, title, subTitle, description, author, publisher, coverImgUrl} = OneBook

    return(
        <div className={style.container}>
            <div className={style.cover_img_container} style={{backgroundImage: `url('${coverImgUrl}')`}}>
                <img src={coverImgUrl} alt="" />
            </div>
            <div className={style.title}>
                {title}
            </div>

            <div className={style.subTitle}>{subTitle}</div>
            <div className={style.author}>{author} | {publisher}</div>
            <div className={style.description}>{description}</div>
        </div>
    )
}