const url = location.href;

export const shareFacebook = (): boolean => {
    const shareUrl = `//www.facebook.com/share.php?u=${url}`;
    console.log(shareUrl);
    // window.open(
    //     shareUrl,
    //     '',
    //     'width=580,height=400,menubar=no,toolbar=no,scrollbars=yes'
    // );
    return true;
};

export const shareTwitter = (): boolean => {
    const shareUrl = `//twitter.com/share?text=${encodeURIComponent(
        'aaa'
    )}&url=${url}`;
    console.log(shareUrl);
    return true;
};

export const shareLine = (): boolean => {
    const shareUrl = `//line.me/R/msg/text/?${encodeURIComponent(
        'aaa'
    )} ${encodeURIComponent(url)}`;
    console.log(shareUrl);
    return true;
};

export const shareHatena = (): boolean => {
    const shareUrl = `//b.hatena.ne.jp/entry/panel/?url=${url}&title=${'pagetitle'}`;
    console.log(shareUrl);
    return true;
};
