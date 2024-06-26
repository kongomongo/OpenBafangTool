import { BafangAssistProfile } from './common';
import { NoData } from './no_data';

export type BafangCanControllerRealtime0 = {
    controller_cadence: number;
    controller_torque: number;
    controller_remaining_capacity: number;
    controller_single_trip: number;
    controller_remaining_distance: number;
};

export type BafangCanControllerRealtime1 = {
    controller_speed: number;
    controller_current: number;
    controller_voltage: number;
    controller_temperature: number;
    controller_motor_temperature: number;
};

export type BafangCanSystemVoltage = 36 | 43 | 48;

export enum BafangCanPedalSensorType {
    TorqueSensor = 0,
    CadenceSensor = 1,
    ThrottleLeverOnly = 2,
}

export const TriggerTypeOptions = [
    {
        value: BafangCanPedalSensorType.TorqueSensor,
        label: 'Torque sensor and throttle lever',
    },
    {
        value: BafangCanPedalSensorType.CadenceSensor,
        label: 'Cadence sensor and throttle lever',
    },
    {
        value: BafangCanPedalSensorType.ThrottleLeverOnly,
        label: 'Throttle lever only',
    },
];

export enum BafangCanMotorType {
    HubMotor = 0,
    MidDriveMotor = 1,
    DirectDriveMotor = 2,
}

export enum BafangCanTemperatureSensorType {
    NoSensor = 0,
    K10 = 1,
    PT1000 = 2,
}

export type BafangCanSpeedSensorChannelNumber = 1 | 2;

export type BafangCanControllerParameter1 = {
    controller_system_voltage: BafangCanSystemVoltage;
    controller_current_limit: number;
    controller_overvoltage: number;
    controller_undervoltage: number;
    controller_undervoltage_under_load: number;
    controller_battery_recovery_voltage: number;
    controller_battery_capacity: number;
    controller_max_current_on_low_charge: number;
    controller_full_capacity_range: number;
    controller_pedal_sensor_type: BafangCanPedalSensorType;
    controller_coaster_brake: boolean;
    controller_pedal_sensor_signals_per_rotation: number;
    controller_speed_sensor_channel_number: BafangCanSpeedSensorChannelNumber;
    controller_motor_type: BafangCanMotorType;
    controller_motor_pole_pair_number: number;
    controller_speedmeter_magnets_number: number;
    controller_temperature_sensor_type: BafangCanTemperatureSensorType;
    controller_deceleration_ratio: number;
    controller_motor_max_rotor_rpm: number;
    controller_motor_d_axis_inductance: number;
    controller_motor_q_axis_inductance: number;
    controller_motor_phase_resistance: number;
    controller_motor_reverse_potential_coefficient: number;
    controller_throttle_start_voltage: number;
    controller_throttle_max_voltage: number;
    controller_start_current: number;
    controller_current_loading_time: number;
    controller_current_shedding_time: number;
    controller_assist_levels: BafangAssistProfile[];
    controller_displayless_mode: boolean;
    controller_lamps_always_on: boolean;
};

export type BafangCanTorqueProfile = {
    start_torque_value: number;
    max_torque_value: number;
    return_torque_value: number;
    min_current: number;
    max_current: number;
    start_pulse: number;
    current_decay_time: number;
    stop_delay: number;
};

export type BafangCanControllerParameter2 = {
    controller_torque_profiles: BafangCanTorqueProfile[];
};

export type BafangCanWheel = {
    text: string;
    minimalCircumference: number;
    maximalCircumference: number;
    code: number[];
};

export const BafangCanWheelDiameterTable: BafangCanWheel[] = [
    {
        text: '6″',
        minimalCircumference: 400,
        maximalCircumference: 880,
        code: [0x60, 0x00],
    },
    {
        text: '7″',
        minimalCircumference: 520,
        maximalCircumference: 880,
        code: [0x70, 0x00],
    },
    {
        text: '8″',
        minimalCircumference: 520,
        maximalCircumference: 880,
        code: [0x80, 0x00],
    },
    {
        text: '10″',
        minimalCircumference: 520,
        maximalCircumference: 880,
        code: [0xa0, 0x00],
    },
    {
        text: '12″',
        minimalCircumference: 910,
        maximalCircumference: 1300,
        code: [0xc0, 0x00],
    },
    {
        text: '14″',
        minimalCircumference: 910,
        maximalCircumference: 1300,
        code: [0xe0, 0x00],
    },
    {
        text: '16″',
        minimalCircumference: 1208,
        maximalCircumference: 1600,
        code: [0x00, 0x01],
    },
    {
        text: '17″',
        minimalCircumference: 1208,
        maximalCircumference: 1600,
        code: [0x10, 0x01],
    },
    {
        text: '18″',
        minimalCircumference: 1208,
        maximalCircumference: 1600,
        code: [0x10, 0x01],
    },
    {
        text: '20″',
        minimalCircumference: 1290,
        maximalCircumference: 1880,
        code: [0x40, 0x01],
    },
    {
        text: '22″',
        minimalCircumference: 1290,
        maximalCircumference: 1880,
        code: [0x60, 0x01],
    },
    {
        text: '23″',
        minimalCircumference: 1290,
        maximalCircumference: 1880,
        code: [0x70, 0x01],
    },
    {
        text: '24″',
        minimalCircumference: 1290,
        maximalCircumference: 2200,
        code: [0x80, 0x01],
    },
    {
        text: '25″',
        minimalCircumference: 1880,
        maximalCircumference: 2200,
        code: [0x90, 0x01],
    },
    {
        text: '26″',
        minimalCircumference: 1880,
        maximalCircumference: 2510,
        code: [0xa0, 0x01],
    },
    {
        text: '27″',
        minimalCircumference: 1880,
        maximalCircumference: 2510,
        code: [0xb0, 0x01],
    },
    {
        text: '27.5″',
        minimalCircumference: 1880,
        maximalCircumference: 2510,
        code: [0xb5, 0x01],
    },
    {
        text: '28″',
        minimalCircumference: 1880,
        maximalCircumference: 2510,
        code: [0xc0, 0x01],
    },
    {
        text: '29″',
        minimalCircumference: 1880,
        maximalCircumference: 2510,
        code: [0xd0, 0x01],
    },
    {
        text: '32″',
        minimalCircumference: 2200,
        maximalCircumference: 2652,
        code: [0x00, 0x02],
    },
    {
        text: '400 mm',
        minimalCircumference: 1208,
        maximalCircumference: 1600,
        code: [0x00, 0x19],
    },
    {
        text: '450 mm',
        minimalCircumference: 1208,
        maximalCircumference: 1600,
        code: [0x10, 0x2c],
    },
    {
        text: '600 mm',
        minimalCircumference: 1600,
        maximalCircumference: 2200,
        code: [0x80, 0x25],
    },
    {
        text: '650 mm',
        minimalCircumference: 1600,
        maximalCircumference: 2200,
        code: [0xa0, 0x28],
    },
    {
        text: '700 mm',
        minimalCircumference: 1880,
        maximalCircumference: 2510,
        code: [0xc0, 0x2b],
    },
];

export type BafangCanControllerSpeedParameters = {
    controller_wheel_diameter: BafangCanWheel;
    controller_speed_limit: number;
    controller_circumference: number;
};

export type BafangCanControllerCodes = {
    controller_hardware_version: string | NoData;
    controller_software_version: string | NoData;
    controller_model_number: string | NoData;
    controller_serial_number: string | NoData;
    controller_customer_number: string | NoData;
    controller_manufacturer: string | NoData;
};

export type BafangCanDisplayCodes = {
    display_hardware_version: string | NoData;
    display_software_version: string | NoData;
    display_model_number: string | NoData;
    display_serial_number: string | NoData;
    display_customer_number: string | NoData;
    display_manufacturer: string | NoData;
    display_bootload_version: string | NoData;
};

export type BafangCanDisplayData1 = {
    display_total_mileage: number;
    display_single_mileage: number;
    display_max_speed: number;
};

export type BafangCanDisplayData2 = {
    display_average_speed: number;
    display_service_mileage: number;
};

export enum BafangCanRideMode {
    ECO = 0,
    BOOST = 1,
}

export type BafangCanAssistLevel =
    | 'walk'
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9;

export type BafangCanDisplayState = {
    display_assist_levels: number;
    display_ride_mode: BafangCanRideMode;
    display_boost: boolean;
    display_current_assist_level: BafangCanAssistLevel;
    display_light: boolean;
    display_button: boolean;
};

export type BafangCanSensorRealtime = {
    sensor_torque: number;
    sensor_cadence: number;
};

export type BafangCanSensorCodes = {
    sensor_hardware_version: string | NoData;
    sensor_software_version: string | NoData;
    sensor_model_number: string | NoData;
    sensor_serial_number: string | NoData;
    sensor_customer_number: string | NoData;
};

export type BafangBesstCodes = {
    besst_hardware_version: string | NoData;
    besst_software_version: string | NoData;
    besst_serial_number: string | NoData;
};
