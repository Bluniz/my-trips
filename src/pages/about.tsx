import client from 'services/graphQl/client'
import { GET_PAGES } from 'services/graphQl/queries'
import { AboutTemplate } from 'templates/About'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props: {}
  }
}

//! getStaticPaths -> Serve para gerar as URLS das páginas em build-time
//! getStaticProps -> Serve para buscar os dados para a página estática(build time).
//! getServerSideProps -> Serve para buscar os dados da página, roda em runtime(sempre que ocorrer uma requisição). (bundle fica só no server)
//! getInitialProps -> Serve para buscar os dados da página, roda em runtime(sempre que ocorrer uma requisição). (bundle também vem para o client)
