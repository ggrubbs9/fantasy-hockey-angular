import { Team } from 'src/app/models';
import { teamListActionKey } from '../feature-name.const';

const actionPrefix = teamListActionKey + '[API] ';

export const get = createGetterActions<Team[]>(actionPrefix + 'GET');
