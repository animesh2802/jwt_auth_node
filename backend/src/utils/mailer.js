import nodemailer from 'nodemailer';

let testAccount = null;
let transporter = null;

const setup = async () => {
    if (!testAccount) {
        testAccount = await nodemailer.createTestAccount();

        transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });
    }
};

export const sendOtpEmail = async (toEmail, otp) => {
    await setup();

    const info = await transporter.sendMail({
        from: '"WatchList Auth" <no-reply@watchlist.com>',
        to: toEmail,
        subject: 'Your OTP for WatchList Login',
        text: `Your OTP is ${otp}. It expires in 10 minutes.`,
    });

    console.log('OTP email sent:', nodemailer.getTestMessageUrl(info));
}