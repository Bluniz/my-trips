module.exports = {
  //? Simular a DOM do browser para fazer os testes
  testEnvironment: 'jsdom',
  //? Ignorar algumas pastas que não desejamos que o jest olhe
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  //? Pegar a coverage sempre que executar o comando de coverage
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  //? Passar algumas informações para o jest antes de carregar todas as configurações.
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
