export declare enum VehicleFeature {
    WiFi = "wi-fi",
    ChildSeat = "child-seat",
    PetFriendly = "pet-friendly"
}
export type Driver = {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleYear: number;
    vehicleLicensePlate: string;
    vehicleDescription: string | null;
    vehicleFeatures: VehicleFeature[];
    createdAt: Date;
};
//# sourceMappingURL=driver.d.ts.map