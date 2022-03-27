import {Link} from 'react-router-dom'
import {GoLocation} from 'react-icons/go'
import {MdWork} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobsCard = props => {
  const {jobData} = props
  const {
    employmentType,
    companyLogoUrl,
    title,
    rating,
    location,
    packagePerAnnum,
    jobDescription,
    id,
  } = jobData

  return (
    <li className="product-item">
      <Link to={`/Jobs/${id}`} className="link-item">
        <div className="card-heading">
          <img src={companyLogoUrl} alt="company logo" className="logo-img" />
          <div>
            <p className="logo-title">
              <strong>{title}</strong>
            </p>
            <p className="para">
              <AiFillStar className="star" />
              {rating}
            </p>
          </div>
        </div>
        <div className="package">
          <div className="card-sub-heading">
            <p className="location">
              <GoLocation className="location" />
              {location}
            </p>
            <p className="location">
              <MdWork className="location" />
              {employmentType}
            </p>
          </div>
          <div>
            <p>{packagePerAnnum}</p>
          </div>
        </div>
        <hr />
        <p className="para">
          <strong>Description</strong>
        </p>
        <p className="description">{jobDescription}</p>
      </Link>
    </li>
  )
}
export default JobsCard
