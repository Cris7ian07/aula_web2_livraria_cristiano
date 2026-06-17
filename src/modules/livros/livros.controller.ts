import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
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

  @Get('listar-livro/:id')
  async listarLivro(@Param('id', ParseIntPipe) id: number) {
    return await this.LivrosService.listarLivro(id);
  }

  @Get('listar-livros-com-autor')
  async listarLivrosComAutor() {
    return await this.LivrosService.listarLivrosComAutor();
  }

  @Get('listar-livro-com-autor/:id')
  async listarLivroComAutor(@Param('id', ParseIntPipe) id: number) {
    return await this.LivrosService.listarLivroComAutor(id);
  }
  @Delete('deletar-livro/:id')
  async deletarLivro(@Param('id', ParseIntPipe) id: number) {
    return await this.LivrosService.deletarLivro(id);
  }
}
