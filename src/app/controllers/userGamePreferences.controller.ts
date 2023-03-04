/**
 * This is the controller file for the puzzle endpoint
 * This file is called by the router file and calls the service file
 * There are four main functions {@link createUserGamePreferences}, {@link searchUserGamePreferences},
 * {@link updateUserGamePreferences}, and {@link removeUserGamePreferences}
 * The main purpose of the controller is to make sure that only validated and sanitized data
 * moves on to the service function
 * @module UserActiveGamesController
 */

import {matchedData} from "express-validator";
const userGamePreferencesService = require('../services/userGamePreferences.service');

/**
 * Returns 201 if userActiveGameService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userGamePreferencesService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function createUserGamePreferences(req, res, next) {

    const allData = Object.values(matchedData(req, { locations: ['body'] }));
    allData.pop();
    try {
        // override successful completion code of 200 to 201 for successful object creation
        res.status(201).json(await userGamePreferencesService.createUserGamePreferences(allData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userActiveGameService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userGamePreferencesService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function searchUserGamePreferences(req, res, next) {

    const allData = matchedData(req, { locations: ['query'] });

    try {
        res.json(await userGamePreferencesService.searchUserGamePreferences(allData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userGamePreferencesService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userGamePreferencesService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function updateUserGamePreferences(req, res, next) {

    const queryData = matchedData(req, { locations: ['query'] });
    const bodyData = matchedData(req, { locations: ['body'] });
    try {
        res.json(await userGamePreferencesService.updateUserGamePreferences(bodyData, queryData));
    } catch(err) {
        next(err);
    }
}

/**
 * Returns 200 if userActiveGameService is successful
 * Otherwise catches error and sends to our errorHandler
 * Takes sanitized input and sends it to userGamePreferencesService
 * @param req This is the request object
 * @param res This is the response object
 * @param next This takes us to the errorHandler if request fails
 */
async function removeUserGamePreferences(req, res, next) {

    const allData = matchedData(req, { locations: ['query'] });
    try {
        res.json(await userGamePreferencesService.removeUserGamePreferences(allData));
    } catch(err) {
        next(err);
    }
}

export = {create: createUserGamePreferences, search: searchUserGamePreferences, update: updateUserGamePreferences, remove: removeUserGamePreferences }