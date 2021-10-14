import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import client from 'services/graphQl/client'
import {
  GetPageBySlugQuery,
  GetPagesQuery
} from 'services/graphQl/generated/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'services/graphQl/queries'
import { PageTemplate, PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()
  //! Retorna alguma coisa enquanto está sendo criada a página estática
  if (router.isFallback) return null

  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: params?.slug
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

//! getStaticPaths -> Serve para gerar as URLS das páginas em build-time
//! getStaticProps -> Serve para buscar os dados para a página estática(build time).
//! getServerSideProps -> Serve para buscar os dados da página, roda em runtime(sempre que ocorrer uma requisição). (bundle fica só no server)
//! getInitialProps -> Serve para buscar os dados da página, roda em runtime(sempre que ocorrer uma requisição). (bundle também vem para o client)
