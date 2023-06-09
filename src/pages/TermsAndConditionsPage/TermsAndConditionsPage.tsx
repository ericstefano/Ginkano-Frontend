import { useNavigate } from 'react-router-dom';
import { Button } from '@/components';

export default function TermsAndConditionsPage() {
  const navigate = useNavigate();
  return (
    <div className='flex my-8 flex-col items-center <lg:px-8'>
      <div className='text-lg lg:w-3xl font-mono subpixel-antialiased'>
        <p className='mb-4'>
          Bem-vindo ao Ginkano! Antes de usar nosso aplicativo, é importante que
          você leia e concorde com estes Termos e Condições. Ao fazer uso de
          nossos serviços, você concorda em obedecer a estes termos. O Ginkano
          está comprometido em proteger sua privacidade e cumprir as leis de
          proteção de dados aplicáveis. Portanto, este aplicativo está em
          conformidade com a Lei Geral de Proteção de Dados (LGPD), que regula o
          tratamento de dados pessoais.
        </p>

        <span className='font-600 text-xl'>1. Coleta de Dados</span>
        <p>
          1.1. Ao utilizar o Ginkano, você concorda em fornecer informações
          precisas e atualizadas durante o processo de registro. Coletaremos e
          armazenaremos as informações necessárias para fornecer nossos
          serviços, como seu nome e informações de perfil.
        </p>
        <p className='mb-4'>
          1.2. Podemos coletar informações sobre o uso do aplicativo, como
          registros de atividades, interações e preferências, a fim de melhorar
          nossa plataforma e personalizar sua experiência.
        </p>
        <span className='font-600 text-xl'>2. Uso de dados Pessoais</span>
        <p>
          2.1. Os dados pessoais coletados serão utilizados para fornecer,
          manter e melhorar nossos serviços, bem como para comunicações
          relacionadas ao aplicativo.
        </p>
        <p>
          2.2. Não divulgaremos suas informações pessoais a terceiros, exceto
          quando exigido por lei ou com seu consentimento explícito.
        </p>
        <p className='mb-4'>
          2.3. Utilizaremos medidas de segurança adequadas para proteger suas
          informações pessoais contra acesso não autorizado, alteração,
          divulgação ou destruição.
        </p>
        <span className='font-600 text-xl'>3. Cookies</span>
        <p>
          3.1. Podemos utilizar cookies e tecnologias similares para melhorar a
          funcionalidade e a experiência do usuário. Essas tecnologias podem
          coletar informações como endereço IP, tipo de navegador e preferências
          de uso.
        </p>
        <p className='mb-4'>
          3.2. Ao utilizar o Ginkano, você consente o uso de cookies e
          tecnologias similares.
        </p>
        <span className='font-600 text-xl'>4. Cancelamento da Conta</span>
        <p>
          4.1. Você pode cancelar sua conta a qualquer momento, entrando em
          contato com nosso suporte.
        </p>
        <p className='mb-4'>
          4.2. Após o cancelamento, seus dados serão mantidos somente pelo
          período necessário para cumprir com obrigações legais.
        </p>
        <span className='font-600 text-xl'>5. Responsabilidade</span>
        <p>
          5.1. O Ginkano se esforça para manter seu aplicativo livre de erros e
          interrupções, porém, não podemos garantir a disponibilidade contínua
          ou a ausência de falhas.
        </p>
        <p className='mb-4'>
          5.2. O Ginkano não se responsabiliza por quaisquer danos diretos,
          indiretos, incidentais ou consequenciais resultantes do uso ou da
          impossibilidade de uso do aplicativo.
        </p>
        <span className='font-600 text-xl'>
          6. Alterações nos Termos e Condições
        </span>
        <p>
          6.1. O Ginkano reserva-se o direito de alterar estes Termos e
          Condições a qualquer momento. As alterações entrarão em vigor após a
          publicação em nosso aplicativo.
        </p>
        <p className='mb-4'>
          6.2. É responsabilidade do usuário revisar periodicamente os Termos e
          Condições atualizados. O uso contínuo do aplicativo após as alterações
          será considerado como aceitação dos novos termos.
        </p>
        <span className='font-600 text-xl'> 7. Disposições Finais</span>
        <p>
          7.1. Estes Termos e Condições constituem o acordo completo entre o
          usuário e o Ginkano, substituindo quaisquer acordos anteriores.
        </p>
        <p>
          7.2. Qualquer falha em fazer cumprir qualquer disposição destes termos
          não constituirá uma renúncia a tal disposição.
        </p>
        <p className='mb-4'>
          7.3. Caso alguma cláusula destes Termos e Condições seja considerada
          inválida ou inaplicável, as demais cláusulas permanecerão em pleno
          vigor e efeito. Caso tenha alguma dúvida sobre estes Termos e
          Condições, entre em contato conosco por meio dos canais de suporte
          fornecidos no aplicativo.
        </p>
        <Button className='mt-6 font-sans' onClick={() => navigate(-1)}>
          Voltar
        </Button>
      </div>
    </div>
  );
}
