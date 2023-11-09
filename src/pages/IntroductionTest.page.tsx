import { AiOutlineArrowLeft } from "react-icons/ai";
import Button from "../components/Button";
import Main from "../components/Main";
import useTestContext from "../context/test/useTest";
import { useNavigate } from "react-router-dom";

function IntroductionTestPage() {
  const { test } = useTestContext();
  const navigation = useNavigate();

  function NormalizeDate(date: string) {
    return date.split("T")[0].split("-").reverse().join("/");
  }

  console.log(test);

  return (
    <Main>
      <div className="my-8 py-7 px-8 bg-Blue rounded-xl">
        <p className="text-White">
          {test?.name} - {test && NormalizeDate(test.dateStart.toString())}
        </p>
        <h2 className="text-White text-4xl">Vem que dá tempo</h2>
      </div>
      <div className="p-8 border border-Silver rounded-xl">
        <div>
          <div>
            <h3 className="mb-2 text-Blue text-2xl font-bold">
              Vem que dá tempo!
            </h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              enim sapien, posuere in arcu ut, porta aliquam odio. Vestibulum
              porttitor nisi sed metus tristique sodales. Proin ac eleifend
              velit. Aenean at mollis est, feugiat pulvinar lacus. Nam non ante
              non felis gravida viverra.{" "}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-Blue text-2xl font-bold">Objetivos</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              enim sapien, posuere in arcu ut, porta aliquam odio. Vestibulum
              porttitor nisi sed metus tristique sodales. Proin ac eleifend
              velit. Aenean at mollis est, feugiat pulvinar lacus. Nam non ante
              non felis gravida viverra. Fusce a lorem sit amet felis
              consectetur vulputate eu ac odio. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Duis
              massa mi, convallis nec luctus viverra, ultricies eget orci.
              Suspendisse sed dictum turpis.
            </p>
            <p className="mb-4">
              Donec facilisis augue elit. Aliquam venenatis eros enim, vitae
              lobortis leo ullamcorper in. Nunc nec justo enim. Vestibulum
              scelerisque urna erat, sed scelerisque ipsum pulvinar eu. Donec
              rhoncus ante sed arcu finibus sagittis. Mauris at placerat massa.{" "}
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-Blue text-2xl font-bold">
              Informações Gerais
            </h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              enim sapien, posuere in arcu ut, porta aliquam odio. Vestibulum
              porttitor nisi sed metus tristique sodales. Proin ac eleifend
              velit. Aenean at mollis est, feugiat pulvinar lacus. Nam non ante
              non felis gravida viverra. Fusce a lorem sit amet felis
              consectetur vulputate eu ac odio. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Duis
              massa mi, convallis nec luctus viverra, ultricies eget orci.
              Suspendisse sed dictum turpis.
            </p>
            <p className="mb-4">
              Donec facilisis augue elit. Aliquam venenatis eros enim, vitae
              lobortis leo ullamcorper in. Nunc nec justo enim. Vestibulum
              scelerisque urna erat, sed scelerisque ipsum pulvinar eu. Donec
              rhoncus ante sed arcu finibus sagittis. Mauris at placerat massa.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="py-3 my-8 flex justify-center items-center gap-11">
        <Button variant="outline" onClick={() => navigation("/")}>
          <AiOutlineArrowLeft />
          Voltar
        </Button>
        <Button onClick={() => navigation("/prova/" + test?.id)}>
          INICIAR PROVA
        </Button>
      </div>
    </Main>
  );
}

export default IntroductionTestPage;
