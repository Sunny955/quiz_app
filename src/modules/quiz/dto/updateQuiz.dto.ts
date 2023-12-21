import { IsNotEmpty, Length , IsString, IsBoolean} from "class-validator";

export class UpdateQuizDto {
    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    @Length(3, 255, { message: 'Title must be between 3 and 255 characters' })
    title?: string;

    @IsString({ message: 'Description must be a string' })
    desc?: string;

    @IsBoolean({ message: 'isActivate must be a boolean' })
    isActivate?: boolean;
}