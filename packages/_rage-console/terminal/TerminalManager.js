/****************************************************************************
*
* PROJECT: 	     rage-console
* DESCRIPTION:   Console for RAGE Multiplayer
* AUTHOR:        Kasimir
* VERSION:       0.3.0
*
****************************************************************************/

const pjson = require('../package.json');
const util = require('util');
const winston = require('winston');
require('winston-daily-rotate-file');

/**
 * Manages the terminal server-side and syncs to client terminal
 * @private
 */
class TerminalManager {

  constructor() {
    this.config = [];

    this._getDefaultConfig();

    this.logs = [];

    var transport = new (winston.transports.DailyRotateFile)({
      filename: './logs/%DATE%.log',
      maxSize: this.config.logs.maxSize,
      maxFiles: this.config.logs.maxFiles,
      datePattern: this.config.logs.name,
      zippedArchive: this.config.logs.zippedArchive
    });

    this.winston = new (winston.Logger)({
      transports: [transport]
    });

    this.winston.on('logged', this._log.bind(this));
    mp.events.add('console:player:ready', this._stream.bind(this));
    mp.events.add('console:player:ready', this._getConfig.bind(this));
  }

  _getDefaultConfig() {
    Object.assign(this.config, {
      logs: {
        name: 'YYYY-MM-DD',
        maxFiles: '30d',
        zippedArchive: false,
        maxSize: null
      }
    });
  }

  _getConfig() {
    mp.players.call('console:config', [{
      author: pjson.author,
      version: pjson.version
    }]);
  }

  _formatArgs(args) {
    return [util.format.apply(util.format, Array.prototype.slice.call(args))];
  }

  _log(level, msg) {
    var log = {
      timestamp: new Date().toISOString(),
      level: level,
      message: msg,
      env: 'server'
    };

    this._saveStream(log);

    mp.players.call('console:server:add', [log]);
  }

  _saveStream(log) {
    if (this.logs.length >= 10) {
      this.logs.shift();
    }

    this.logs.push(log);
  }

  _stream(player) {
    player.call('console:server:stream', [this.logs]);
  }
}

module.exports = TerminalManager;
