export default function WhatsappButton() {
    return (
        <a
            href="https://wa.me/5549999656987"
            target="_blank"
            className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300"
            aria-label="Converse conosco pelo WhatsApp"
        >
            <img src="/images/wpp.svg" alt="WhatsApp" className="w-6 h-6" />
        </a>
    )
}