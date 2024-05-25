import Image1 from "../assets/image 7.png";
import Image2 from "../assets/Group_20.png";
import Image3 from "../assets/Mask group9.png";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./Hero.css";
import Slider from "../components/Slider";
import Reveal from "../components/Reveal";

const Member = () => {
  return (
    <div>
      <div
        className="bg-white relative"
        style={{ clipPath: "polygon(0 0, 100% 0%, 100% 95%, 0% 100%)" }}
      >
        <Hero
          image1={Image1}
          image2={Image2}
          heading1={"torne-se"}
          heading2={"sócio"}
          heading1_color={"text-[#194A71]"}
          heading2_color={"text-[#816044]"}
          clip_section_class={"w-3/5"}
          arrow_pos_class={
            "!right-[37%] !lg:right-[32%] !xl:right:[25%] !2xl:right-[30%]"
          }
        />
      </div>

      <Reveal>
        <div className="flex flex-col mx-auto gap-12 w-[550px] mt-12">
          <div className="flex gap-8">
            <div className="font-zing text-end flex-shrink-0 text-6xl">
              <p className="">ser</p>
              <p className="">sócio</p>
            </div>
            <div className="">
              <p className="">
                O Snowsports Portugal - APS, é o ponto de encontro para todos os
                apaixonados por ski e snowboard em Portugal.
              </p>
              <p className="pt-6">
                Seja um praticante experiente, um iniciante entusiasmado ou uma
                família que deseja envolver seus filhos no mundo dos desportos
                de neve de forma segura e divertida, a nossa organização é para
                si.
              </p>
            </div>
          </div>

          <div className="font-bold text-xl">
            Ser sócio do Snowsports Portugal é juntar-se a uma comunidade
            vibrante de apaixonados pela neve e usufruir dos programas,
            vantagens e descontos que o clube disponibilizará, apenas para os
            seus associados.
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="my-20">
          <Slider />
        </div>
      </Reveal>

      <Reveal>
        <div className="w-[700px] flex gap-8 mx-auto mt-20">
          <div className="text-3xl flex-shrink-0 font-bold text-end">
            <p className="">PORQUÊ</p>
            <p className="">TORNAR-SE</p>
            <p className="">SÓCIO?</p>
          </div>
          <div className="flex flex-col text-lg gap-6">
            <div className="">
              <p className="font-bold">Programas Exclusivos</p>
              <p className="">
                Programas de aprendizagem, treino de competição, aperfeiçoamento
                técnico…
              </p>
            </div>
            <div className="">
              <p className="font-bold">Vantagens e Parcerias</p>
              <p className="">
                Descontos e benefícios exclusivos para membros através de
                parcerias exclusivas com lojas de equipamentos, estâncias de ski
                e outros serviços relacionados.
              </p>
            </div>
            <div className="">
              <p className="font-bold">Formação de Técnicos</p>
              <p className="">
                programas de formação e aperfeiçoamento para técnicos
                desportivos.
              </p>
            </div>
            <div className="">
              <p className="font-bold">Comunidade Vibrante</p>
              <p className="">
                comunidade vibrante de apaixonados por desportos de neve.
              </p>
            </div>
            <div className="">
              <p className="font-bold">Eventos Sociais e Lazer</p>
              <p className="">
                Participe em eventos sociais e actividades de lazer organizadas
                ao longo do ano, perfeitas para toda a família.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="flex gap-12 mt-24 -mb-44">
          <div className="">
            <img src={Image3} alt="" />
          </div>
          <div className="w-[500px] space-y-5 text-lg">
            <div className="space-y-4">
              <p className="text-xl font-bold">
                Torne-se um dos sócios pioneiros
              </p>
              <p className="">
                Junte-se a este projecto. Torne-se um dos sócios pioneiros e
                ajude-nos a construir o Snowsports Portugal, para juntos,
                elevarmos o nível dos desportos de neve em Portugal.
              </p>
            </div>
            <div className="font-bold">Inscreva-se sem compromisso</div>
            <div className="font-bold">
              Sócio Pioneiro: 3,50 euros mensais *
            </div>
            <div className="">
              *Valor para maiores de 18 anos Mensalidade / anuidade de 2024/2025
              (Outubro 24 a Outubro 25)
            </div>
            <div className="font-bold text-lg">
              CLIIQUE AQUI PARA ACEDER AO FORMULÁRIO
            </div>
          </div>
        </div>
      </Reveal>

      <Footer />
    </div>
  );
};

export default Member;
