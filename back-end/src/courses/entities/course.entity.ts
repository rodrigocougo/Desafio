import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
  courseName: { type: String, required: true, description: 'Nome do curso' },
  courseDescription: { type: String, description: 'Descrição longa do curso' },
  category: {
    type: String,
    enum: ["Direito", "Perícia Judicial", "Desenvolvimento Pessoal", "Gestão de Pessoas", "Cálculos"],
    required: true,
    name: "category",
    description: "Departamento do curso",
  },
  courseVideoLink: { type: String, required: true, description: 'URL do video do curso' },
  dateTimeCreate: { type: Date, default: Date.now, description: 'Data de criação do curso' },
  dateTimeUpdate: { type: Date, description: 'Data da ultima alteração do curso' },  
});

export interface Course {
  id: string;
  courseName: string;
  courseDescription: string;
  category: string;
  courseVideoLink: string; 
  dateTimeCreate: Date;
  dateTimeUpdate: Date;
}
