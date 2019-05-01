import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pomodoro',
    templateUrl: './pomodoro.component.html',
    styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent implements OnInit {

    d = "M160 160 V0 A 150 150 0 1 1 50 200";

    constructor() { }

    ngOnInit() {
        const radius = 150;
        let angle = 360;

        setInterval(() => {
            angle -= 10;
            const toggle = angle > 180 ? 1 : 0;
            const x = radius * Math.sin(this.degrees_to_radians(angle)) + radius;
            const y = radius * Math.cos(this.degrees_to_radians(angle)) + radius;
            this.d = `M160 160 V0 A ${radius} ${radius} 0 1 ${toggle} ${x} ${y}`;
            console.log('Updating circle...');
            console.log('Angle: ', angle);
        }, 1000);
    }

    private degrees_to_radians(degrees) {
        let pi = Math.PI;
        return degrees * (pi / 180);
    }

}
