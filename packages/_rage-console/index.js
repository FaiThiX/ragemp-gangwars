/****************************************************************************
*
* PROJECT: 	     rage-console
* DESCRIPTION:   Console for RAGE Multiplayer
* AUTHOR:        Kasimir
* VERSION:       0.3.0
*
****************************************************************************/

const terminal = new (require('./terminal/TerminalManager'))();

global.console.log = function() {
  terminal.winston.info.apply(terminal, terminal._formatArgs(arguments))
};

global.console.info = function(){
  terminal.winston.info.apply(terminal, terminal._formatArgs(arguments));
};

global.console.warn = function(){
  terminal.winston.warn.apply(terminal, terminal._formatArgs(arguments));
};

global.console.error = function(){
  terminal.winston.error.apply(terminal, terminal._formatArgs(arguments));
};
