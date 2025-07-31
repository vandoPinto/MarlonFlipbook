// $(() => {
//     $('.atividade').html('').removeAttr('style');

//     // Estilização inicial das regiões
//     $('.region')
//         .css({ cursor: 'pointer' })
//     // .css({ cursor: 'pointer', opacity: 0.2, background: '#0066FF' })
//     // .animate({ opacity: 0.1 }, 300)
//     // .animate({ opacity: 0.01 }, 300);

//     // Função genérica para ativar botões
//     function ativarBotao(seletorBotao, interacaoSVG, incluirVideos = false) {
//         $(seletorBotao)
//             .css({ cursor: 'pointer' })
//             // .css({ cursor: 'pointer', opacity: 0.2 })
//             // .animate({ opacity: 0.1 }, 300)
//             // .animate({ opacity: 0 }, 300)
//             .off('click')
//             .on('click', () => {
//                 console.log(`Clique em ${seletorBotao}`);
//                 inserirConteudo(interacaoSVG, incluirVideos);
//                 $('.atividade').show();

//                 $('.fechar')
//                     .off('click')
//                     .on('click', () => {
//                         $('.atividade').html('').removeAttr('style');
//                     });

//             });
//     }

//     // Função para inserir conteúdo dinâmico
//     function inserirConteudo(nomeImagem, incluirVideos = false) {
//         const magazine = $('.magazine');
//         $('.atividade')
//             .css({
//                 position: 'absolute',
//                 width: `${magazine.width()}px`,
//                 height: `${magazine.height()}px`,
//                 top: `${magazine.position().top}px`,
//                 left: `${magazine.position().left}px`,
//                 zIndex: 100,
//                 display: 'none'

//                 // position: 'absolute',
//                 // width: '75%',
//                 // height: '100%',
//                 // top: '-50%',
//                 // left: '-38%',
//                 // zIndex: 100,
//                 // display: 'none'
//             })
//             .html(`
//                 <div class="fechar borda-estilizada-janela" style="position: absolute;top: 26%;right: 2%;width: 4%;height: 4%;border-radius: 20px!important; cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
//                     <p class="texto">X</p>
//                 </div>
//                 <div class="borda-estilizada-janela" style="position: absolute;top: 25%;left: 1%;width: 95%;">
//                     <img id="interacao1" style="width: 100%; height: 100%;" src="atividades/${nomeImagem}">
//                 </div>
//                 ${incluirVideos ? `
//                     <iframe id="video1" width="859" height="483" style="position: absolute; left: 4.5%; top: 54%; width: 46.5%; height: 26%; z-index: 100;" src="https://www.youtube.com/embed/JF_X8-_fOQQ" ...></iframe>
//                     <iframe id="video2" width="915" height="483" style="position: absolute; left: 4.5%; top: 27%; width: 46.5%; height: 26%; z-index: 100" src="https://www.youtube.com/embed/VXpGFsMpcsM" ...></iframe>
//                 ` : ''}
//             `);
//     }

//     // Ativar os três botões
//     ativarBotao('.botao_1', 'Interacao1.svg', true);
//     ativarBotao('.botao_2', 'Interacao2.svg');
//     ativarBotao('.botao_3', 'Interacao3.svg');
// });


$(() => {
    $('.atividade').hide();

    $('.region').css({ cursor: 'pointer' })

    function insertconteudo(html) {
        $('.atividade')
            .css({
                position: 'absolute',
                width: `${$('.magazine').width()}px`,
                height: `${$('.magazine').height()}px`,
                top: `${$('.magazine').position().top}px`,
                left: `${$('.magazine').position().left}px`,
                zIndex: 100,
                display: 'none'
            })
            .html(html);
    }

    tela08();

    function tela08() {
        var conteudoTela = `
               <div class="borda-estilizada-janela" style="position: absolute;background-image: url('atividades/fundoHotWord.png');background-size: cover;background-position: center;top: 68%;left: 40%;width: 50%;align-items: center;padding: 10px 20px;background-color: rgba(255, 255, 255, 0.6);background-blend-mode: overlay;">
                    <div class="fechar borda-estilizada-janela" style="position: absolute;top: 3%;right: 5%;width: 1%;height: 4%;border-radius: 20px!important;cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
                        <p class="texto">X</p>
                    </div>     
                    <p style="font-size: 15px;text-align: center;">
                       François Tosquelles foi um psiquiatra catalão, militante antimanicomial e antifranquista e pioneiro na psicoterapia institucional.
                    </p>
                </div>
                `

        $('#hotWord-bt1')
            .css({ cursor: 'pointer' })
            .off('hover click touchstart')
            .on('hover click touchstart', () => {
                insertconteudo(conteudoTela);
                $('.atividade').show();
                $('.fechar')
                    .css({ cursor: 'pointer' })
                    .off('hover click touchstart')
                    .on('hover click touchstart', () => {
                        $('.atividade').hide();
                    });
            });
    }

    tela09();
    function tela09() {
        var conteudoTela2 = `
               <div class="borda-estilizada-janela" style="position: absolute;background-image: url('atividades/fundoHotWord.png');background-size: cover;background-position: center;top: 26%;left: 20%;width: 50%;align-items: center;padding: 10px 20px;background-color: rgba(255, 255, 255, 0.6);background-blend-mode: overlay;">
                    <div class="fechar borda-estilizada-janela" style="position: absolute;top: 3%;right: 5%;width: 1%;height: 2%;border-radius: 20px!important;cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
                        <p class="texto">X</p>
                    </div>     
                    <p style="font-size: 15px;text-align: center;">
                        Matraga é o codinome utilizado por Marcus Vinícius de Oliveira e Silva, psicólogo, professor da UFBA e importante ator da Reforma Psiquiátrica Brasileira. Ele também era poeta e assinava como Marcus Matraga os seus poemas. Marcus foi assassinado em uma emboscada, no dia 4 de fevereiro de 2016, em Pirajuia, na Bahia.
                    </p>
                </div>
                `
        var conteudoTela3 = `
              <div class="borda-estilizada-janela" style="position: absolute;background-image: url('atividades/fundoHotWord.png');background-size: cover;background-position: center;top: 49%;left: 11%;width: 75%;align-items: center;padding: 10px 20px;background-color: rgba(255, 255, 255, 0.6);background-blend-mode: overlay;">
                    <div class="fechar borda-estilizada-janela" style="position: absolute;top: 3%;right: 5%;width: 1%;height: 2%;border-radius: 20px!important;cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
                        <p class="texto">X</p>
                    </div>     
                    <p style="font-size: 15px;text-align: center;">
                        É um dos autores deste curso, enfermeiro, graduado pela Escola de Enfermagem da Universidade Federal da Bahia. Especialista em Saúde Mental, sob forma de Residência Multiprofissional em Saúde pela Universidade do Estado da Bahia. Mestre em Saúde Comunitária pelo Instituto de Saúde Coletiva da UFBA. Atuou como docente na Escola de Enfermagem da UFBA entre 2016 e 2023. Atualmente, é docente do Instituto de Saúde Coletiva da UFBA.
                    </p>
                </div>
                `

        $('#hotWord-bt2')
            .css({ cursor: 'pointer' })
            .off('hover click touchstart')
            .on('hover click touchstart', () => {
                insertconteudo(conteudoTela2);
                $('.atividade').show();
                $('.fechar')
                    .css({ cursor: 'pointer' })
                    .off('hover click touchstart')
                    .on('hover click touchstart', () => {
                        $('.atividade').hide();
                    });
            });

        $('#hotWord-bt3, #hotWord-bt4')
            .css({ cursor: 'pointer' })
            .off('hover click touchstart')
            .on('hover click touchstart', () => {
                insertconteudo(conteudoTela3);
                $('.atividade').show();
                $('.fechar')
                    .css({ cursor: 'pointer' })
                    .off('hover click touchstart')
                    .on('hover click touchstart', () => {
                        $('.atividade').hide();
                    });
            });
    }

    tela11();
    function tela11() {
        var conteudoTela5 = `
              <div class="borda-estilizada-janela" style="position: absolute;background-image: url('atividades/fundoHotWord.png');background-size: cover;background-position: center;top: 45%;left: 4%;
              width: 67%;align-items: center;padding: 10px 20px;background-color: rgba(255, 255, 255, 0.6);background-blend-mode: overlay;">
                    <div class="fechar borda-estilizada-janela" style="position: absolute;top: 3%;right: 5%;width: 1%;height: 4%;border-radius: 20px!important;cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
                        <p class="texto">X</p>
                    </div>     
                    <p style="font-size: 15px; margin-top: 25px;">
                        2024 Portaria GM/MS no4.876, de 18 de julho de 2024, que institui a Equipe 
de Avaliação e Acompanhamento de Medidas Terapêuticas Aplicáveis à 
Pessoa com Transtorno Mental em Conflito com a Lei (EAP-Desinst)
                    </p>
                </div>
                `

        var conteudoTela = `
                    <div class="fechar borda-estilizada-janela" style="position: absolute;top: 26%;right: 2%;width: 4%;height: 4%;border-radius: 20px!important; cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
                       <p class="texto">X</p>
                   </div>
                    <div class="borda-estilizada-janela" style="position: absolute;top: 25%;left: 1%;width: 95%;">
                        <img id="interacao1" style="width: 100%; height: 100%;" src="atividades/Interacao1.png">
                    </div>
                    `
        // <iframe id="video1" width="859" height="483" style="position: absolute;left: 4.5%;top: 54%;width: 46.5%;height: 26%; z-index: 100" src="https://www.youtube.com/embed/JF_X8-_fOQQ" title="O que todos precisam aprender com os indígenas sobre cuidar da natureza? #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
        // <iframe id="video2" width="915" height="483" style="position: absolute;left: 4.5%;top: 27%;width: 46.5%;height: 26%; z-index: 100" src="https://www.youtube.com/embed/VXpGFsMpcsM" title="5 - SHIVA E O BEIJA-FLOR - Ailton Krenak e Satish Kumar - CONVERSA NA REDE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>

        $('#hotWord-bt5')
            .css({ cursor: 'pointer' })
            .off('hover click touchstart')
            .on('hover click touchstart', () => {
                insertconteudo(conteudoTela5);
                $('.atividade').show();
                $('.fechar')
                    .css({ cursor: 'pointer' })
                    .off('hover click touchstart')
                    .on('hover click touchstart', () => {
                        $('.atividade').hide();
                    });
            });

        $('.botao_1')
            .css({ cursor: 'pointer' })
            .off('click')
            .on('click', () => {
                console.log('botao 1');

                insertconteudo(conteudoTela);
                $('.atividade').show();
                $('.fechar')
                    .off('click')
                    .on('click', () => {
                        $('.atividade').hide();
                    });
            });
    }

    tela12();

    function tela12() {
        var conteudoTela6 = `
               <div class="borda-estilizada-janela" style="position: absolute;background-image: url('atividades/fundoHotWord.png');background-size: cover;background-position: center;top: 36%;left: 3%;width: 77%;align-items: center;padding: 10px 20px;background-color: rgba(255, 255, 255, 0.6);background-blend-mode: overlay;">
                    <div class="fechar borda-estilizada-janela" style="position: absolute;top: 3%;right: 3%;width: 1%;height: 2%;border-radius: 20px!important;cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
                        <p class="texto">X</p>
                    </div>     
                    <p style="font-size: 15px;text-align: center;">
                        Uma das autoras deste curso, com mestrado em Saúde Coletiva pela Universidade Estadual de Feira de Santana (UEFS). Doutoranda em Saúde Pública pela Universidade Federal da Bahia (UFBA). É médica da Secretaria de Saúde do Estado da Bahia (SESAB), atuando em uma equipe de avaliação e acompanhamento de medidas terapêuticas aplicáveis à pessoa com transtorno mental em conflito. É também professora assistente do Departamento de Saúde da UEFS e pesquisadora do Núcleo de Estudos Interdisciplinar em Desigualdades em Saúde (NUDES) da Universidade Estadual de Feira de Santana.
                    </p>
                </div>
                `

        $('#hotWord-bt6')
            .css({ cursor: 'pointer' })
            .off('hover click touchstart')
            .on('hover click touchstart', () => {
                insertconteudo(conteudoTela6);
                $('.atividade').show();
                $('.fechar')
                    .css({ cursor: 'pointer' })
                    .off('hover click touchstart')
                    .on('hover click touchstart', () => {
                        $('.atividade').hide();
                    });
            });
    }

    tela17();

    function tela17() {
        var conteudoTela17 = `
              <div class="borda-estilizada-janela" style="position: absolute;background-image: url('atividades/fundoHotWord.png');background-size: cover;background-position: center;top: 47%;left: 9%;width: 77%;align-items: center;padding: 10px 20px;background-color: rgba(255, 255, 255, 0.6);background-blend-mode: overlay;">
                    <div class="fechar borda-estilizada-janela" style="position: absolute;top: 3%;right: 3%;width: 1%;height: 2%;border-radius: 20px!important;cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
                        <p class="texto">X</p>
                    </div>     
                    <p style="font-size: 15px;text-align: center;">
                        Uma das autoras deste curso, com mestrado em Saúde Coletiva pela Universidade Estadual de Feira de Santana (UEFS). Doutoranda em Saúde Pública pela Universidade Federal da Bahia (UFBA). É médica da Secretaria de Saúde do Estado da Bahia (SESAB), atuando em uma equipe de avaliação e acompanhamento de medidas terapêuticas aplicáveis à pessoa com transtorno mental em conflito. É também professora assistente do Departamento de Saúde da UEFS e pesquisadora do Núcleo de Estudos Interdisciplinar em Desigualdades em Saúde (NUDES) da Universidade Estadual de Feira de Santana.
                    </p>
                </div>
                `

        $('#hotWord-bt17, #hotWord-bt17a')
            .css({ cursor: 'pointer' })
            .off('hover click touchstart')
            .on('hover click touchstart', () => {
                insertconteudo(conteudoTela17);
                $('.atividade').show();
                $('.fechar')
                    .css({ cursor: 'pointer' })
                    .off('hover click touchstart')
                    .on('hover click touchstart', () => {
                        $('.atividade').hide();
                    });
            });
    }

    tela18();

    function tela18() {
        var conteudoTela18 = `
              <div class="borda-estilizada-janela" style="position: absolute;background-image: url('atividades/fundoHotWord.png');background-size: cover;background-position: center;top: 26%;left: 5%;width: 82%;align-items: center;padding: 10px 20px;background-color: rgba(255, 255, 255, 0.6);background-blend-mode: overlay;">
                    <div class="fechar borda-estilizada-janela" style="position: absolute;top: 3%;right: 3%;width: 1%;height: 2%;border-radius: 20px!important;cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
                        <p class="texto">X</p>
                    </div>     
                    <p style="font-size: 15px;text-align: center;">
                        O CID (Classificação Internacional de Doenças) é um sistema criado pela Organização Mundial da Saúde (OMS) para categorizar e padronizar doenças e outros problemas de saúde. Sua função principal é facilitar a organização, o armazenamento e a recuperação de informações sobre doenças e condições médicas, tanto para fins clínicos quanto epidemiológicos e estatísticos. O CID permite que profissionais de saúde e pesquisadores tenham uma linguagem comum e internacionalmente reconhecida para identificar e descrever doenças.
                        A versão mais recente é o CID-11, publicada em 2019, mas o CID-10 ainda é amplamente utilizado em muitos países, inclusive no Brasil. Essa classificação organiza as doenças e os problemas de saúde em categorias específicas, com códigos alfanuméricos que facilitam o registro de diagnósticos médicos em prontuários e sistemas de saúde.
                    </p>
                </div>
                `
        var conteudoTela18a = `
              <div class="borda-estilizada-janela" style="position: absolute;background-image: url('atividades/fundoHotWord.png');background-size: cover;background-position: center;top: 43%;left: 5%;width: 86%;align-items: center;padding: 10px 20px;background-color: rgba(255, 255, 255, 0.6);background-blend-mode: overlay;">
                    <div class="fechar borda-estilizada-janela" style="position: absolute;top: 3%;right: 3%;width: 1%;height: 2%;border-radius: 20px!important;cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
                        <p class="texto">X</p>
                    </div>     
                    <p style="font-size: 15px;text-align: center;">
                        Algo ou alguém idiossincrático é caracterizado por traços, comportamentos ou características peculiares e únicos que o diferenciam dos demais. A palavra "idiossincrasia" se refere a particularidades pessoais, que podem ser tanto no modo de agir, pensar ou sentir, quanto em aspectos mais amplos, como preferências ou manias. Quando dizemos que uma pessoa é idiossincrática, estamos destacando o fato de que ela possui um conjunto de características distintivas, não necessariamente comuns ou previsíveis.
                        Por exemplo, uma pessoa que tem hábitos alimentares muito específicos ou uma maneira muito singular de se expressar pode ser descrita como idiossincrática. No âmbito artístico, um autor com um estilo de escrita único também pode ser considerado idiossincrático, pois suas obras apresentam uma originalidade que o diferencia de outros criadores.
                        Em resumo, idiossincrático denota aquilo que é individual e não segue padrões comuns, sendo uma expressão da singularidade de uma pessoa ou coisa.
                    </p>
                </div>
                `

        $('#hotWord-bt18')
            .css({ cursor: 'pointer' })
            .off('hover click touchstart')
            .on('hover click touchstart', () => {
                insertconteudo(conteudoTela18);
                $('.atividade').show();
                $('.fechar')
                    .css({ cursor: 'pointer' })
                    .off('hover click touchstart')
                    .on('hover click touchstart', () => {
                        $('.atividade').hide();
                    });
            });

        $('#hotWord-bt18a')
            .css({ cursor: 'pointer' })
            .off('hover click touchstart')
            .on('hover click touchstart', () => {
                insertconteudo(conteudoTela18a);
                $('.atividade').show();
                $('.fechar')
                    .css({ cursor: 'pointer' })
                    .off('hover click touchstart')
                    .on('hover click touchstart', () => {
                        $('.atividade').hide();
                    });
            });
    }

    tela19();
    function tela19() {
        var conteudoTela = `
                    <div class="fechar borda-estilizada-janela" style="position: absolute;top: 26%;right: 2%;width: 4%;height: 4%;border-radius: 20px!important; cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
                       <p class="texto">X</p>
                   </div>
                    <div class="borda-estilizada-janela" style="position: absolute;top: 25%;left: 1%;width: 95%;">
                        <img id="interacao1" style="width: 100%; height: 100%;" src="atividades/Interacao2.png">
                    </div>
                    <iframe id="video1" width="859" height="483" style="position: absolute;left: 4.5%;top: 40%;width: 50%;height: 26%; z-index: 100" src="https://www.youtube.com/embed/7ouSg6oNMe8" title="A história da saúde pública no Brasil – 500 anos na busca de soluções" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
                    <a href="https://books.scielo.org/id/4ndgv" target="_blank" style="display: block;z-index: 100;position: absolute;top: 68%;left: 73%;width: 10%;height: 10%;background-color: rgba(0, 0, 255, 0);"></a>
                    `

        $('.botao_2')
            .css({ cursor: 'pointer' })
            .off('click')
            .on('click', () => {
                console.log('botao 1');

                insertconteudo(conteudoTela);
                $('.atividade').show();
                $('.fechar')
                    .off('click')
                    .on('click', () => {
                        $('.atividade').hide();
                    });
            });
    }

    tela22();
    function tela22() {
        var conteudoTela = `
                    <div class="fechar borda-estilizada-janela" style="position: absolute;top: 26%;right: 2%;width: 4%;height: 4%;border-radius: 20px!important; cursor: pointer;display: flex;flex-direction: column;justify-content: center;align-items: center;color: #a3ceb5;z-index: 100;">
                       <p class="texto">X</p>
                   </div>
                    <div class="borda-estilizada-janela" style="position: absolute;top: 25%;left: 1%;width: 95%;">
                        <img id="interacao1" style="width: 100%; height: 100%;" src="atividades/Interacao3.png">
                    </div>
                    <iframe id="video3" width="859" height="483" style="position: absolute;left: 43%;top: 36%;width: 53%;height: 30%;z-index: 100;" src="https://www.youtube.com/embed/SwomwkwuA5Y" title="SUS: quais as conquistas e desafios da saúde pública no país?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen=""></iframe>
                    `

        $('.botao_3')
            .css({ cursor: 'pointer' })
            .off('click')
            .on('click', () => {
                console.log('botao 1');

                insertconteudo(conteudoTela);
                $('.atividade').show();
                $('.fechar')
                    .off('click')
                    .on('click', () => {
                        $('.atividade').hide();
                    });
            });
    }
})