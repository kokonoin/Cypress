export interface ClientDelayPageSelectors {
    clientSlideButton: string;
    loadingSpiner: string;
    clientDelayMessage: string;
}

export const clientDelayPageSelectors: ClientDelayPageSelectors = {
    clientSlideButton: 'button#ajaxButton',
    loadingSpiner: 'i#spinner.fa.fa-spinner.fa-spin',
    clientDelayMessage: 'div#content',
}