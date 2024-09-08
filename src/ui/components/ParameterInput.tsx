import { InputNumber, Tooltip } from 'antd';
import React, { ReactNode } from 'react';
import i18n from '../../i18n/i18n';

type ParameterInputProps = {
    value: number | null;
    unit?: ReactNode;
    min?: number;
    max?: number;
    onNewValue: (value: number) => void;
    warningText?: string;
    warningBelow?: number;
    warningAbove?: number;
    checkValue?: (value: number) => boolean;
    disabled?: boolean;
    decimalPlaces?: number;
    direct?: boolean;
    always_available?: boolean;
};

type ParameterInputState = {
    value: number | null;
    warning: boolean;
};

class ParameterInputComponent extends React.Component<
    ParameterInputProps,
    ParameterInputState
> {
    static defaultProps = {
        warningText: '',
        warningBelow: undefined,
        warningAbove: undefined,
        checkValue: undefined,
        disabled: false,
        unit: undefined,
        decimalPlaces: 0,
        min: undefined,
        max: undefined,
        always_available: false,
    };

    constructor(props: any) {
        super(props);
        const { value } = this.props;
        this.state = { value, warning: false };
    }

    static getDerivedStateFromProps(
        props: ParameterInputProps,
        state: ParameterInputState,
    ) {
        if (props.value !== state.value) {
            return {
                value: props.value,
            };
        }
        return null;
    }

    render() {
        const { value, warning } = this.state;
        const {
            unit,
            min,
            max,
            onNewValue,
            warningText,
            warningBelow,
            warningAbove,
            checkValue,
            disabled,
            decimalPlaces,
            always_available,
        } = this.props;
        if (!always_available && value === null) return i18n.t('not_available');
        return (
            <Tooltip title={warningText} trigger="click" open={warning}>
                <InputNumber
                    min={min}
                    max={max}
                    value={value as number}
                    addonAfter={unit}
                    style={{ minWidth: '150px' }}
                    onChange={(number) => {
                        if (number !== null) {
                            let tmp = false;
                            tmp ||=
                                warningBelow !== undefined &&
                                number < warningBelow;
                            tmp ||=
                                warningAbove !== undefined &&
                                number > warningAbove;
                            tmp ||=
                                checkValue !== undefined && !checkValue(number);
                            let multiplier = 10 ** (decimalPlaces as number);
                            let value =
                                Math.floor(number * multiplier) / multiplier;
                            this.setState({
                                value,
                                warning: tmp,
                            });
                            onNewValue(value);
                        }
                    }}
                    status={warning ? 'warning' : ''}
                    disabled={disabled}
                />
            </Tooltip>
        );
    }
}

export default ParameterInputComponent;
