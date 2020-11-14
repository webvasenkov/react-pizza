import React, {useState} from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Button from "./Button";

const availableTypes = ['традиционная', 'тонкая']
const availableSizes = [26, 30, 40]

const PizzaBlock = ({id, imageUrl, name, types, sizes, price, onClickAddPizza, pizzasInCart}) => {
    const [selectedType, setSelectedType] = useState(types[0])
    const [selectedSize, setSelectedSize] = useState(sizes[0])


    const handleSelectedType = (i) => {
        setSelectedType(i)
    }

    const handleSelectedSize = (i) => {
        setSelectedSize(i)
    }

    const handleClickAddPizza = () => {
        onClickAddPizza({
            id,
            imageUrl,
            name,
            types: availableTypes[selectedType],
            sizes: selectedSize,
            price
        })

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
                                    'active': size === selectedSize,
                                    'disabled': !sizes.includes(size),
                                })}
                                onClick={() => handleSelectedSize(size)}>{size} см.</li>)
                    })}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price"> от {price} ₽</div>
                <Button className="button--add" onClick={handleClickAddPizza} outline>
                    <span>Добавить</span>
                    {pizzasInCart ?
                        <i>{pizzasInCart}</i>
                        :
                        <i>0</i>
                    }

                </Button>
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
}

PizzaBlock.defaultProps = {
    name: 'Название пиццы',
    types: []
}