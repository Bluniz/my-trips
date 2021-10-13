import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './styles'

export function AboutTemplate() {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>My trips </S.Heading>
      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi atque
          vero accusantium excepturi ex soluta, non eius? Enim facere doloremque
          repellendus sapiente dignissimos, laudantium dolor sunt neque ipsum,
          porro exercitationem!
        </p>
      </S.Body>
    </S.Content>
  )
}
