import { Typography } from 'antd';
import React, { ReactNode } from 'react';
import { NoData, NotAvailable, NotLoadedYet } from '../../types/no_data';

type BooleanValueProps = {
    value: boolean | number | NoData;
    textTrue?: string;
    textFalse?: string;
};

class BooleanValueComponent extends React.Component<BooleanValueProps> {
    static defaultProps = {
        textTrue: 'True',
        textFalse: 'False',
    };

    render() {
        const { value, textTrue, textFalse } = this.props;
        if (value === NotLoadedYet) {
            return <>Isn&apos;t readed yet</>;
        } else if (value === NotAvailable) {
            return <>Not available on this hardware</>;
        }
        return (
            <>
                {value ? (
                    <Typography.Text strong>{textTrue}</Typography.Text>
                ) : (
                    <Typography.Text strong>{textFalse}</Typography.Text>
                )}
            </>
        );
    }
}

export default BooleanValueComponent;
