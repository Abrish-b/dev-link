
const Links = () => {
  return (
    <div className="p-4">
        {[1,2,3,4,5].map(val =><a key={val} href="/link"><h1 className="text-white">link {val}</h1></a>)}
    </div>
  )
}

export default Links