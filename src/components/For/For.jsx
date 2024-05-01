import { isEmpty } from 'lodash-es'

const For = ({
	children,
	each,
	empty
}) => {
	const items = each.map((item, index) => children(item, index))

	if (isEmpty(items) && empty) return empty

  return items
}

export default For