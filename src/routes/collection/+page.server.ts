import jokes from '../../../data/jokes.json';
import collection from '../../../data/collection.json';

export function load() {
	return { jokes, collection };
}
