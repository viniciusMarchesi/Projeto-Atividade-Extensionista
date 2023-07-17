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

    def obter_relatorio_residuos(self):
        relatorio = {}
        for empresa, tipos_residuos in self.empresas.items():
            for tipo_residuo, quantidade in tipos_residuos.items():
                if tipo_residuo not in relatorio:
                    relatorio[tipo_residuo] = 0
                relatorio[tipo_residuo] += quantidade
        return relatorio

gerenciamento_residuos = GerenciamentoResiduos()

# Adicionar empresas
gerenciamento_residuos.adicionar_empresa()

# Obter empresas
empresas = gerenciamento_residuos.obter_empresas()
print(empresas)

# Atualizar empresa
gerenciamento_residuos.atualizar_empresa()

# Remover empresa
gerenciamento_residuos.remover_empresa()

# Adicionar resíduo
gerenciamento_residuos.adicionar_ressiudo()

# Obter resíduos
resiudos = gerenciamento_residuos.obter_ressiudos()
print(resiudos)

# Atualizar resíduo
gerenciamento_residuos.atualizar_ressiudo()

# Remover resíduo
gerenciamento_residuos.remover_ressiudo()

# Obter empresas e resíduos atualizados
empresas = gerenciamento_residuos.obter_empresas()
print(empresas)

# Obter relatório de resíduos
relatorio = gerenciamento_residuos.obter_relatorio_residuos()
print(relatorio)


