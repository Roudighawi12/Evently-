import '../Styles/StatCard.css'

const StatCard = ({title, value}) => {
    return (
        <div className='statCard'>
            <p> {title} </p>
            <h2> {value} </h2>
        </div>
    )
}
export default StatCard;