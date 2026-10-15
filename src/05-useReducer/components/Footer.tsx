interface IWordsProps {
  words: string[]
}

export const Footer = ({words}: IWordsProps) => {
  return (
    <div className="text-center mt-6">
      <p className="text-sm text-gray-500">
        Desafíate con palabras desordenadas!
        <br/>
        <br/>
        {words.join(', ')}
      </p>
    </div>
  )
}
