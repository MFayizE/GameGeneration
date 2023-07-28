import usePlatform from "./usePlatform"

const findPlatform = (id?: number) => {
    const {data: platforms} = usePlatform()
    return platforms?.results.find(p => p.id == id)
}

export default findPlatform