type TError={
    err_message:string|undefined
}
const FormErrorsComponent:React.FC<TError> = ({err_message}) => {
  return (
    <small className="text-red-500">{err_message}</small>
  )
}

export default FormErrorsComponent