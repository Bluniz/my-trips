import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'
import client from 'services/graphQl/client'
import { GET_PLACES } from 'services/graphQl/queries'
import { GetPlacesQuery } from 'services/graphQl/generated/graphql'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return {
    props: {
      places
    }
  }
}
