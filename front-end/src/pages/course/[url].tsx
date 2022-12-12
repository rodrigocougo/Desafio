import { useRouter } from 'next/router'
import React from 'react'
import CBFLine from 'src/components/LineComponent/Index'
import PlayerYouTube from 'src/components/PlayerYouTube'
import { ContentCourse } from 'src/styles/curso/styled'

export default function Course() {
  const router = useRouter();
  const idCourse: string | null = String(router?.query?.id) ?? null;

  if (!idCourse) router.push('/');
  
  return (
    <React.Fragment>      
      <CBFLine labelSubTitle="SALA" labelTitle="Visualização do curso" />
      <ContentCourse>      
        <PlayerYouTube urlVideo={idCourse} heightScreen='600' />          
      </ContentCourse>
    </React.Fragment>
  )
}
