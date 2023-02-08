import logo from '../assets/logo.svg'
import { Plus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { ModalContent } from './Modal'

export function Header() {
  return (
    <header className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logo} alt="logo do site"  loading='lazy'/>

      <Dialog.Root>
        <Dialog.Trigger
          className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 transition-all hover:border-violet-300'
        >
          <Plus size={20} className='text-violet-500'/>
          Novo hábito
        </Dialog.Trigger>

        <ModalContent />
      </Dialog.Root>
    </header>
  )
}
