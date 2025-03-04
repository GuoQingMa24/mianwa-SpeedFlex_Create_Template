import degit from 'degit';
import chalk from 'chalk';

async function clone(cache: boolean, force: boolean, targetPath: string, source1: string) {
    const emitter = degit(source1, {
        force,
        cache
    });

    emitter.on('info', info => {
        console.log(chalk.yellow('message: ${info.message}'));
    });

    try {
        await emitter.clone(targetPath);
        return true;
    } catch (error) {
        console.log('Error:', error);
        return false;
    }
}

export default clone;
