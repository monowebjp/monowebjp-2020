import { shareFacebook, shareHatena, shareLine, shareTwitter } from './share';

interface MyWindow extends Window {
    shareFacebook: {};
    shareTwitter: {};
    shareLine: {};
    shareHatena: {};
}

declare const window: MyWindow;

window.shareFacebook = shareFacebook;
window.shareTwitter = shareTwitter;
window.shareLine = shareLine;
window.shareHatena = shareHatena;
