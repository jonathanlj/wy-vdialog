// constants
export const DIALOG_TYPES = {
    ALERT: 'alert',     // ex: Congrats! record created
    CONFIRM: 'confirm', // ex: Please confirm delete
    PROMPT: 'prompt'    // ex: Type your password to save changes
}

export const CONFIRM_TYPES = {
    BASIC: 'basic', // ex: click to confirm
    SOFT: 'soft',   // ex: click 3 times to confirm
    HARD: 'hard'    // ex: enter verification, then click to confirm
}

export const ANIMATION_TYPES = {
    FADE: 'dg-fade',
    ZOOM: 'dg-zoom',
    BOUNCE: 'dg-bounce'
}

export const DEFAULT_OPTIONS = {
    html                 : false,
    loader               : false,
    reverse              : false,
    backdropClose        : false,
    okText               : "确定",
    cancelText           : "返回",
    type                 : CONFIRM_TYPES.BASIC,
    window               : DIALOG_TYPES.CONFIRM,
    message              : "请输入文案",
    clicksCount          : 3,
    animation            : 'zoom',
    verification         : 'continue',
    verificationHelp     : 'Type "[+:verification]" below to confirm'
}
