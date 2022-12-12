import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import adapterCourseFields from './adapter/adapter';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

interface PagionationProps {
  filter: any, 
  sort: any, 
  skip: number, 
  limit: number
}

@Controller('v1/courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() course: Course) {
    return this.coursesService.create(course);
  }

  @Get()  
  async findAll() {
    return await this.coursesService.findAll();    
  }

  @Post('pagination')  
  async findPagination(@Body() pagination: PagionationProps) {
    const { filter, sort, skip, limit } = pagination;
    const coursesList = await this.coursesService.findPagination(filter, sort, skip, limit);
    const coursesCountRows = await this.coursesService.findCountRows();
    return {
      data: coursesList,
      rows: coursesCountRows
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
