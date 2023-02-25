import { Sensor } from "./sensor"

export class Alarm {
    private LowPressureThreshold = 17
    private HighPressureThreshold = 21

    private sensor = new Sensor()
    private alarmOn = false

    check() {
        const psiPressureValue = this.sensor.popNextPressurePsiValue()

        if (
            psiPressureValue < this.LowPressureThreshold ||
            this.HighPressureThreshold < psiPressureValue
        ) {
            this.alarmOn = true
        }
    }

    isAlarmOn() {
        return this.alarmOn
    }
}
