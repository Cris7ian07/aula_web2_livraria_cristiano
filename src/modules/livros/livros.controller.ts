import { Controller, Get } from '@nestjs/common';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private readonly LivrosService: LivrosService) {}

  @Get('listar-livros')
  async listarLivros() {
    return await this.LivrosService.listarLivros();
  }
}
