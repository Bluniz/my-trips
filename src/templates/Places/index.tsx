import { CloseOutline } from '@styled-icons/evaicons-outline'
import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/LinkWrapper'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
      text?: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} | My Trips`}
        description={place.description?.text ?? ''}
        canonical="https://my-trips.bluniz.com.br"
        openGraph={{
          url: 'https://my-trips.bluniz.com.br',
          title: `${place.name} | My Trips`,
          description: place.description?.text ?? '',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: place.name
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Gp back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                src={image.url}
                alt={place.name}
                key={`photo-${index}`}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
