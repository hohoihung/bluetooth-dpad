bluetooth.onBluetoothConnected(function () {
    basic.showString("T")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("F")
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    basic.clearScreen()
    basic.showNumber(control.eventValue())
    basic.pause(2000)
    basic.clearScreen()
})
basic.showString("BT")
basic.forever(function () {
	
})
