import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useRouter } from 'next/dist/client/router'

type Place = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}

export type MapProps = {
  places?: Place[]
}

export default function Map({ places }: MapProps) {
  const router = useRouter()

  return (
    <MapContainer
      zoom={3}
      style={{ height: '100%', width: '100%' }}
      center={[0, 0]}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ location, id, name, slug }) => (
        <Marker
          position={[location.latitude, location.longitude]}
          title={name}
          key={`place-${id}`}
          eventHandlers={{
            click: () => {
              router.push(`/place/${slug}`)
            }
          }}
        />
      ))}
    </MapContainer>
  )
}
