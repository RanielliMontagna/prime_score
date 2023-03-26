import { Text, Title } from '@mantine/core'
import { Link } from 'react-router-dom'
import { PrivacidadeContainer, PrivacidadeContent } from './styles'

export function Privacidade() {
  return (
    <PrivacidadeContainer>
      <PrivacidadeContent>
        <div>
          <Title order={1}>Política de Privacidade do Prime Score</Title>
          <Text>
            A privacidade e a segurança das informações pessoais dos usuários
            são de extrema importância para o site Gerador de Campeonatos,
            operado pelo{' '}
            <Link to="https://www.github.com/raniellimontagna">
              Ranielli Montagna
            </Link>
            . Esta Política de Privacidade tem como objetivo informar os
            usuários sobre como coletamos, usamos, armazenamos e compartilhamos
            as informações pessoais fornecidas pelos usuários do site. Ao usar o
            site, o usuário reconhece e concorda com os termos desta Política de
            Privacidade.
          </Text>
        </div>
        <div>
          <Title order={2}>1. Informações coletadas</Title>
          <Text>
            O site coleta informações pessoais dos usuários quando estes se
            registram e usam o site, tais como nome, endereço de e-mail, data de
            nascimento, telefone e informações de contato. O site também coleta
            informações sobre o uso do site, como o número de competições
            criadas, os tipos de competições, preferências de uso e outras
            informações relacionadas à interação com o site.
          </Text>
        </div>
        <div>
          <Title order={2}>2. Uso das informações</Title>
          <Text>
            As informações coletadas pelo site são utilizadas para melhorar a
            experiência do usuário, fornecer suporte técnico, gerenciar a conta
            do usuário e fornecer serviços personalizados. Além disso, o site
            pode utilizar as informações coletadas para fins de pesquisa,
            análise e publicidade, bem como para entrar em contato com o usuário
            para informá-lo sobre atualizações, novos recursos e outras
            informações relevantes.
          </Text>
        </div>
        <div>
          <Title order={2}>3. Compartilhamento de informações</Title>
          <Text>
            O site não compartilha informações pessoais dos usuários com
            terceiros, exceto quando exigido por lei ou quando necessário para a
            prestação de serviços contratados pelo usuário, tais como
            processamento de pagamentos. O site pode compartilhar informações
            agregadas ou anônimas que não identifiquem o usuário pessoalmente
            com terceiros para fins de pesquisa, análise e publicidade.
          </Text>
        </div>
        <div>
          <Title order={2}>4. Segurança das informações</Title>
          <Text>
            O site adota medidas de segurança para proteger as informações
            pessoais dos usuários contra perda, uso indevido, acesso não
            autorizado, alteração e divulgação. As informações pessoais são
            armazenadas em servidores seguros e são criptografadas durante a
            transmissão.
          </Text>
        </div>
        <div>
          <Title order={2}>5. Alterações na Política de Privacidade</Title>
          <Text>
            O site reserva-se o direito de modificar esta Política de
            Privacidade a qualquer momento, sem aviso prévio. As alterações
            serão efetivadas imediatamente após a publicação no site. O uso
            contínuo do site após as alterações será considerado como sua
            aceitação das alterações.
          </Text>
        </div>
        <div>
          <Title order={2}>6. Informações adicionais</Title>
          <Text>
            Se você tiver dúvidas sobre esta Política de Privacidade ou quiser
            acessar, corrigir ou excluir suas informações pessoais, entre em
            contato conosco pelo e-mail{' '}
            <Link to="mailto:raniellimontagna@hotmail.com">
              raniellimontagna@hotmail.com
            </Link>
            .
          </Text>
        </div>
      </PrivacidadeContent>
    </PrivacidadeContainer>
  )
}
