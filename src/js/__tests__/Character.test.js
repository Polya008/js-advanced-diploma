import Character from '../Character';
import Daemon from '../Characters/Daemon';

test('Creating object Character', () => {
  expect(() => new Character()).toThrow('Нельзя создать объект класса Character');
});

test('Creating players', () => {
  expect(() => new Daemon()).not.toThrow();
});