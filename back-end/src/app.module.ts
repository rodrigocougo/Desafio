import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://courseBetaAdmin:di5NPnWZZ5ivji9k@cursobetafake.cwiiohr.mongodb.net/?retryWrites=true&w=majority',
    ),
    CoursesModule,
  ],
})
export class AppModule {}
