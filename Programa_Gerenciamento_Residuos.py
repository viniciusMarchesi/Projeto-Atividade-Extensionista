class GerenciamentoResiduos:
    def __init__(self):
        self.empresas = {}

    def adicionar_empresa(self):
        nome = input('Digite o nome da empresa: ')
        tipos_residuos = {}
        while True:
            tipo_residuo = input('Digite o tipo de resíduo (ou "sair" para sair): ')
            if tipo_residuo == 'sair':
                break
            quantidade = int(input(f'Digite a quantidade de {tipo_residuo}: '))
            tipos_residuos[tipo_residuo] = quantidade
        self.empresas[nome] = tipos_residuos

    def obter_empresas(self):
        return self.empresas

    def imprimir_empresas(self):
        for empresa, tipos_residuos in self.empresas.items():
            print(f'Empresa: {empresa}\n')
            for tipo_residuo, quantidade in tipos_residuos.items():
                print(f'  {tipo_residuo}: {quantidade}\n')

    def atualizar_empresa(self):
        nome = input('Digite o nome da empresa: ')
        if nome in self.empresas:
            tipos_residuos = {}
            while True:
                tipo_residuo = input('Digite o tipo de resíduo (ou "sair" para sair): ')
                if tipo_residuo == 'sair':
                    break
                quantidade = int(input(f'Digite a quantidade de {tipo_residuo}: '))
                tipos_residuos[tipo_residuo] = quantidade
            self.empresas[nome] = tipos_residuos

    def remover_empresa(self):
        nome = input('Digite o nome da empresa: ')
        if nome in self.empresas:
            del self.empresas[nome]

    def adicionar_residuo(self):
        empresa = input('Digite o nome da empresa: ')
        if empresa in self.empresas:
            tipo_residuo = input('Digite o tipo de resíduo: ')
            quantidade = int(input(f'Digite a quantidade de {tipo_residuo}: '))
            if tipo_residuo in self.empresas[empresa]:
                self.empresas[empresa][tipo_residuo] += quantidade
            else:
                self.empresas[empresa][tipo_residuo] = quantidade

    def obter_residuos(self):
        empresa = input('Digite o nome da empresa: ')
        if empresa in self.empresas:
            return self.empresas[empresa]
        else:
            return None

    def imprimir_residuos(self):
        empresa = input('Digite o nome da empresa: ')
        if empresa in self.empresas:
            print(f'Empresa: {empresa}\n')
            for tipo_residuo, quantidade in self.empresas[empresa].items():
                print(f'  {tipo_residuo}: {quantidade}\n')

    def atualizar_residuo(self):
        empresa = input('Digite o nome da empresa: ')
        if empresa in self.empresas:
            tipo_residuo = input('Digite o tipo de resíduo: ')
            quantidade = int(input(f'Digite a quantidade de {tipo_residuo}: '))
            if tipo_residuo in self.empresas[empresa]:
                self.empresas[empresa][tipo_residuo] = quantidade

    def remover_residuo(self):
        empresa = input('Digite o nome da empresa: ')
        if empresa in self.empresas:
            tipo_residuo = input('Digite o tipo de resíduo: ')
            if tipo_residuo in self.empresas[empresa]:
                del self.empresas[empresa][tipo_residuo]

    def obter_relatorio_ressiudos(self):
        relatorio = {}
        for empresa, tipos_ressiudos in self.empresas.items():
            for tipo_ressiudo, quantidade in tipos_ressiudos.items():
                if tipo_ressiudo not in relatorio:
                    relatorio[tipo_ressiudo] = 0
                relatorio[tipo_ressiudo] += quantidade
        return relatorio

    def imprimir_relatorio(self):
        relatorio = self.obter_relatorio_ressiudos()
        for tipo_ressiudo, quantidade in relatorio.items():
            print(f'{tipo_ressiudo}: {quantidade}\n')

gerenciamento_ressiudos = GerenciamentoResiduos()

# Adicionar empresas
gerenciamento_ressiudos.adicionar_empresa()

# Obter empresas
empresas = gerenciamento_ressiudos.obter_empresas()
print(empresas)

# Imprimir empresas
gerenciamento_ressiudos.imprimir_empresas()

# Atualizar empresa
gerenciamento_ressiudos.atualizar_empresa()

# Remover empresa
gerenciamento_ressiudos.remover_empresa()

# Adicionar resíduo
gerenciamento_ressiudos.adicionar_ressiudo()

# Obter resíduos
resiudos = gerenciamento_ressiudos.obter_ressiudos()
print(resiudos)

# Imprimir resíduos
gerenciamento_ressiudos.imprimir_resiudos()

# Atualizar resíduo
gerenciamento_ressiudos.atualizar_ressiudo()

# Remover resíduo
gerenciamento_ressiudos.remover_ressiudo()

# Obter empresas e resíduos atualizados
empresas = gerenciamento_ressiudos.obter_empresas()
print(empresas)

# Obter relatório de resíduos
relatorio = gerenciamento_ressiudos.obter_relatorio_ressiudos()
print(relatorio)

# Imprimir relatório
gerenciamento_ressiudos.imprimir_relatorio()




