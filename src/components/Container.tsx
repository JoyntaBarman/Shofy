
interface props{
  children: React.ReactNode,
}

export default function Container({children}: props) {
  return (
    <div className="px-4 md:px-0 md:w-[640px] lg:w-[960px] xl:w-[1140px] mx-auto">{children}</div>
  )
}