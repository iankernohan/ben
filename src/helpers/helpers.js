const googleAPIInfo = { "web": { "client_id": "1044551233696-uhbsgsevcjsb7novn839eu8uuodnhli9.apps.googleusercontent.com", "project_id": "ben-photos", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_secret": "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", "redirect_uris": ["http://localhost:3000"], "javascript_origins": ["http://localhost:3000"] } }

export function randNum3() {
    return Math.floor(Math.random() * 3)
}

export function randNum50() {
    return Math.floor(Math.random() * 50)
}

export function shiftAmount() {
    const shiftChoices = [
        {
            top: `${randNum50()}px`,
            right: `${randNum50()}px`
        },
        {
            top: `${randNum50()}px`,
            left: `${randNum50()}px`
        },
        {
            bottom: `${randNum50()}px`,
            right: `${randNum50()}px`
        },
        {
            bottom: `${randNum50()}px`,
            left: `${randNum50()}px`
        },
    ]
    const randIndex = Math.floor(Math.random() * shiftChoices.length)
    return shiftChoices[randIndex]
}

export function shuffleImages(images) {
    const oldImages = [...images];
    const newImages = [];

    for (let i = 0; i < images.length; i++) {
        const index = Math.floor(Math.random() * oldImages.length);
        const image = oldImages.splice(index, 1);
        newImages.push(image[0]);
    }
    return newImages;
}

export async function getImageSize(url) {
    const image = new Image();
    image.src = url;
    return { width: image.naturalWidth, height: image.naturalHeight }
}
