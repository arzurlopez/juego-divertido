

export default class Game extends Phaser.Scene {
    constructor() {
        super("Game")
    }
    preload() { }
    create() {
        const walls = this.physics.add.staticGroup();
        const mapa = [
            "################",
            "#..............#",
            "#..............#",
            "#..............#",
            "#..............#",
            "#..............#",
            "#..............#",
            "################"
        ];
        const tileW = this.scale.width / mapa[0].length;
        const tileH = this.scale.height / mapa.length;
        mapa.forEach((fila, y) => {
            fila.split("").forEach((c, x) => {
                if (c === "#") {
                    const wall = this.add.rectangle(
                        x * tileW + tileW / 2,
                        y * tileH + tileH / 2,
                        tileW,
                        tileH,
                        0xff0000
                    );
                    this.physics.add.existing(wall, true);
                    walls.add(wall);
                }
            });
        });


        
        
    }
    update() { }
}


