//Este componente es la lista de estrellas en los reviews
//Third-Party
import { StarIcon } from "@heroicons/react/24/solid"

const StarList = ({ numberOfStars }) => {
        const iconList = []

        for(let i = 0; i < numberOfStars; i++){
            iconList.push(<StarIcon key={i} className="size-8"/>)
        }

        return <div className="flex items-center gap-1">{iconList}</div>
}

export { StarList }