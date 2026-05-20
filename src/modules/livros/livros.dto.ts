import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class CriarLivroDto {
  @IsString({ message: 'O titulo deve ser uma string' })
  @IsNotEmpty({ message: 'O titulo é obrigatorio' })
  @MinLength(3, { message: 'O titulo deve ter pelo menos 3 caracteres' })
  @MaxLength(100, { message: 'O titulo deve ter no máximo 100 caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }
  })
  titulo: string;

  @IsString({ message: 'A descrição deve ser uma string' })
  @IsNotEmpty({ message: 'A descrição é obrigatorio' })
  @MinLength(3, { message: 'A descrição deve ter pelo menos 3 caracteres' })
  @MaxLength(500, { message: 'A descrição deve ter no máximo 100 caracteres' })
  @Transform(({ value }) => {
    const valor = typeof value;

    if (valor === 'string') {
      return value.trim();
    }
  })
  descricao: string;

  @IsNotEmpty({ message: 'O idAutor é obrigatorio' })
  @Type(() => Number)
  id_Autor: number;
}
