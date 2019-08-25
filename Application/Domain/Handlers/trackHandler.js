// 1. crear una clase que agrupe los metodos de manejo
class trackHandler {
  // a. crear un metodo para traer todos los tracks de la BD
  static async list() {
    const tracks = await this.find();
    return { tracks };
  }

  // b. metodo para crear un registro el document tracks
  static async add(titulo, descripcion, avatar, color) {
    const result = await this.create({
      titulo,
      descripcion,
      avatar,
      color
    });

    return result;
  }

  // c. metodo para editar un registro en el document tracks
  static async edit(id, titulo, descripcion, avatar, color) {
    // comprobar que ese elemento exista en la BD
    const trackTemp = await this.findById(id);
    if (!trackTemp) throw new Error("El track solicitado no existe!");

    // crear un DTO> es un objeto de trancicion
    const modificador = {
      titulo,
      descripcion,
      avatar,
      color
    };
    // findOneAndUpdate > actualizara en base a un criterio
    const result = await this.findOneAndUpdate(
      {
        _id: id
      },
      {
        $set: modificador
      }
    );
    // retornar un resultado
    return result;
  }
}
// 2. publicar esta clase
module.exports = trackHandler;
