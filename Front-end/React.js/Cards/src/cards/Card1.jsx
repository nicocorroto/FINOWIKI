import './CardLoading.css'

const Card1 = ({ title, info }) => {
  return (
    <div class="card">
      <div class="card-img"></div>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p class="card-intro">{info}</p>
      </div>
    </div>
  )
}

export default Card1