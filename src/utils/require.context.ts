import * as nodeDir from 'node-dir';
import * as path from 'path';
import * as fs from 'fs';

export class Context{
    protected directory: string;
    protected _files: Array<string>;

    constructor(directory, files){
        this.directory = directory;
        this._files = files;
    }

    public files(): Array<string>{
        return this._files;
    }
}

const getAllFiles = (dir, recursive, regExp) =>
    fs.readdirSync(dir).reduce((files, file) => {
        const name = path.join(dir, file);
        const isDirectory = fs.statSync(name).isDirectory();
        const matched = name.match(regExp);

        if(isDirectory){
            return recursive ? [...files, ...getAllFiles(name, recursive, regExp)]: files;
        }else {
            return matched ? [...files, name] : files;
        }
        // return isDirectory ? [...files, ...getAllFiles(name, recursive, regExp)] : matched ? [...files, name] : files;
    }, []);

export default function(directory, recursive = false, regExp = /\.(json|js)$/) {

    let files = getAllFiles(directory, recursive, regExp);

    return new context(directory, files);
}
