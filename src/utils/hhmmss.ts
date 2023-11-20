const Hhmmss = (time: number) => {
    const h = Math.floor(time / 3600),
        m = Math.floor((time % 3600) / 60),
        s = Math.floor(time % 60),
        mmss = `${m < 10 ? '0' + m : m} : ${s < 10 ? '0' + s : s}`;

    return h > 0 ?
        `${h} : ${mmss}` :
        `${mmss}`
}

export default Hhmmss