import { getPageData } from 'pages/api/page'
import Header from 'components/layout/header'
import Image from 'next/image'
import styles from './Page.module.css'
import { useEffect, useState } from 'react'

const Page = ({ data }) => {
    const [pageData, setPageData] = useState(null);
    useEffect(() => {
        if (data && data.attributes) {
            const { name, main_images: mainImages } = data.attributes;

            setPageData({
                name,
                mainImages
            })
        }

    }, [data])

    if (!pageData) {
        return <h2>Loading...</h2>
    }
 
    return (
        <main className={styles.main}>
            <Header />
            <div className={styles.content}>
                <div className={styles.hero}>
                    <div className={styles.heroImage}>
                        <Image src={pageData.mainImages[0]} alt="nextjs" width="500" height="220" />
                    </div>
                    <h1 className={styles.heading}>
                        Hello: {pageData.name}
                    </h1>
                </div>
            </div>
        </main>
    )
}

export const getStaticProps =  async (context) => {
    const { data } = await getPageData(context.params.slug);

    if (!data || data.length === 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            slug: context.params.slug,
            data: data[0],
            revalidate: 10
        }
    }
}

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: { slug: ['whats-on'] }
            }
        ],
        fallback: true
    }
}

export default Page;
