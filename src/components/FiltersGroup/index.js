import ProfileDetails from '../ProfileDetails'

import './index.css'

const FiltersGroup = props => {
  const renderEmploymentFiltersList = () => {
    const {employmentTypesList} = props
    return employmentTypesList.map(employmentType => {
      const {changeTypeOfEmployment} = props
      const onClickTypeOfEmployment = () =>
        changeTypeOfEmployment(employmentType.employmentTypeId)

      return (
        <li
          className="employmentType-item"
          key={employmentType.label}
          onClick={onClickTypeOfEmployment}
        >
          <input
            type="checkbox"
            className="check-radio"
            id={employmentType.employmentTypeId}
            value={employmentType.employmentTypeId}
          />
          <p className="TypeOfEmploymentClassName">{employmentType.label}</p>
        </li>
      )
    })
  }

  const renderEmploymentType = () => (
    <div className="salary-container">
      <h1 className="salary-heading">
        <strong>Type of Employment</strong>
      </h1>
      <ul className="salary-range-container">
        {renderEmploymentFiltersList()}
      </ul>
    </div>
  )

  const getSalaryRangeList = () => {
    const {salaryRangesList} = props

    return salaryRangesList.map(salary => {
      const {changeSalaryRange} = props
      const onChangeSalary = () => changeSalaryRange(salary.salaryRangeId)

      return (
        <li
          className="checkbox-list-items"
          key={salary.label}
          onClick={onChangeSalary}
        >
          <input
            type="radio"
            className="check-radio"
            id={salary.salaryRangeId}
            name="salary"
          />
          <label htmlFor={salary.salaryRangeId} className="check-label">
            {salary.label}
          </label>
        </li>
      )
    })
  }

  const renderSalaryRange = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Salary Range</h1>
      <ul className="salary-range-container">{getSalaryRangeList()}</ul>
    </div>
  )

  return (
    <div className="filters-group-container">
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderEmploymentType()}
      {renderSalaryRange()}
    </div>
  )
}

export default FiltersGroup
