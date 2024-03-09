
export default function SectionTitle({children, id}) {
  return (
    <h1 id="{id && id}" className="mb-5 text-3xl font-bold text-blue-600 dark:text-blue-500">{children}</h1>
  )
}
