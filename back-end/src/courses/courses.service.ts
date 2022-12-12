import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel('Courses') private readonly coursesModel: Model<Course>,
  ) {
  }

  async create(createCourseDto: Course) {
    const result = await new this.coursesModel(createCourseDto).save();
    return result.id;
  }

  async findAll() {
    return await this.coursesModel.find({})      
  }

  async findPagination(filter={}, sort, skip, limit) {
    return await this.coursesModel
      .find(filter)
      .sort(sort)
      .skip(skip)
      .limit(limit);
  }

  async findOne(id: string) {
    return await this.coursesModel.findOne({ _id: id });
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    return await this.coursesModel.findByIdAndUpdate({ _id: id }, updateCourseDto);
  }

  async remove(id: string) {
    return await this.coursesModel.findByIdAndDelete({ _id: id });
  }

  async findCountRows() {
    return await this.coursesModel.countDocuments({})
  }
}
