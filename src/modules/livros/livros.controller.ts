import { Body, Controller, Get, Post } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CriarLivroDto } from './livros.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly LivrosService: LivrosService) {}

  @Get('listar-livros')
  async listarLivros() {
    return await this.LivrosService.listarLivros();
  }

  @Post('criar-Livro')
  async criarlivro(@Body() bodyRequest: CriarLivroDto) {
    return await this.LivrosService.criarLivro(bodyRequest);
  }
}
