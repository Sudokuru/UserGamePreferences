/**
 * These are the mongoose schemas for the user_game_results collection
 * The schema currently in this collection is {@link userGamePreferencesSchema}
 * //todo at some point would like to remove these schemas as we already handle input validation with express-validator
 * //todo and the error throwing with mongoose is inconsistent and hard to work with
 * @module DbGameResultsModel
 */

import { Schema } from 'mongoose';
import * as mongoose from "mongoose";
import { UserGamePreferences } from "./interfaces";

// turns on debug mode so we can see results of successful requests
mongoose.set({ debug: true, autoCreate: true})

/**
 * This schema is saves settings for the user to search for new games with
 * By default the game search will go based on the player's learned strategies
 * Most likely we will force user to learn strategies in a set order, going out of order may be stretch goal
 * //todo update so can set strategiesToExclude and strategiesToInclude as well as adding strategiesLearned
 */
const userGamePreferencesSchema = new Schema<UserGamePreferences>({
    userId: { type: String, required: true, unique: true },
    gameSearchPreferences: {
        defaultSearchType: {type: String, enum: ['auto', 'manual', 'random'], required: true, default: 'auto' },
        difficulty: {
            low: { type: Number, required: true, default: 0 },
            high: { type: Number, required: true, default: 0 }
        },
        strategies: [{ type: String, required: true }]
        //strategiesLearned: strategies, // this would store array of strategies learned by the player
    }
});


export = mongoose.model("UserGamePreferenecs", userGamePreferencesSchema, 'user_game_preferences');