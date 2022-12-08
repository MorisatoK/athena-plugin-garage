import { VEHICLE_TYPE } from '@AthenaShared/enums/vehicleTypeFlags';
import { GarageFunctions } from '../src/view';

const garage = {
    position: { x: -1114.3385009765625, y: -1687.79345703125, z: 3.8 },
    type: VEHICLE_TYPE.VEHICLE,
    index: 'la-puerta-beach',
    parking: [
        {
            position: { x: -1111.3187255859375, y: -1682.2945556640625, z: 3.8 },
            rotation: { x: 0, y: 0, z: -0.9400041699409485 },
        },
        {
            position: { x: -1109.9736328125, y: -1684.02197265625, z: 3.8 },
            rotation: { x: 0, y: 0, z: -0.8905302882194519 },
        },
        {
            position: { x: -1108.5098876953125, y: -1685.98681640625, z: 3.8 },
            rotation: { x: 0, y: 0, z: -0.9400041699409485 },
        },
    ],
};

GarageFunctions.add(garage);
