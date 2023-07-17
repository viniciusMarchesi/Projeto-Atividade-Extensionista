class GerenciamentoResiduos:
    def __init__(self):
        self.empresas = {}

    def adicionar_empresa(self, nome, tipos_residuos):
        self.empresas[nome] = tipos_residuos

    def obter_empresas(self):
        return self.empresas

    def atualizar_empresa(self, nome, tipos_residuos):
        if nome in self.empresas:
            self.empresas[nome] = tipos_residuos

    def remover_empresa(self, nome):
        if nome in self.empresas:
            del self.empresas[nome]

    def adicionar_residuo(self, empresa, tipo_residuo, quantidade):
        if empresa in self.empresas:
            if tipo_residuo in self.empresas[empresa]:
                self.empresas[empresa][tipo_residuo] += quantidade
            else:
                self.empresas[empresa][tipo_residuo] = quantidade

    def obter_residuos(self, empresa):
        if empresa in self.empresas:
            return self.empresas[empresa]
        else:
            return None

    def atualizar_residuo(self, empresa, tipo_residuo, quantidade):
        if empresa in self.empresas:
            if tipo_residuo in self.empresas[empresa]:
                self.empresas[empresa][tipo_residuo] = quantidade

    def remover_residuo(self, empresa, tipo_residuo):
        if empresa in self.empresas:
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
gerenciamento_residuos.adicionar_empresa('Empresa A', {'plástico': 0, 'papel': 0})
gerenciamento_residuos.adicionar_empresa('Empresa B', {'plástico': 0, 'vidro': 0})

# Obter empresas
empresas = gerenciamento_residuos.obter_empresas()
print(empresas)

# Atualizar empresa
gerenciamento_residuos.atualizar_empresa('Empresa A', {'plástico': 10, 'papel': 5})

# Remover empresa
gerenciamento_residuos.remover_empresa('Empresa B')

# Adicionar resíduo
gerenciamento_residuos.adicionar_residuo('Empresa A', 'plástico', 3)

# Obter resíduos
residuos = gerenciamento_residuos.obter_residuos('Empresa A')
print(residuos)

# Atualizar resíduo
gerenciamento_residuos.atualizar_residuo('Empresa A', 'plástico', 7)

# Remover resíduo
gerenciamento_residuos.remover_residuo('Empresa A', 'papel')

# Obter empresas e resíduos atualizados
empresas = gerenciamento_residuos.obter_empresas()
print(empresas)

# Obter relatório de resíduos
relatorio = gerenciamento_residuos.obter_relatorio_residuos()
print(relatorio)


