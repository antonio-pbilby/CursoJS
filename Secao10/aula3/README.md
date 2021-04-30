# Node / Aula 3

### Iniciar um Node Package Manager:

`npm init -y`

### Instalar um pacote:

`npm install express`

### Instalar um pacote sem atualização automática:

`npm install express -E`

### Atualizar os pacotes:

`npm update`

### Mover de dependency para devDependency:

`npm install express --save-dev`

### Mover de devDependency para dependency:

`npm install express --save-prod`

### Instalar uma versão específica:

`npm install express@2.1.0`

### Instalar uma versão baseada na major.minor.patch:

`npm install express@4.x`
Ou seja, instala a versão 4.(minor mais atual).
`npm install express@3.1.x

### Desinstalar um pacote:

`npm uninstall express`

### Listar os pacotes:

`npm ls`

### Listar por "depth":

`npm ls --depth=0`

### Listar desatualizados:

`npm outdated`
