---
name: 🚨 Hotfix Crítico
description: Reportar e corrigir bugs críticos de produção
title: "[HOTFIX] "
labels: ["hotfix", "critical", "production"]
body:
  - type: markdown
    attributes:
      value: |
        ## 🚨 HOTFIX - Correção Crítica de Produção
        Use este template SOMENTE para bugs críticos que afetam produção.

  - type: input
    id: bug-summary
    attributes:
      label: 🐛 Resumo do Bug
      description: Descrição curta e clara do problema
      placeholder: "Ex: Usuários não conseguem fazer login devido a falha na autenticação"
    validations:
      required: true

  - type: textarea
    id: bug-description
    attributes:
      label: 📋 Descrição Detalhada
      description: Descreva o bug em detalhes, incluindo comportamento esperado vs atual
      placeholder: |
        Comportamento atual: [O que está acontecendo]
        Comportamento esperado: [O que deveria acontecer]
        Passos para reproduzir: [Passo 1, Passo 2, ...]
    validations:
      required: true

  - type: input
    id: affected-users
    attributes:
      label: 👥 Usuários Afetados
      description: Quantos usuários estão afetados? É todos ou um grupo específico?
      placeholder: "Ex: Todos os usuários, apenas plano Enterprise, etc."
    validations:
      required: true

  - type: input
    id: first-seen
    attributes:
      label: ⏰ Primeira Ocorrência
      description: Quando o bug foi detectado?
      placeholder: "DD/MM/AAAA HH:MM"
    validations:
      required: true

  - type: textarea
    id: impact-assessment
    attributes:
      label: 💥 Avaliação de Impacto
      description: Qual o impacto no negócio? Perda de receita, perda de dados, etc.
      placeholder: |
        - Impacto financeiro: [R$ X/hora de downtime]
        - Perda de dados: [Sim/Não/Desconhecido]
        - Reputação: [Alto/Médio/Baixo]
    validations:
      required: true

  - type: textarea
    id: solution-proposed
    attributes:
      label: 🔧 Solução Proposta
      description: Como você sugere corrigir este problema?
      placeholder: |
        1. Implementar validação adicional
        2. Adicionar retry automático
        3. Configurar alerta de monitoramento
    validations:
      required: true

  - type: textarea
    id: rollback-plan
    attributes:
      label: 🔙 Plano de Rollback
      description: Se a correção falhar, como podemos voltar rapidamente?
      placeholder: |
        1. Reverter deploy para versão X.X.X
        2. Restaurar backup do banco de dados
        3. Limpar cache
    validations:
      required: true

  - type: textarea
    id: testing-plan
    attributes:
      label: 🧪 Plano de Testes
      description: Como vamos validar que a correção funciona?
      placeholder: |
        - Testar em ambiente de staging
        - Validar com usuário de teste
        - Verificar logs de erro
    validations:
      required: true

  - type: textarea
    id: monitoring-plan
    attributes:
      label: 📊 Plano de Monitoramento
      description: Como vamos monitorar após o deploy?
      placeholder: |
        - Configurar alerta de erro rate > X%
        - Monitorar tempo de resposta
        - Verificar logs específicos
    validations:
      required: true

  - type: input
    id: urgency
    attributes:
      label: 🚨 Urgência
      description: Nível de urgência da correção
      placeholder: "Critical / High / Medium"
    validations:
      required: true

  - type: checkboxes
    id: acknowledgment
    attributes:
      label: ✅ Confirmações
      description: Confirme que você entende o processo de hotfix
      options:
        - label: Entendo que este é um processo crítico e precisa ser tratado com prioridade máxima
          required: true
        - label: Vou comunicar os stakeholders relevantes sobre a correção
          required: true
        - label: Vou documentar a causa raiz para evitar recorrências
          required: true