import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Temporal, usuarios } from './temporal';

@Injectable()
export class UsuarioService {
  create(createUsuarioDto: CreateUsuarioDto) {
    return usuarios.push(createUsuarioDto);
  }

  findAll() {
    return usuarios;
  }

  findOne(id: number) {
    return usuarios.find((usuario: Temporal) => usuario.id === id);
  }

  replace(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioIndex = usuarios.findIndex((usuario: Temporal) => usuario.id === id);
    if (usuarioIndex !== -1) {
      usuarios[usuarioIndex] = {
        id: id,
        nombre: updateUsuarioDto.nombre ?? usuarios[usuarioIndex].nombre,
        edad: updateUsuarioDto.edad ?? usuarios[usuarioIndex].edad,
      };
      return usuarios[usuarioIndex];
    }
    return `Usuario #${id} no encontrado`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuarioIndex = usuarios.findIndex((usuario: Temporal) => usuario.id === id);
    if (usuarioIndex !== -1) {
      usuarios[usuarioIndex] = {
        id: id,
        nombre: updateUsuarioDto.nombre ?? usuarios[usuarioIndex].nombre,
        edad: updateUsuarioDto.edad ?? usuarios[usuarioIndex].edad,
      };
      return usuarios[usuarioIndex];
    }
    return `Usuario #${id} no encontrado`;
  }

  remove(id: number) {
    const usuarioIndex = usuarios.findIndex((usuario: Temporal) => usuario.id === id);
    if (usuarioIndex !== -1) {
      const usuarioEliminado = usuarios.splice(usuarioIndex, 1);
      return usuarioEliminado[0];
    }
    return `Usuario #${id} no encontrado`;
  }
}