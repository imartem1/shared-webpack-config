import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'app/hooks/redux';
import { counterActions } from '../model/slice/counterSlice';
import getCounterValue from '../model/selectors/getCounterValue/getCounterValue';

const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useAppSelector(getCounterValue);
    const { t } = useTranslation();
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                onClick={increment}
                data-testid="increment-btn"
            >
                {t('increment')}
            </Button>
            <Button
                onClick={decrement}
                data-testid="decrement-btn"
            >
                {t('decrement')}
            </Button>
        </div>
    );
};

Counter.defaultProps = {
    className: '',
};

export default Counter;
