import Image1 from "../assets/image 3.png";
import Image2 from "../assets/Group_20.png";
import Image3 from "../assets/Mask group4.png";
import Image4 from "../assets/Rectangle 22.png";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Reveal from "../components/Reveal";

const About = () => {
  return (
    <div>
      <div
        className="bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0%, 100% 95%, 0% 100%)" }}
      >
        <Hero
          image1={Image1}
          image2={Image2}
          heading1={"about"}
          heading2={"us"}
          heading1_color={"text-[#194A71]"}
          heading2_color={""}
          clip_section_class={"w-3/5"}
          arrow_pos_class={
            "!right-[37%] !lg:right-[32%] !xl:right:[25%] !2xl:right-[30%]"
          }
        />
      </div>

      <Reveal>
        <div className="flex flex-col mx-auto gap-20 w-[500px] mt-20">
          <div className="flex gap-8">
            <div className="font-zing text-end flex-shrink-0 text-6xl">
              <p className="">quem</p>
              <p className="">somos</p>
            </div>
            <div className="">
              <p className="">
                Snowsports Portugal - APS é um clube de desportos de Neve.
              </p>
              <p className="pt-6">
                O nosso propósito é ser o ponto de encontro para os entusiastas
                do ski e do snowboard em Portugal.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex mx-auto gap-6 w-[600px] mt-32">
          <div className="text-end flex-shrink-0 text-lg font-bold">
            <p className="">FUNDAÇÃO</p>
            <p className="">E MISSÃO</p>
          </div>

          <div className="">
            Constituída em 2021 por um grupo de entusiastas e profissionais dos
            Desportos de Neve, ambiciona reunir todos aqueles que partilham que
            partilham um interesse comum nestas modalidades. O nosso objectivo é
            promover activamente a prática do ski e do snowboard, facilitando a
            sua participação tanto a nível recreativo como no âmbito mais
            técnico ou competitivo.
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="my-32">
          <Slider />
        </div>
      </Reveal>

      <Reveal>
        <div className="flex mx-auto gap-6 w-[600px] mt-32">
          <div className="text-lg flex-shrink-0 font-bold text-end">
            <p className="">OBJECTIVOS</p>
            <p className="">PRINCIPAIS</p>
          </div>
          <div className="flex flex-col text-lg gap-6">
            <div className="">
              <p className="font-bold">Desenvolvimento das Modalidades:</p>
              <p className="">
                Colaborar activamente no crescimento do ski e snowboard enquanto
                modalidades desportivas, tornando as mais inclusivas, fomentando
                a prática competitiva, a camaradagem e o desenvolvimento dos
                seus praticantes.
              </p>
            </div>
            <div className="">
              <p className="font-bold">Acesso e Suporte:</p>
              <p className="">
                Facilitar o acesso a estes desportos por meio de programas
                inovadores e apoio técnico especializado, democratizando a sua
                prática e permitindo a todos uma experiência enriquecedora e
                segura.
              </p>
            </div>
            <div className="">
              <p className="font-bold">
                Promoção de um Estilo de Vida Saudável:
              </p>
              <p className="">
                Comunicar e incentivar os benefícios de um estilo de vida activo
                e saudável, associado aos desportos de neve e montanha,
                praticados ao ar livre e em altitude.
              </p>
            </div>
            <div className="">
              <p className="">
                Para além da sua orientação técnico-desportiva, a APS -
                Snowsports Portugal também abraça uma vocação lúdico-social,
                desenvolvendo e disponibilizando uma diversidade de programas,
                actividades e serviços do interesse geral dos seus associados –
                entusiastas da neve.
              </p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl">
                O Snowsports Portugal não é, nem pretende ser: uma agência de
                viagens, um clube recreativo, uma federação…
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex gap-8 mt-32">
          <div className="flex-1">
            <img src={Image3} alt="" />
          </div>
          <div className="flex-1 space-y-8 text-lg">
            <div className="space-y-4 w-[500px]">
              <p className="font-bold">Missão</p>
              <p className="">
                Promoção, divulgação e fomento da prática dos desportos de Neve
                em Portugal, de forma estruturada e organizada, através da
                criação, desenvolvimento e agregação de programas, serviços e
                benefícios facilitadores da participação nestes desportos
              </p>
            </div>
            <div className="space-y-4 w-[500px]">
              <p className="font-bold">Visão</p>
              <p className="">
                Ambicionamos ser a entidade de referência na promoção e fomento
                da prática dos desportos de Neve em Portugal, contribuindo
                activamente para o desenvolvimento do Ski e do Snowboard
                enquanto modalidades desportivas.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex mx-auto gap-8 w-[950px] mt-32">
          <div className="text-lg flex-shrink-0 font-bold text-end">
            <p className="">VALORES</p>
            <p className="">E PRINCÍPIOS</p>
          </div>

          <div className="grid grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-4 h-4 rounded-full bg-[#C11631]"></div>
              <div className="font-bold">
                <p className="">Paixão</p>
                <p className="">e Garra</p>
              </div>
              <div className="">
                Vivemos nossos desportos com intensidade e dedicação
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-4 h-4 rounded-full bg-[#236092]"></div>
              <div className="font-bold">
                <p className="">Perseverança</p>
                <p className="">e Competitividade</p>
              </div>
              <div className="">
                Não desistimos e buscamos sempre estar no topo.
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-4 h-4 rounded-full bg-[#7EA0BD]"></div>
              <div className="font-bold">
                <p className="">Superação</p>
                <p className="">e Diversão</p>
              </div>
              <div className="">
                Ultrapassamos desafios enquanto desfrutamos cada momento.
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-4 h-4 rounded-full bg-[#236092]"></div>
              <div className="font-bold">
                <p className="">Criatividade</p>
                <p className="">e Inovação</p>
              </div>
              <div className="">
                Ser pioneiros com soluções criativas e inovadoras.
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-4 h-4 rounded-full bg-[#7EA0BD]"></div>
              <div className="font-bold">
                <p className="">Disciplina</p>
                <p className="">e Segurança</p>
              </div>
              <div className="">
                Promovemos a segurança e o rigor em todas as nossas actividades.
              </div>
            </div>

            <div className="space-y-4">
              <div className="w-4 h-4 rounded-full bg-[#C11631]"></div>
              <div className="font-bold">
                <p className="">Integração</p>
                <p className="">e Sustentabilidade</p>
              </div>
              <div className="">
                Promovemos a inclusão e agimos com responsabilidade ambiental.
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex mx-auto gap-8 w-[900px] mt-32">
          <div className="text-lg flex-shrink-0 font-bold text-end">
            <p className="">PARA</p>
            <p className="">QUEM</p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="font-bold w-[600px]">
              O clube é aberto e dirigido a todos os entusiastas de desportos de
              neve, independentemente da sua idade, destacando-se três grupos:
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-4">
                <p className="font-bold">
                  Grandes Aficionados do Ski e Snowboard
                </p>
                <p>
                  Aqueles que praticam regularmente e têm interesse em
                  aprofundar suas habilidades técnicas ou participar em
                  competições.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-bold">Famílias</p>
                <p>
                  Famílias que procurem a participação dos mais jovens nestes
                  desportos, de forma mais regular e estruturada, encontrando na
                  APS uma solução para o efeito.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-bold">Jovens</p>
                <p>
                  Jovens de várias idades que se revejam no projecto e neste
                  encontrem uma comunidade com os interesses similares, e onde
                  possam praticar, participar e desenvolver de forma mais
                  facilitada as suas aptidões nos desportos de neve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="my-32">
          <img src={Image4} alt="" className="w-full" />
        </div>
      </Reveal>

      <Reveal>
        <div className="flex mx-auto gap-8 w-[900px] my-32">
          <div className="text-lg flex-shrink-0 font-bold text-end">
            <p className="">ÁREAS</p>
            <p className="">DE FOCO</p>
          </div>

          <div className="">
            <div className="grid grid-cols-3 gap-6">
              <div className="space-y-4">
                <p className="font-bold">Competição</p>
                <p>
                  Para praticantes de ski e snowboard que procuram uma estrutura
                  de suporte para a iniciação, desenvolvimento e envolvimento na
                  vertente competitiva das modalidades.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-bold">Formação</p>
                <p>
                  Destinado aos interessados em iniciarem-se nos desportos de
                  neve e àqueles que já praticam e desejam evoluir tecnicamente
                  participando em programas técnicos avançados.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-bold">Lazer</p>
                <p>
                  Associados que procuram na APS vantagens adicionais ligadas às
                  suas motivações, beneficiando das parcerias estabelecidas com
                  entidades internas e externas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Footer />
    </div>
  );
};

export default About;
