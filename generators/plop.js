module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name please'
      }
    ],
    actions: [
      {
        type: 'add',
        //! Para gerar nomes coloca as duas chaves pra gerar nomes dinâmicos
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.spec.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
