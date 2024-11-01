export const loadScript = (src: string) =>
    new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            console.log('razorpay loaded successfully');
            resolve(true);
        };
        script.onerror = () => {
            console.log('error in loading razorpay');
            resolve(false);
        };
        document.body.appendChild(script);
    });

export const openPayModal = async (options: Object) => {
    const res = await loadScript(
        'https://checkout.razorpay.com/v1/checkout.js'
    );
    if (!res) {
        console.log('Razorpay SDK failed to load. Are you online?');
        return;
    }
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
};
