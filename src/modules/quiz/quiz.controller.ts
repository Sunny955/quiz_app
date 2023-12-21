import { Controller,Get,Post,Body, HttpCode, UsePipes, ValidationPipe, Param, Delete, Put } from '@nestjs/common';
import {QuizService} from './quiz.service'
import { CreateQuizDto } from './dto/createQuiz.dto';
import { Quiz } from './quiz.entity';
import { UpdateQuizDto } from './dto/updateQuiz.dto';

@Controller('quiz')
export class QuizController {
    constructor(private readonly quizServices: QuizService) {}

    @Get('/all')
    getAllQuiz(): Promise<Quiz[]> {
        return this.quizServices.findAll();
    }

    @Get('/get-single/:id')
    getQuizById(@Param('id') id:number): Promise<Quiz | undefined> {
        return this.quizServices.findOne(id);
    }

    @Post('/create-quiz')
    @HttpCode(201)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizServices.createNewQuiz(quizData);
    }

    @Put('/update/:id')
    @UsePipes(ValidationPipe)
    async updateQuiz(@Param('id') id:number, @Body() quizData: UpdateQuizDto) {
        return this.quizServices.update(id,quizData);
    }

    @Delete('/delete/:id')
    async deleteQuiz(@Param('id') id:number) : Promise<{success:boolean, message:string}> {
        await this.quizServices.remove(id);

        return {
            success:true,
            message:`Quiz with id ${id} deleted successfully!`
        }
    }
}
