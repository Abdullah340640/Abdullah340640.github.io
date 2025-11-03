import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { LuMessageCircle, LuSend } from 'react-icons/lu'

export const SupportWidget = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    if (!message.trim()) return
    setMessage('')
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-brand-gold shadow-xl shadow-brand-navy/40 transition hover:bg-brand-gold hover:text-brand-navy"
        aria-label="Open support chat"
      >
        <LuMessageCircle className="text-2xl" />
      </button>
      <Transition show={open} as={Fragment}>
        <Dialog onClose={setOpen} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />
          </Transition.Child>
          <div className="fixed inset-0 flex items-end justify-end p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="translate-y-6 opacity-0"
              enterTo="translate-y-0 opacity-100"
              leave="ease-in duration-150"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="translate-y-4 opacity-0"
            >
              <Dialog.Panel className="w-full max-w-md rounded-3xl border border-brand-gold/30 bg-white/95 p-6 shadow-2xl dark:bg-surface-dark/95">
                <Dialog.Title className="text-lg font-semibold text-brand-navy dark:text-white">
                  Cosmic Support Assistant
                </Dialog.Title>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  Ask a question and our team will reply within minutes. Share context about your project or issue.
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="rounded-2xl bg-brand-gold/15 p-3 text-brand-navy">
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">
                      Suggested prompts
                    </p>
                    <ul className="mt-2 list-disc pl-5">
                      <li>"How do I integrate this template with Notion?"</li>
                      <li>"Can you help customise the automation workflow?"</li>
                      <li>"Where can I access my download receipts?"</li>
                    </ul>
                  </div>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Type your message here..."
                    className="w-full rounded-xl border border-brand-gold/30 bg-white/80 px-3 py-3 text-sm text-brand-navy outline-none transition focus:border-brand-gold dark:bg-surface-dark/80 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="button-primary flex w-full items-center justify-center gap-2"
                  >
                    Send
                    <LuSend />
                  </button>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    For urgent matters email <a href="mailto:support@cosmicrags.co.uk">support@cosmicrags.co.uk</a> or call +44 7400 706281.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default SupportWidget
