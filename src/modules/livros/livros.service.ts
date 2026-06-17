import { Injectable, NotFoundException } from '@nestjs/common';
import { LivrosRepository } from './livros.repository';
import { CriarLivroDto } from './livros.dto';
import { AutoresService } from '../autores/autores.service';

@Injectable()
export class LivrosService {
  constructor(
    private readonly LivrosRepository: LivrosRepository,
    private readonly AutoresService: AutoresService,
  ) {}

  async listarLivros() {
    return await this.LivrosRepository.listarLivros();
  }

  async criarLivro(bodyRequest: CriarLivroDto) {
    await this.AutoresService.listarAutor(bodyRequest.id_Autor);

    return await this.LivrosRepository.criarLivro(bodyRequest);
  }

  async listarLivro(id: number) {
    const livroEncontrado = await this.LivrosRepository.listarlivro(id);

    if (!livroEncontrado) {
      throw new NotFoundException(`Livro de id ${id} não encontrado `);
    }

    return livroEncontrado;
  }
  async listarLivrosComAutor() {
    return await this.LivrosRepository.listarLivrosComAutor();
  }

  async listarLivroComAutor(id: number) {
    await this.listarLivro(id);

    return await this.LivrosRepository.listarLivroComAutor(id);
  }
  async deletarLivro(id: number) {
    await this.listarLivro(id);

    return await this.LivrosRepository.deletarLivro(id);
  }
}
