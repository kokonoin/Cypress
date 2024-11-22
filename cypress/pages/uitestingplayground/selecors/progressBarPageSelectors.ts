export interface ProgressBarPageSelectors {
    startButton: string;
    stopButton: string;
    progressBar: string;
    progressInfo: string;
}

export const progressBarPageSelectors: ProgressBarPageSelectors = {
    startButton: 'button#startButton.btn.btn-primary.btn-test',
    stopButton: 'button#stopButton.btn.btn-info.btn-test',
    progressBar: 'div#progressBar.progress-bar.bg-info',
    progressInfo: 'p#result',
}