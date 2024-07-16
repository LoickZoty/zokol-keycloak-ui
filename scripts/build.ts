import archiver from 'archiver';
import { createWriteStream, existsSync, mkdirSync } from 'fs';

import { name, version } from '../package.json';

const dir = 'out';
const file = `${name}-${version}.jar`;
const path = `${dir}/${file}`;

!existsSync(dir) && mkdirSync(dir);

const output = createWriteStream(`${__dirname}/../${path}`);

const archive = archiver('zip');

archive.on('error', (error) => {
  throw error;
});

archive.pipe(output);

archive.directory('META-INF', 'META-INF');
archive.directory('theme', 'theme');

archive.finalize();
