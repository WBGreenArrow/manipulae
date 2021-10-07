const handlerDuration = (duration) => {
    const minuts = parseInt(duration / 60);

    const seconds = duration % 60;

    const validadteMinuts = minuts < 10 ? "0" + String(minuts) : minuts;
    const validateSeconds = seconds < 10 ? "0" + String(seconds) : seconds;

    return `${validadteMinuts}:${validateSeconds}`;
};

export default handlerDuration;
