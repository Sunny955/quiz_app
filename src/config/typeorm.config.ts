import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Quiz } from "src/modules/quiz/quiz.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
        type: 'mysql',
        host: 'localhost',
        port : 3306,
        username: 'root',
        password:'1234',
        database: 'quiz',
        entities: [Quiz],
        synchronize: true, //set it to false in production otherwise you will loose data
}