import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import client from 'services/graphQl/client'
import {
  GetPlaceBySlugQuery,
  GetPlacesQuery
} from 'services/graphQl/generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'services/graphQl/queries'
import PlacesTemplate, { PlaceTemplateProps } from 'templates/Places'

export default function Place({ place }: PlaceTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null

  return <PlacesTemplate place={place} />
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({ params: { slug } }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlaceBySlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: params?.slug
    }
  )

  if (!place) return { notFound: true }

  return {
    props: {
      place
    }
  }
}
