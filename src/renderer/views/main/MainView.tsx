import React from 'react';
import {
    InfoCircleOutlined,
    SettingOutlined,
    BookOutlined,
    ArrowLeftOutlined,
    CarOutlined,
    DesktopOutlined,
    RotateRightOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Modal, Spin, message } from 'antd';
import BafangUartMotorInfoView from '../panels/bafang/full/BafangUartMotorInfoView';
import BafangUartMotorSettingsView from '../panels/bafang/full/BafangUartMotorSettingsView';
import IConnection from '../../../device/high-level/Connection';
import BafangUartMotor from '../../../device/high-level/BafangUartMotor';
import DocumentationView from '../panels/common/DocumentationView';
import { DocPages } from '../../../docs/document_resolver';
import InterfaceType from '../../models/InterfaceType';
import BafangUartMotorSettingsSimplifiedView from '../panels/bafang/simplified/BafangUartMotorSettingsSimplifiedView';
import BafangCanSystemInfoView from '../panels/bafang/full/BafangCanSystemInfoView';
import BafangCanSystem from '../../../device/high-level/BafangCanSystem';
import BafangCanMotorSettingsView from '../panels/bafang/full/BafangCanMotorSettingsView';
import BafangCanDisplaySettingsView from '../panels/bafang/full/BafangCanDisplaySettingsView';
import BafangCanSensorSettingsView from '../panels/bafang/full/BafangCanSensorSettingsView';
import { DeviceName } from '../../../types/DeviceType';

const { Sider } = Layout;

type MainProps = {
    connection: IConnection;
    interfaceType: InterfaceType;
    backHook: () => void;
};

type MainState = {
    tab: string;
    loading: boolean;
};

const initial_tab_table = {
    bafang_uart_motor: {
        simplified: 'bafang_uart_motor_settings_simplified',
        full: 'bafang_uart_motor_info',
    },
    bafang_uart_display: {
        simplified: 'bafang_motor_manual',
        full: 'bafang_motor_manual',
    },
    bafang_can_system: {
        simplified: 'bafang_motor_manual',
        full: 'bafang_can_system_info',
    },
};

class MainView extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        this.state = {
            tab: initial_tab_table[props.connection.deviceName][
                props.interfaceType
            ],
            loading: true,
        };
        this.switchTab = this.switchTab.bind(this);
        this.menuItems = this.menuItems.bind(this);
        const { connection } = this.props;
        connection.emitter.once('disconnection', () => {
            Modal.error({
                title: 'Connection error',
                content: 'Device has been disconnected',
                onOk: this.props.backHook,
            });
        });
        setTimeout(() => this.setState({ loading: false }), 60000);
        connection.emitter.once(
            'reading-finish',
            (readedSuccessfully, readededUnsuccessfully) => {
                message.open({
                    key: 'loading',
                    type: 'info',
                    content: `Loaded ${readedSuccessfully} parameters succesfully, ${readededUnsuccessfully} not succesfully`,
                    duration: 5,
                });
                this.setState({ loading: false });
            },
        );
        connection.loadData();
    }

    menuItems() {
        return {
            bafang_uart_motor: {
                simplified: [
                    {
                        key: 'back',
                        icon: <ArrowLeftOutlined />,
                        label: 'Back',
                    },
                    {
                        key: 'bafang_uart_motor_settings_simplified',
                        icon: <SettingOutlined />,
                        label: 'Parameters',
                    },
                    {
                        key: 'bafang_uart_motor_manual',
                        icon: <BookOutlined />,
                        label: 'Manual',
                        children: [
                            {
                                key: `manual_${DocPages.BafangUartMotorGeneralManualDocument}`,
                                label: 'General manual',
                            },
                            {
                                key: `manual_${DocPages.BafangUartMotorParamsSimplifiedDocument}`,
                                label: 'Parameters',
                            },
                        ],
                    },
                ],
                full: [
                    {
                        key: 'back',
                        icon: <ArrowLeftOutlined />,
                        label: 'Back',
                    },
                    {
                        key: 'bafang_uart_motor_info',
                        icon: <InfoCircleOutlined />,
                        label: 'Info',
                    },
                    {
                        key: 'bafang_uart_motor_settings',
                        icon: <SettingOutlined />,
                        label: 'Parameters',
                    },
                    {
                        key: 'bafang_uart_motor_manual',
                        icon: <BookOutlined />,
                        label: 'Manual',
                        children: [
                            {
                                key: `manual_${DocPages.BafangUartMotorGeneralManualDocument}`,
                                label: 'General manual',
                            },
                            {
                                key: `manual_${DocPages.BafangUartMotorParamsDocument}`,
                                label: 'Parameters',
                            },
                            {
                                key: `manual_${DocPages.BafangUartMotorAPIDocument}`,
                                label: 'Motor Protocol',
                            },
                            {
                                key: `manual_${DocPages.BafangUartProtocolDocument}`,
                                label: 'UART Protocol',
                            },
                        ],
                    },
                ],
            },
            bafang_uart_display: {
                simplified: [
                    {
                        key: 'back',
                        icon: <ArrowLeftOutlined />,
                        label: 'Back',
                    },
                    {
                        key: 'bafang_motor_manual',
                        icon: <BookOutlined />,
                        label: 'Manual',
                        children: [
                            {
                                key: `manual_${DocPages.BafangUartMotorGeneralManualDocument}`,
                                label: 'General manual',
                            },
                        ],
                    },
                ],
                full: [
                    {
                        key: 'back',
                        icon: <ArrowLeftOutlined />,
                        label: 'Back',
                    },
                    {
                        key: 'bafang_motor_manual',
                        icon: <BookOutlined />,
                        label: 'Manual',
                        children: [
                            {
                                key: `manual_${DocPages.BafangUartMotorGeneralManualDocument}`,
                                label: 'General manual',
                            },
                        ],
                    },
                ],
            },
            bafang_can_system: {
                simplified: [
                    {
                        key: 'back',
                        icon: <ArrowLeftOutlined />,
                        label: 'Back',
                    },
                    {
                        key: 'bafang_motor_manual',
                        icon: <BookOutlined />,
                        label: 'Manual',
                        children: [
                            {
                                key: `manual_${DocPages.BafangUartMotorGeneralManualDocument}`,
                                label: 'General manual',
                            },
                        ],
                    },
                ],
                full: [
                    {
                        key: 'back',
                        icon: <ArrowLeftOutlined />,
                        label: 'Back',
                    },
                    {
                        key: 'bafang_can_system_info',
                        icon: <InfoCircleOutlined />,
                        label: 'General Info',
                    },
                    {
                        key: 'bafang_can_motor_settings',
                        icon: <CarOutlined />,
                        label: 'Motor settings',
                        disabled:
                            this.props.connection.deviceName ===
                                DeviceName.BafangCanSystem &&
                            !(this.props.connection as BafangCanSystem)
                                .isControllerAvailable,
                    },
                    {
                        key: 'bafang_can_display_settings',
                        icon: <DesktopOutlined />,
                        label: 'Display settings',
                        disabled:
                            this.props.connection.deviceName ===
                                DeviceName.BafangCanSystem &&
                            !(this.props.connection as BafangCanSystem)
                                .isDisplayAvailable,
                    },
                    {
                        key: 'bafang_can_sensor_settings',
                        icon: <RotateRightOutlined />,
                        label: 'Sensor settings',
                        disabled:
                            this.props.connection.deviceName ===
                                DeviceName.BafangCanSystem &&
                            !(this.props.connection as BafangCanSystem)
                                .isSensorAvailable,
                    },
                    {
                        key: 'bafang_can_motor_manual',
                        icon: <BookOutlined />,
                        label: 'Manual',
                        children: [
                            {
                                key: `manual_${DocPages.BafangUartMotorGeneralManualDocument}`,
                                label: 'General manual',
                            },
                        ],
                    },
                ],
            },
        };
    }

    switchTab(event: { key: string }) {
        if (event.key === 'back') {
            const { backHook } = this.props;
            backHook();
        }
        this.setState({ tab: event.key });
    }

    render() {
        const { connection, interfaceType } = this.props;
        const { tab, loading } = this.state;
        return (
            <Layout hasSider>
                <Spin spinning={loading} fullscreen />
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        paddingTop: '20px',
                    }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={[
                            this.menuItems()[connection.deviceName][
                                interfaceType
                            ][1].key,
                        ]}
                        items={
                            this.menuItems()[connection.deviceName][
                                interfaceType
                            ]
                        }
                        onSelect={this.switchTab}
                    />
                </Sider>
                <Layout style={{ marginLeft: 200, backgroundColor: 'white' }}>
                    {tab === 'bafang_uart_motor_settings_simplified' && (
                        <BafangUartMotorSettingsSimplifiedView
                            connection={connection as BafangUartMotor}
                        />
                    )}
                    {tab === 'bafang_uart_motor_info' && (
                        <BafangUartMotorInfoView
                            connection={connection as BafangUartMotor}
                        />
                    )}
                    {tab === 'bafang_uart_motor_settings' && (
                        <BafangUartMotorSettingsView
                            connection={connection as BafangUartMotor}
                        />
                    )}
                    {tab === 'bafang_can_system_info' && (
                        <BafangCanSystemInfoView
                            connection={connection as BafangCanSystem}
                        />
                    )}
                    {tab === 'bafang_can_motor_settings' && (
                        <BafangCanMotorSettingsView
                            connection={connection as BafangCanSystem}
                        />
                    )}
                    {tab === 'bafang_can_display_settings' && (
                        <BafangCanDisplaySettingsView
                            connection={connection as BafangCanSystem}
                        />
                    )}
                    {tab === 'bafang_can_sensor_settings' && (
                        <BafangCanSensorSettingsView
                            connection={connection as BafangCanSystem}
                        />
                    )}
                    {tab.indexOf('manual') === 0 && (
                        <DocumentationView page={tab.substring(7)} />
                    )}
                </Layout>
            </Layout>
        );
    }
}

export default MainView;
