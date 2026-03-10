function progress(percentage, {
    scale = 10,
    template = '[{bar}] {percent}%',
    roundingFunc = Math.floor
} = {}) {
    scale = roundingFunc(scale);
    percentage = Math.max(0, Math.min(1, percentage));
    const bar = "█".repeat(roundingFunc(percentage * scale)).padEnd(scale, "⠀");
    return template.replaceAll('{bar}', bar).replaceAll('{percent}', roundingFunc(percentage * 100));
}
