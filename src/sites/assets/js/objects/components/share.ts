const url = encodeURIComponent(location.href);
const pageTitle = encodeURIComponent(document.title);

const shareWindow = (shareUrl: string) => {
    window.open(
        shareUrl,
        '',
        'width=580,height=400,menubar=no,toolbar=no,scrollbars=yes'
    );
};

export const shareFacebook = (): boolean => {
    const shareUrl = `//www.facebook.com/share.php?u=${url}`;
    shareWindow(shareUrl);
    return true;
};

export const shareTwitter = (): boolean => {
    const shareUrl = `//twitter.com/share?text=${pageTitle}&url=${url}`;
    shareWindow(shareUrl);
    return true;
};

export const shareLine = (): boolean => {
    const shareUrl = `//line.me/R/msg/text/?${pageTitle} ${url}`;
    shareWindow(shareUrl);
    return true;
};

export const shareHatena = (): boolean => {
    const shareUrl = `//b.hatena.ne.jp/entry/panel/?url=${url}&title=${pageTitle}`;
    shareWindow(shareUrl);
    return true;
};
