import { connection } from "../database/connection.js";
import { livros } from "../model/livros.js";

export const getIndex = async (req, res) => {
  try {
    const listLivros = await livros.findAll();
    console.log(listLivros);
    res.render("index.ejs", {
      listLivros,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const livrosDetalhes = await livros.findByPk(req.params.id);
    res.render("detalhes.ejs", {
      livrosDetalhes,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getDeletar = async (req, res) => {
  try {
    await livros.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

export const getCadastro = (req, res) => {
  res.render("cadastro.ejs");
};

export const postCadastro = async (req, res) => {
  try {
    const { nome, autor, descricao, img, preco, editora, paginas, peso } =
      req.body;

    if (
      !nome ||
      !autor ||
      !descricao ||
      !img ||
      !preco ||
      !editora ||
      !paginas ||
      !peso
    ) {
      res.send("Todos os campos são obrigatorios");
    } else {
      await livros.create({
        nome,
        autor,
        img,
        preco,
        descricao,
        editora,
        paginas,
        peso,
      });
      res.redirect("/");
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const getEditar = async (req, res) => {
  try {
    const editar = await livros.findByPk(req.params.id);
    res.render("editar.ejs", { editar });
  } catch (error) {
    res.send(erro.message);
  }
};

export const postEditar = async(req, res) => {
  try {
    const { nome, autor, descricao, img, preco, editora, paginas, peso } = req.body;

    await livros.update({
      nome: nome,
      autor: autor,
      img: img,
      preco: preco,
      descricao: descricao,
      editora: editora,
      paginas: paginas,
      peso: peso,
    },{
      where:{
        id: req.params.id
      }
    })
    res.redirect('/')
  }  catch (error) {
    res.send(erro.message);
  }
};
