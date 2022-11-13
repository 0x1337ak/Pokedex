export const pokemonTypeSprites: PokemonTypeSprites = {
  normal:
    'https://static.wikia.nocookie.net/pokemon/images/1/13/053Persian.png/revision/latest?cb=20140328195856',
  fighting:
    'https://static.wikia.nocookie.net/pokemon/images/a/a3/107Hitmonchan.png/revision/latest?cb=20141209050732',
  flying:
    'https://static.wikia.nocookie.net/pokemon/images/7/7a/017Pidgeotto.png/revision/latest?cb=20140328192046',
  poison:
    'https://static.wikia.nocookie.net/pokemon/images/c/cd/024Arbok.png/revision/latest?cb=20140328200611',
  ground:
    'https://static.wikia.nocookie.net/pokemon/images/3/31/050Diglett.png/revision/latest?cb=20221106143502',
  rock: 'https://static.wikia.nocookie.net/pokemon/images/a/aa/377Regirock.png/revision/latest?cb=20140329025100',
  bug: 'https://static.wikia.nocookie.net/pokemon/images/5/5d/010Caterpie.png/revision/latest?cb=20201109201919',
  ghost:
    'https://static.wikia.nocookie.net/pokemon/images/b/be/200Misdreavus.png/revision/latest?cb=20140329014023',
  steel:
    'https://static.wikia.nocookie.net/pokemon/images/8/80/600Klang.png/revision/latest?cb=20140329052246',
  fire: 'https://static.wikia.nocookie.net/pokemon/images/3/3b/077Ponyta.png/revision/latest?cb=20140328203941',
  water:
    'https://static.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest?cb=20200620223922',
  grass:
    'https://static.wikia.nocookie.net/pokemon/images/b/bf/152Chikorita.png/revision/latest?cb=20140329012502',
  electric:
    'https://static.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest/scale-to-width-down/1000?cb=20200620223403',
  psychic:
    'https://static.wikia.nocookie.net/pokemon/images/a/a7/196Espeon.png/revision/latest?cb=20140329014021',
  ice: 'https://static.wikia.nocookie.net/pokemon/images/f/f7/037AVulpix.png/revision/latest/scale-to-width-down/1000?cb=20200801080306',
  dragon:
    'https://static.wikia.nocookie.net/pokemon/images/8/8f/612Haxorus.png/revision/latest?cb=20140329052556',
  dark: 'https://static.wikia.nocookie.net/pokemon/images/3/3d/197Umbreon.png/revision/latest?cb=20140329014022',
  fairy:
    'https://static.wikia.nocookie.net/pokemon/images/5/52/669Flab%C3%A9b%C3%A9.png/revision/latest?cb=20140329054905',
  unknown:
    'https://static.wikia.nocookie.net/pokemon/images/c/c6/201Unown_X_Dream.png/revision/latest?cb=20141206092908',
  shadow:
    'https://static.wikia.nocookie.net/pokemon/images/8/89/802Marshadow.png/revision/latest?cb=20180707005932',
};

interface PokemonTypeSprites {
  [key: string]: string;
}
