import { randomBytes } from "crypto";
import { useSearchParams } from "next/navigation";
import { HTMLProps, useEffect, useRef, useState } from "react";

/**
 * Create a 2d array filled with 0s.
 */
function makeGrid(width: number, height: number): boolean[][] {
    const grid = new Array(height);
    for (let y = 0; y < height; y++) {
        const row = new Array(width).fill(false);
        grid[y] = row;
    }
    return grid;
}

const OFFSETS: number[][] = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
];

class GameOfLifeSim {
    private board: boolean[][];
    private buffer: boolean[][];
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.board = makeGrid(width, height);
        this.buffer = makeGrid(width, height);
        this.width = width;
        this.height = height;
    }

    private isValidPos(row: number, col: number): boolean {
        return row >= 0 && row < this.width && col >= 0 && col < this.height;
    }

    public markLiving(row: number, col: number): void {
        if (this.isValidPos(row, col)) {
            this.board[row][col] = true;
        }
    }

    public markDead(row: number, col: number): void {
        if (this.isValidPos(row, col)) {
            this.board[row][col] = false;
        }
    }

    public swapState(row: number, col: number): void {
        if (this.isValidPos(row, col)) {
            this.board[row][col] = !this.board[row][col];
        }
    }

    private static wrap(val: number, bound: number) {
        if (val < 0) {
            return bound - 1;
        }
        if (val == bound) {
            return 0;
        }
        return val;
    }

    public nextState(state: boolean, row: number, col: number): boolean {
        let count = 0;
        for (const [dcol, drow] of OFFSETS) {
            const ncol = GameOfLifeSim.wrap(col + dcol, this.width);
            const nrow = GameOfLifeSim.wrap(row + drow, this.height);
            if (this.board[nrow][ncol]) {
                count += 1;
            }
        }

        if (count < 2) {
            return false;
        } else if (count == 2) {
            return state;
        } else if (count == 3) {
            return true;
        } else {
            return false;
        }
    }

    public simulateStep(): void {
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                const state = this.board[row][col];
                const nextState = this.nextState(state, row, col)
                this.buffer[row][col] = nextState;
            }
        }

        const tmp = this.board;
        this.board = this.buffer
        this.buffer = tmp;
    }

    public printBoard() {
        let output = "";
        for (const row of this.board) {
            let line = "";
            for (const state of row) {
                line += state ? '.' : 'X';
            }
            output += line + "\n";
        }
        console.log(output);
    }

    public getBoard(): boolean[][] {
        return this.board;
    }

    public getHeight(): number {
        return this.height;
    }

    public getWidth(): number {
        return this.width;
    }
}

function fillRandom(arr: boolean[][]) {
    for (const row of arr) {
        for (let i = 0; i < row.length; i++) {
            row[i] = Math.random() > 0.75;
        }
    }

}

const BLACK = "rgb(0, 0, 0)";
const WHITE = "rgb(255, 255, 255)";

function draw(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, frameCount: number, sim: GameOfLifeSim) {
    const { width, height } = canvas.getBoundingClientRect();
    const sWidth = sim.getWidth();
    const sHeight = sim.getHeight();
    const board = sim.getBoard();

    const vw = width / (sWidth + Number.EPSILON);
    const vh = height / (sHeight + Number.EPSILON);

    ctx.fillStyle = WHITE;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = `rgb(${(frameCount % 100) / 100 * 255}, 0, 0)`;

    for (let row = 0; row < sHeight; row++) {
        for (let col = 0; col < sWidth; col++) {
            if (!board[row][col]) {
                continue;
            }

            const vx = row * vw;
            const vy = col * vh;
            ctx.fillRect(vx, vy, vw, vh)
        }
    }
}

function mapCoords(x: number, y: number, w: number, h: number, sim: GameOfLifeSim) {
    return [Math.floor((x * sim.getWidth()) / w), Math.floor((y * sim.getHeight()) / h)]
}



export function GameOfLife(props: HTMLProps<HTMLCanvasElement>) {
    "use client"
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        let frameCount = 0;
        let frameId = 0;
        const sim = new GameOfLifeSim(100, 100);
        fillRandom(sim.getBoard());

        // get the canvas and context
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const context = canvas.getContext("2d");
        if (!context) {
            return;
        }

        let down = false;
        const hdown = (e: MouseEvent) => { e.preventDefault(); down = true; }
        const hup = (e: MouseEvent) => { e.preventDefault(); down = false; }
        const hdrag = (e: MouseEvent) => {
            e.preventDefault();
            if (down) {
                const x = e.offsetX;
                const y = e.offsetY;
                const [bx, by] = mapCoords(x, y, canvas.width, canvas.height, sim);
                sim.markLiving(bx, by);
            }
        }
        const hpause = (e: KeyboardEvent) => {
            if (e.key == 'p') {
                pause = !pause;
            }
        }


        let pause = false;
        const int = setInterval(() => {
            if (!pause) {
                sim.simulateStep();
            }
        }, 1000 / 30);

        document.addEventListener("keydown", hpause);
        canvas.addEventListener("mousedown", hdown);
        canvas.addEventListener("mouseup", hup);
        canvas.addEventListener("mousemove", hdrag);


        const render = () => {
            frameCount++;
            draw(context, canvas, frameCount, sim);
            frameId = window.requestAnimationFrame(render);
        }
        render();
        return () => {
            window.cancelAnimationFrame(frameId)
            clearInterval(int);
            canvas.removeEventListener("mousedown", hdown)
            canvas.removeEventListener("mouseup", hup)
            canvas.removeEventListener("mousemove", hdrag)
            canvas.removeEventListener("keydown", hpause)
        }
    }, [draw])

    return (
        <canvas ref={canvasRef} {...props} />
    );
}
