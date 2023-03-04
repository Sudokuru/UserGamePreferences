/**
 * This is the typescript interfaces for our JSON data
 * //todo add typings to sanitized data
 * There are several 'helper' interfaces that break out some duplicate code
 * The remaining interfaces correlate to the mongoose schema
 */

/**
 * Below are the helper interfaces
 * They include: {@link strategyTypes}
 * @module Interfaces
 *
 */

interface strategyTypes {
    NAKED_SINGLE: boolean,
    HIDDEN_SINGLE: boolean,
    NAKED_PAIR: boolean,
    NAKED_TRIPLET: boolean,
    NAKED_QUADRUPLET: boolean,
    NAKED_QUINTUPLET: boolean,
    NAKED_SEXTUPLET: boolean,
    NAKED_SEPTUPLET: boolean,
    NAKED_OCTUPLET: boolean,
    HIDDEN_PAIR: boolean,
    HIDDEN_TRIPLET: boolean,
    HIDDEN_QUADRUPLET: boolean,
    HIDDEN_QUINTUPLET: boolean,
    HIDDEN_SEXTUPLET: boolean,
    HIDDEN_SEPTUPLET: boolean,
    HIDDEN_OCTUPLET: boolean,
    POINTING_PAIR: boolean,
    POINTING_TRIPLET: boolean,
    BOX_LINE_REDUCTION: boolean,
    X_WING: boolean,
    SWORDFISH: boolean,
    SINGLES_CHAINING: boolean
}

/**
 * Below are the interfaces for the {@link userGamePreferences} Mongo schema
 * //todo make casing of types consistant
 */

export interface UserGamePreferences {
    userId: string,
    gameSearchPreferences: {
        defaultSearchType: string,
        difficulty: {
            low: number,
            high: number
        },
        strategyTypes: strategyTypes
    }
}