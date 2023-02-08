import * as Dialog from '@radix-ui/react-dialog'
import { Check, X } from 'phosphor-react'

export function ModalContent() {
  return(
    <Dialog.Portal>
      <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0'/>

      <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200'>
          <X size={24} aria-label='Fechar'/>
        </Dialog.Close>

        <Dialog.Title className='text-3xl leading-tight font-extrabold'>
          Criar hábito
        </Dialog.Title>

        <form className='w-full flex flex-col mt-6'>
          <label
            htmlFor="title"
            className='leading-tight font-extrabold'
          >
            Qual o seu comprometimento?
          </label>
          <input
            type="text"
            id='title'
            placeholder='Ex.: Exercicios, dormir bem, etc...'
            autoFocus
            className='p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400'
          />


          <label
            htmlFor=""
            className='leading-tight font-extrabold mt-4'
          >
            Qual a recorrência?
          </label>
          <button type="submit" className='mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500'>
            <Check size={20} weight='bold'/>
            Confirmar
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
