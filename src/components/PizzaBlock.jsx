import React, {useState} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const PizzaBlock = ({imageUrl, name, types, sizes, price, category, rating}) => {
    const availableTypes = ['традиционная', 'тонкая']
    const availableSizes = [26, 30, 40]

    const [selectedType, setSelectedType] = useState(types[0])
    const [selectedSize, setSelectedSize] = useState(sizes[0])
    const [countPizza, setCountPizza] = useState(0)


    const handleSelectedType = (i) => {
        setSelectedType(i)
    }

    const handleSelectedSize = (i) => {
        setSelectedSize(i)
    }

    const onCountPizza = () => {
        setCountPizza((countPizza) => countPizza += 1)
    }


    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {availableTypes.map((type, i) => {
                        return (
                            <li key={`${type}_${i}`}
                                className={classNames({
                                    'active': selectedType === i,
                                    'disabled': !types.includes(i),
                                })}
                                onClick={() => handleSelectedType(i)}>{type}</li>)
                    })}
                </ul>
                <ul>
                    {availableSizes.map((size, i) => {
                        return (
                            <li key={`${size}_${i}`}
                                className={classNames({
                                    'active': selectedSize === i,
                                    'disabled': !sizes.includes(size),
                                })}
                                onClick={() => handleSelectedSize(i)}>{size} см.</li>)
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                {countPizza === 0 ?
                    <div className="pizza-block__price"> от {price} ₽</div>
                    :
                    <div className="pizza-block__price"> {price * countPizza} ₽</div>
                }
                <div className="button button--outline button--add" onClick={onCountPizza}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {countPizza !== 0 &&
                    <i>{countPizza}</i>
                    }
                </div>
            </div>
        </div>
    )
}

export default PizzaBlock


PizzaBlock.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    price: PropTypes.number,
    category: PropTypes.number,
    rating: PropTypes.number
}

PizzaBlock.defaultProps = {
    name: 'Название пиццы',
    types: []
}