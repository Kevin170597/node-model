import { Router } from 'express';
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift();
    return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index') {
        import(`./${cleanName}`)
        .then((moduleRouter) => {
            //console.log('route ' + cleanName + " is loading")
            router.use(`/${cleanName}`, moduleRouter.router)
        })
        .catch(err => console.log(err))
    };
});

export { router };