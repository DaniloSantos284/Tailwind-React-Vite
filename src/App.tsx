import Insta from "../public/insta-img.png";
import Logo from "../public/insta-logo.png";
import Google from "../public/google.png";
import Apple from "../public/apple.png";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Div Principal */}
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 grid-rows-6">
        {/*Imagem lateral esqueda*/}
        <div className="row-span-5 md:flex justify-end hidden">
          <img className="w-96" src={Insta} />
        </div>
        {/*Corpo*/}
        <div className="row-span-5 flex flex-col justify-center items-center grid-cols-1 ">
          <form className="w-80 flex flex-col justify-center items-center border rounded-sm px-10 py-4 gap-5">
            <img className="w-52" src={Logo} />
            <input
              className="bg-slate-50 h-9 w-full pl-3 border rounded-sm "
              placeholder="Número de telefone ou usuário"
            />
            <input
              className="bg-slate-50 h-9 w-full pl-3 border rounded-sm "
              placeholder="Senha"
              type="password"
            />
            <button className="bg-blue-500 w-full rounded-sm h-8 text-slate-50 hover:bg-blue-400">
              Entrar
            </button>
            <a href="" className="text-blue-500 font-bold cursor-pointer">Logar com o Facebook</a>
            <a href="" className="text-blue-500 text-sm cursor-pointer font-bold">Esqueci minha senha</a>
          </form>
        <div className="border w-80 my-4 text-center py-4 rounded-sm">
          <p>Não tem conta ?<a className="text-blue-500 font-bold"> Cadastrar-se</a></p>
        </div>
        <p>Baixe o aplicativo</p>
        <div className="flex gap-2 mt-4">
          <img className="h-10" src={Apple} />
          <img className="h-10" src={Google} />
        </div>
        </div>
        {/*footer*/}
        <footer className="row-span-1 col-span-2">
          <ul className="flex flex-wrap gap-5 justify-center">
            <li className="text-slate-800 text-sm"> Meta </li>
            <li className="text-slate-800 text-sm"> Sobre </li>
            <li className="text-slate-800 text-sm"> Blog </li>
            <li className="text-slate-800 text-sm"> Carreiras </li>
            <li className="text-slate-800 text-sm"> Ajud </li>
            <li className="text-slate-800 text-sm"> API </li>
            <li className="text-slate-800 text-sm"> Privacidade </li>
            <li className="text-slate-800 text-sm"> Termos </li>
            <li className="text-slate-800 text-sm"> Localizações </li>
            <li className="text-slate-800 text-sm">Instagram Lite</li>
            <li className="text-slate-800 text-sm"> Meta </li>
            <li className="text-slate-800 text-sm"> Artigos da Meta AI</li>
            <li className="text-slate-800 text-sm"> Threads </li>
            <li className="text-slate-800 text-sm"> Upload de contatos e não usuários</li>
            <li className="text-slate-800 text-sm"> Meta Verified</li>
          </ul>
          <ul className="flex flex-wrap gap-5 justify-center">
            <li className="text-slate-800">Português (Brasil)</li>
            <li className="text-slate-800">© 2025 Instagram from Meta</li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Home;
