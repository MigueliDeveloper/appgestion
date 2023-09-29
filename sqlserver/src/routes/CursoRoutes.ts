import { Router } from 'express'
import { deleteCurso, getCurso, getCursos, postCurso, updateCurso } from '../controllers/CursoController'

const routercursos = Router();
routercursos.get('/cursos/', getCursos);
routercursos.get('/cursos/:id', getCurso);
routercursos.delete('/cursos/:id', deleteCurso);
routercursos.post('/cursos/', postCurso);
routercursos.put('/cursos/:id', updateCurso);

export default routercursos;