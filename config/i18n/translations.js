import _reduce from 'lodash/reduce.js';

import { LOCALES } from './locales.js';

// BOT CONSTANTS
import buttonsConstants from './BotConstants/buttons.js';
import previewConstants from './BotConstants/preview.js';
import startConstants from './BotConstants/start.js';

export const translations = {
    [LOCALES.EN]: {
        ..._reduce(buttonsConstants, (res, { key, value_en }) => ({ ...res, [key]: value_en }), {}),
        ..._reduce(previewConstants, (res, { key, value_en }) => ({ ...res, [key]: value_en }), {}),
        ..._reduce(startConstants, (res, { key, value_en }) => ({ ...res, [key]: value_en }), {})
    }
}