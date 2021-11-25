import { default as HeadContainer } from 'next/head'

const AppHead = (props : {title? : string}) => {
  return (
    <HeadContainer>
      <title>{
        props.title ? `${process.env.NEXT_PUBLIC_APP_NAME} - ${props.title}` : process.env.NEXT_PUBLIC_APP_NAME
      }</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
    </HeadContainer>
  )
}

export default AppHead
