import { VehicleFeature } from '../types/driver';
export type DriverInputDto = {
    name: string;
    phoneNumber: string;
    email: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleYear: number;
    vehicleLicensePlate: string;
    vehicleDescription: string | null;
    vehicleFeatures: VehicleFeature[];
};
//# sourceMappingURL=driver.input.dto.d.ts.map