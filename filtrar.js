const usuarios = [
{nome:'Carlos', idade: 32},
{nome:'Ana',idade:28 },
{nome:'Felipe', idade:40}
];

const Ana=usuarios.find(usuario=> usuario.nome === 'Ana');
console.log(Ana);

const usuariosacimade30=usuarios.filter(usuario=> usuario.idade>30);
console.log(usuariosacimade30);

const usuarioporidade=usuarios.sort((a,b)=> a.idade-b.idade);
console.log(usuarioporidade);



