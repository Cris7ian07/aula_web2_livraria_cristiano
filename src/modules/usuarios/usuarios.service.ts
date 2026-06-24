import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsuariosRepository } from './usuarios.repository';
import { CriarUsuarioDto } from './usuarios.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly usuariosRepository: UsuariosRepository) {}

  async buscarUsuarioPorEmail(email: string) {
    return await this.usuariosRepository.buscarUsuarioPorEmail(email);
  }

  async criarUsuario(usuario: CriarUsuarioDto) {
    const { email, nome, password } = usuario;

    const usuarioEncontrado = await this.buscarUsuarioPorEmail(email);

    if (usuarioEncontrado) {
      throw new ConflictException('Usuário já cadastrado com este email');
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    return await this.usuariosRepository.criarUsuario({
      nome: nome,
      email: email,
      password: passwordHashed,
    });
  }
}
