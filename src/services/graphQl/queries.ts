import { gql } from 'graphql-request'

//? $first é uma variavel do graph QL para definir a quantidade de dados que deseja pegar do inicio.
//* Exemplo: Se tu passa {first: 3} vai pegar os 3 primeiros elemen tos
export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
        text
      }
    }
  }
`

export const GET_PLACES = gql`
  query getPlaces($first: Int) {
    places(first: $first) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
export const GET_PLACE_BY_SLUG = gql`
  query getPlaceBySlug($slug: String) {
    place(where: { slug: $slug }) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
