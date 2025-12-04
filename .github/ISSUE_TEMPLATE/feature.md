---
name: 🚀 Nova Funcionalidade
description: Solicitar desenvolvimento de nova funcionalidade
title: "[FEATURE] "
labels: ["enhancement", "feature-request"]
body:
  - type: markdown
    attributes:
      value: |
        ## 🚀 Nova Funcionalidade
        Descreva detalhadamente a nova funcionalidade que deseja implementar.

  - type: input
    id: feature-title
    attributes:
      label: 📝 Título da Funcionalidade
      description: Nome claro e conciso da funcionalidade
      placeholder: "Ex: Automação de Campanhas no Meta Ads"
    validations:
      required: true

  - type: textarea
    id: problem-description
    attributes:
      label: 🎯 Problema a Ser Resolvido
      description: Que problema esta funcionalidade resolve? Qual é a dor do usuário?
      placeholder: |
        Problema atual: [Descreva o problema]
        Impacto nos usuários: [Como isso afeta os usuários hoje]
        Frequência: [Com que frequência este problema ocorre]
    validations:
      required: true

  - type: textarea
    id: solution-description
    attributes:
      label: 💡 Solução Proposta
      description: Descreva detalhadamente como a funcionalidade deve funcionar
      placeholder: |
        Fluxo principal:
        1. Usuário faz X
        2. Sistema executa Y
        3. Resultado Z é apresentado

        Casos de uso:
        - Caso 1: [Descrição]
        - Caso 2: [Descrição]
    validations:
      required: true

  - type: textarea
    id: acceptance-criteria
    attributes:
      label: ✅ Critérios de Aceite
      description: Como saberemos que a funcionalidade está completa?
      placeholder: |
        - [ ] Usuário pode criar campanha automaticamente
        - [ ] Sistema valida limites de orçamento
        - [ ] Notificação é enviada quando campanha é aprovada
        - [ ] Relatório de performance é gerado
    validations:
      required: true

  - type: textarea
    id: user-stories
    attributes:
      label: 📖 User Stories
      description: Histórias de usuário do ponto de vista do cliente
      placeholder: |
        Como um [tipo de usuário], eu quero [ação] para que [benefício].

        Ex: Como um analista de marketing, eu quero automatizar a criação de campanhas
        para que eu possa otimizar meu tempo e escalar minhas operações.
    validations:
      required: false

  - type: dropdown
    id: priority
    attributes:
      label: 🏷️ Prioridade
      description: Qual a prioridade desta funcionalidade?
      options:
        - "Critical - Bloqueia outras funcionalidades"
        - "High - Impacto significativo no negócio"
        - "Medium - Melhoria importante"
        - "Low - Nice to have"
        - "Future - Para próxima versão"
    validations:
      required: true

  - type: dropdown
    id: effort
    attributes:
      label: ⏱️ Estimativa de Esforço
      description: Estimativa de complexidade/tempo
      options:
        - "XS - Menos de 1 dia"
        - "S - 1-3 dias"
        - "M - 1 semana"
        - "L - 2-3 semanas"
        - "XL - Mais de 1 mês"
        - "Unknown - Precisa de mais análise"
    validations:
      required: true

  - type: textarea
    id: dependencies
    attributes:
      label: 🔗 Dependências
      description: Existem dependências com outras funcionalidades, APIs ou sistemas?
      placeholder: |
        - Depende da API do Meta Ads v18
        - Requer integração com sistema de pagamentos
        - Precisa de permissões de administrador
    validations:
      required: false

  - type: textarea
    id: technical-considerations
    attributes:
      label: 🔧 Considerações Técnicas
      description: Alguma consideração técnica importante?
      placeholder: |
        - Requer nova tabela no banco de dados
        - Impacto em performance deve ser considerado
        - Necessário atualizar documentação da API
        - Testes de integração necessários
    validations:
      required: false

  - type: textarea
    id: design-mockups
    attributes:
      label: 🎨 Mockups/Design
      description: Anexe links para mockups, protótipos ou referências visuais
      placeholder: |
        - Figma: [link para o protótipo]
        - Referências: [links de exemplos]
        - Arquivos: [anexar imagens se necessário]
    validations:
      required: false

  - type: textarea
    id: testing-requirements
    attributes:
      label: 🧪 Requisitos de Teste
      description: Quais testes são necessários?
      placeholder: |
        - Testes unitários para [módulos específicos]
        - Testes de integração com [APIs externas]
        - Testes manuais para [fluxos críticos]
        - Testes de performance para [operações pesadas]
        - Testes de segurança para [funcionalidades sensíveis]
    validations:
      required: false

  - type: checkboxes
    id: review-checklist
    attributes:
      label: ✍️ Checklist de Review
      description: Verifique se já considerou estes pontos
      options:
        - label: Já verifiquei se não existe issue similar aberta
          required: false
        - label: Já verifiquei se esta funcionalidade não foi implementada
          required: false
        - label: Já discuti com outros stakeholders
          required: false
        - label: Já tenho uma visão clara do MVP (Minimum Viable Product)
          required: false