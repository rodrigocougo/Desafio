import { CourseProps } from 'src/common/courseUnitProps';
import PlayerYouTube from '../PlayerYouTube';
import {
  Box,
  BoxItem,
  BoxLabels,
  LabelCategorie,
  LabelNameCourse,  
} from './Styled'

export default function getCourseUnitReactSlide(courseUnit: CourseProps, key: number) {
  return (
    <Box key={key}>
      <BoxItem>
        <PlayerYouTube urlVideo={courseUnit.courseVideoLink} heightScreen='200' />
        <BoxLabels>
          <LabelNameCourse>
            {courseUnit.courseName}        
          </LabelNameCourse>
          <LabelCategorie>
            {courseUnit.category}        
          </LabelCategorie>
        </BoxLabels>
      </BoxItem>
    </Box>
  )
}
