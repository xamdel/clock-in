type TimerDisplayProps = {
    time: number;
};

export default function TimerDisplay({ time }: TimerDisplayProps) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    return <h1>{formattedTime}</h1>;
}