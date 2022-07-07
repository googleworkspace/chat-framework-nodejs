import express from 'express';
/**
 * Express middleware for authenticating chat requests.
 * @param projectNumber - Project # for the bot, used to validate the audience.
 * @returns Express middleware handler
 */
export declare function authenticateRequest(projectNumber: number | string): express.Handler;
