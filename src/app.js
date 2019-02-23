/*
 * Copyright (c) 2019
 * Powered by Alexis M. (iSnkh)
 * Zaphkiel - www.snkh.me
 *
 * This project can not be copied and/or distributed without permission of Alexis M. (iSnkh)
 * Zaphkiel is under private licence.
 */

require('dotenv').config()

/**
 * Client 
 */

const { Client } = require('klasa');

new Client({
    fetchAllMembers: false,
    prefix: process.env.PREFIX,
    commandEditing: true,
    typing: true,
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`
}).login();