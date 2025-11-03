import clsx from 'clsx'

interface ContainerProps {
  className?: string
  children: React.ReactNode
  id?: string
}

export const Container = ({ className, children, id }: ContainerProps) => {
  return (
    <div id={id} className={clsx('mx-auto w-full max-w-7xl px-6', className)}>
      {children}
    </div>
  )
}

export default Container
