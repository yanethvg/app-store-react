import React, { useEffect } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesAction } from '../../actions/getCategoriesAction'
import PaginationActionsTable from '../utils/PaginationActionsTable'
import TableCategories from './TableCategories'

const Categories = () => {
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.auth.token)
  useEffect(() => {
    const loadCategories = () => dispatch(getCategoriesAction(token))
    loadCategories()
  }, [dispatch, token])
  const loading = useSelector(state => state.categories.loading)
  const error = useSelector(state => state.categories.error)
  const categories = useSelector(state => state.categories.categories)
  console.log(categories)
  const columns = [
    { id: 'id', label: 'Id', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 }
  ]
  console.log(columns)
  return (
    <div>
      <PaginationActionsTable
        rows={categories}
        columns={columns}
      ></PaginationActionsTable>
    </div>
  )
}

export default Categories
