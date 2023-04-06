import { Button, ButtonProps, Title } from '@mantine/core'
import { Fab, SHeader } from './styles'

interface IHeaderProps {
  title: string
  button?: ButtonProps
}

export function Header({ title, button }: IHeaderProps) {
  return (
    <SHeader>
      <div>
        <Title order={2}>{title}</Title>
        <Button className="webButton" {...button}>
          {button?.children}
        </Button>
        <Fab className="mobileButton" size="md" {...button}>
          {button?.children}
        </Fab>
      </div>
    </SHeader>
  )
}
