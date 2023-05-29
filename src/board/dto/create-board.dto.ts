import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateBoardDto {
  @MinLength(5)
  @MaxLength(50)
  title: string;

  @IsString()
  coverUrl: string;
}
