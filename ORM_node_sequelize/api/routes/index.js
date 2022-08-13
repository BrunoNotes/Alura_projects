import bodyParser from "body-parser";
import pessoas from "./pessoasRoute.js"
import niveis from "./niveisRoute.js"
import turmas from "./turmasRoute.js"

export default routes => {
    routes.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas
    )
    // routes.get('/', (req, res) => res.send('oi'))
}
