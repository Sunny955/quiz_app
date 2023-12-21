import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from './dto/createQuiz.dto';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';
import { UpdateQuizDto } from './dto/updateQuiz.dto';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(Quiz) private quizRepo: Repository<Quiz>) {}

    findAll(): Promise<Quiz[]> {
        return this.quizRepo.find();
    }
    
    findOne(id:number) : Promise<Quiz | null> {
        return this.quizRepo.findOneBy({id});
    }

    async remove(id:number) : Promise<void> {
        await this.quizRepo.delete(id);
    }

    async update(id:number, quizData:UpdateQuizDto) : Promise<Quiz> {
        const quiz = await this.quizRepo.findOneBy({id});

        if (!quiz) {
            throw new NotFoundException(`Quiz with ID ${id} not found`);
        }

        Object.assign(quiz,quizData);

        return this.quizRepo.save(quiz);
    }

    getQuizes() : {success: boolean, data: number[]} {
        return {
            success:true,
            data:[1,2,3]
        }
    }

    getAnother() {
        return {
            success:"true",
            data:'My value is the best'
        }
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepo.save(quiz);
    }
}
