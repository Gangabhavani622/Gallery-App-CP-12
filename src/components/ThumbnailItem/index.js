// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, updateImageUrl} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = thumbnailItem

  const onClickButton = () => {
    updateImageUrl(imageUrl, imageAltText)
  }

  return (
    <li>
      <button type="button" onClick={onClickButton} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
