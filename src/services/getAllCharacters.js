export default async function getAllCharacters({ url, setCharacters }) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      setCharacters(oldState => [...oldState, ...data.results])

      const nextUrl = data.info.next
      nextUrl && getAllCharacters({ url: nextUrl, setCharacters })
    })
}
