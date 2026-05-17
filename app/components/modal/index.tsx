import { GiNestedHearts } from 'react-icons/gi'

export const Modal = ({ isOpen = false, onCLick = () => {} }) => {
  if (!isOpen) return null
  return (
    <section
      onClick={onCLick}
      className={`cursor-pointer h-full w-full flex items-center justify-center`}
    >
      <div className="h-60 absolute w-72 bg-gray-800 border border-indigo-400 rounded">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <p className="font-medium text-lg text-red-600">Giulia</p>
            <p className="font-medium text-base text-red-600">Amor</p>
          </div>
          <div className="container w-full h-full flex justify-center items-center">
            <p className="font-medium text-lg text-gray-400">
              Só queria te dizer o quanto te amo. Você é minha felicidade, meu
              tudo
            </p>
          </div>
          <div className="w-full h-full gap-4 flex justify-center items-center">
            <GiNestedHearts color="#db0505" />
            <p className="font-medium text-lg text-gray-100">
              Com amor, Crystyan
            </p>
            <GiNestedHearts color="#db0505" />
          </div>
        </div>
      </div>
    </section>
  )
}
