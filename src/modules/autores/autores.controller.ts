import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { AutoresService } from './autores.service';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { CriarAutorDto } from './autores.dto';
@Controller('autores')
export class AutoresController {
  constructor(private readonly autoresService: AutoresService) {}

  @Get('/listar-autores')
  listaAutores() {
    return this.autoresService.listarAutores();
  }
  @Get('/listar-autor/:id')
  listarAutor(@Param('id', ParseIntPipe) id: number) {
    return this.autoresService.listarAutor(id);
  }
  @Post('/criar-autor')
  criarAutor(@Body() bodyRequest: CriarAutorDto) {
    return this.autoresService.criarAutor(bodyRequest);
  }
  @Put('/atualizar-autor/:id')
  atualizarautor(
    @Param('id', ParseIntPipe) idAutor: number,
    @Body() bodyRequest: any,
  ) {
    return this.autoresService.atualizarAutor(idAutor, bodyRequest);
  }
  @Delete('/deletar-autor/:id')
  deletarAutor(@Param('id', ParseIntPipe) idAutor: number) {
    return this.autoresService.deletarAutor(idAutor);
  }
}
