/* Todos os componentes/arquivos de um projeto Next,
os quais possuírem um "_AntesDoNome" (underline), são arquivos
de configuração❗ 😉 */
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

/* Por padrão, atualmente a documentação do Next
deseja que criemos nosso documento por classes, e não 
por funções ou variáveis, como estamos acostumados 🤷‍♂️*/
class MyDocument extends Document {
  /* Quando é uma classe, temos a função render, 
    que retorna alguma coisa: */
  render() {
    return (
      /*😱Sendo esse, o nosso layout padrão do aplicado,
      em todo nosso aplicativo 😱:*/

      <Html>
        {/*Componente do next/document:*/}
        <Head>
          {/* Já o título é definido via página mesmo, 
          também com o componente Head */}
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Buscador de vagas ligadas à tecnologia"
          />
          {/* Links da fonte Nunito importada do GoogleFonts: */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href={
              "https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap"
            }
            rel="stylesheet"
          ></link>
        </Head>

        <body>
          {/* Onde ficará todo o conteúdo da página 
          igual o slot do Nuxt: */}
          <Main />
          {/* Scripts do Next, renderizados depois do 
          conteúdo da página (Main): */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
