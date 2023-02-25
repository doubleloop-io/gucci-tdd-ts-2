export class Sensor {
    //
    // The reading of the pressure value from the sensor is simulated in this implementation.
    // Because the focus of the exercise is on the other class.
    //

    static Offset = 16

    popNextPressurePsiValue() {
        const pressureTelemetryValue = this.readPressureSample()

        return Sensor.Offset + pressureTelemetryValue
    }

    private readPressureSample() {
        // Simulate info read from a real sensor in a real tire
        return (
            6 *
            this.randomPressureSampleSimulator() *
            this.randomPressureSampleSimulator()
        )
    }

    private randomPressureSampleSimulator() {
        return Math.random()
    }
}
