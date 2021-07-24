const { Command, flags } = require('@oclif/command');
const generate = require('./grammar');

class DrawingIdeasCommand extends Command {
  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: 'v' }),
    // add --help flag to show CLI version
    help: flags.help({ char: 'h' }),
    name: flags.string({ char: 'n', description: 'name to print' }),
  };

  async run() {
    const { flags, args, argv } = this.parse(DrawingIdeasCommand);
    this.log(generate());
  }
}

DrawingIdeasCommand.description = `Describe the command here
...
Let's draw something nice!
`;

module.exports = DrawingIdeasCommand;
