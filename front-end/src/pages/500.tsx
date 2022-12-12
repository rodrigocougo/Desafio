export interface ErrorProps {
  statusCode: string | boolean;
}

export interface RequestErrorProps {
  res: any, err: any
}

function Error(props: ErrorProps): JSX.Element {
  return (
    <p>
      {props.statusCode
        ? `Um erro ${props.statusCode} ocorreu no servidor!`
        : 'Um erro ocorreu com o cliente!'}
    </p>
  )
}

/* Error.getInitialProps = (props: RequestErrorProps) => {
  const statusCode = props.res ? props.res?.statusCode : props.err ? props.err?.statusCode : 404
  return { statusCode }
} */

export default Error