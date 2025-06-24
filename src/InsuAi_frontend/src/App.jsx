import React, { useState, useEffect, useRef } from 'react';

// Helper component for a custom modal (replaces alert/confirm)
const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-sm mx-auto text-center">
                <p className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

// Landing Page Component - Enhanced for beauty
const LandingPage = ({ onStartApp }) => {
    // Custom SVG for the abstract robot/AI element based on the provided design
    const AiRobotSvg = ({ className = "" }) => (
        <svg
            className={`w-32 h-32 md:w-48 md:h-48 ${className}`}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="100" cy="100" r="80" fill="url(#paint0_radial)" />
            <circle cx="70" cy="80" r="15" fill="#C084FC" />
            <circle cx="130" cy="80" r="15" fill="#C084FC" />
            <path d="M70 120 C70 140, 130 140, 130 120 L100 160 Z" fill="#A78BFA" />
            <rect x="85" y="105" width="30" height="15" rx="5" fill="#3B82F6" />
            <defs>
                <radialGradient
                    id="paint0_radial"
                    cx="0" cy="0" r="1"
                    gradientUnits="userSpaceOnUse"
                    transform="translate(100 100) rotate(90) scale(100)"
                >
                    <stop stopColor="#6D28D9" />
                    <stop offset="1" stopColor="#A78BFA" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );

    // Custom SVG for an abstract arm/tentacle - more dynamic appearance
    const ArmSvg = ({ className = "" }) => (
        <svg
            className={`w-32 h-32 md:w-48 md:h-48 ${className}`}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10 90 Q30 30, 90 10"
                stroke="url(#armGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="90" cy="10" r="8" fill="#8B5CF6" />
            <defs>
                <linearGradient id="armGradient" x1="10" y1="90" x2="90" y2="10" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#D8B4FE" />
                </linearGradient>
            </defs>
        </svg>
    );

    const FeatureCard = ({ title, description }) => (
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out border border-transparent hover:border-purple-600 cursor-pointer">
            <h3 className="text-xl font-semibold text-purple-300 mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
        </div>
    );

    const FaqItem = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="bg-gray-800 border border-gray-700 rounded-lg mb-4 shadow-lg">
                <button
                    className="flex justify-between items-center w-full p-5 text-left text-xl font-semibold text-white focus:outline-none transition-colors duration-300 hover:text-purple-400"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {question}
                    <span className="text-purple-400 text-2xl transform transition-transform duration-300">
                        {isOpen ? '−' : '+'}
                    </span>
                </button>
                {isOpen && (
                    <div className="px-5 pb-5 text-gray-300 text-md border-t border-gray-700 pt-4">
                        {answer}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white font-inter overflow-hidden">
            {/* Hero Section */}
            <header className="relative flex flex-col items-center justify-center h-screen p-6 text-center">
                {/* Background glowing elements (more elaborate) */}
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
                <div className="absolute bottom-0 -right-20 w-96 h-96 bg-fuchsia-700 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-blob animation-delay-6000"></div>

                {/* Abstract Visual Elements */}
                <AiRobotSvg className="absolute bottom-1/4 left-[15%] opacity-70 animate-float" />
                <AiRobotSvg className="absolute top-1/4 right-[15%] opacity-70 animate-float animation-delay-1500" />
                <ArmSvg className="absolute top-1/2 left-[5%] transform -translate-y-1/2 rotate-45 opacity-50 animate-pulse" />
                <ArmSvg className="absolute top-1/2 right-[5%] transform -translate-y-1/2 -rotate-45 opacity-50 animate-pulse animation-delay-1000" />

                {/* Infinity symbol (more stylized) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[150px] md:w-[600px] md:h-[250px] bg-gradient-to-r from-purple-800 to-indigo-800 rounded-full opacity-50 blur-xl animate-pulse-light"></div>
                <div className="relative z-10 flex flex-col items-center p-4 bg-black bg-opacity-20 rounded-xl backdrop-blur-sm">
                    <h1 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-400 to-teal-300 leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
                        InsuAi
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-200 mb-10 max-w-3xl animate-fade-in-up animation-delay-500 tracking-wide">
                        Revolutionizing Insurance Underwriting with Cutting-Edge AI and Decentralized Technology.
                    </p>
                    <button
                        onClick={onStartApp}
                        className="px-10 py-5 bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-extrabold text-xl rounded-full shadow-2xl hover:from-purple-800 hover:to-indigo-800 transform hover:scale-105 transition-all duration-500 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-600 focus:ring-opacity-75 animate-bounce-in relative overflow-hidden group"
                    >
                        Start Your Free Quote Now
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-full"></span>
                    </button>
                </div>
            </header>

            {/* Features Section */}
            <section className="relative py-20 px-4 md:px-8 bg-gray-950 z-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-400">
                    Discover Our Powerful Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    <FeatureCard
                        title="Intelligent Conversational AI"
                        description="Our intuitive chatbot interface replaces complex traditional forms, making data collection seamless and user-friendly with natural language interactions."
                    />
                    <FeatureCard
                        title="Instant Risk Assessment"
                        description="Leveraging advanced machine learning, our models process your data in real-time, providing immediate and accurate risk scores for faster decisions."
                    />
                    <FeatureCard
                        title="Dynamic & Personalized Quotes"
                        description="Receive tailored policy pricing generated on-the-fly based on your unique risk profile, ensuring you get the most relevant and competitive offers."
                    />
                    <FeatureCard
                        title="Continuous System Evolution"
                        description="Our AI continuously learns and improves its accuracy and efficiency through robust feedback loops and ongoing model training, adapting to market changes."
                    />
                    <FeatureCard
                        title="Blockchain-Powered Security"
                        description="Built entirely on the Internet Computer Protocol (ICP), InsuAi offers unparalleled decentralization, end-to-end encryption, and tamper-proof security."
                    />
                    <FeatureCard
                        title="Comprehensive End-to-End Solution"
                        description="From initial data collection to final policy generation, our system provides a fully automated, integrated solution, streamlining the entire underwriting process."
                    />
                </div>
            </section>

            {/* FAQ Section - Adapted and Enhanced */}
            <section className="py-20 px-4 md:px-8 bg-gray-950 z-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-4xl mx-auto">
                    <FaqItem
                        question="What is InsuAi and how does it work?"
                        answer="InsuAi is an AI-powered insurance underwriting system designed to transform traditional motor vehicle insurance. It employs a cutting-edge conversational AI chatbot for intuitive data collection and sophisticated machine learning models for real-time risk assessment and dynamic quote generation, all hosted on the decentralized Internet Computer Protocol (ICP)."
                    />
                    <FaqItem
                        question="How does InsuAi ensure my data privacy and security?"
                        answer="Your data security is paramount. InsuAi is built on the Internet Computer Protocol (ICP), which inherently offers decentralized, cryptographically secure, and tamper-proof execution environments. All sensitive user data is encrypted end-to-end, both in transit and at rest within stable memory, ensuring maximum privacy and trust."
                    />
                    <FaqItem
                        question="Describe the real-time risk assessment process."
                        answer="Our system leverages advanced machine learning algorithms (e.g., classification models) optimized to run efficiently within WASM-compatible ICP canisters. When you provide information, these models process it instantly to generate immediate risk scores, allowing for rapid, data-driven policy pricing and underwriting decisions."
                    />
                    <FaqItem
                        question="Can I customize my insurance policy options through InsuAi?"
                        answer="InsuAi's core strength lies in generating dynamic and personalized policy quotes based on a comprehensive AI-driven risk assessment. While the system provides highly tailored offers that best fit your profile and needs, specific granular customization beyond the generated options may depend on regulatory frameworks and our continuous feature development."
                    />
                    <FaqItem
                        question="What are the advantages of InsuAi's premium plans over the free tier?"
                        answer="Our premium plans, including the Pro and Enterprise options, unlock significantly more advanced AI capabilities, access to refined risk assessment models, dedicated priority support, higher interaction limits, and deeper personalized analytics. The Enterprise Suite offers full platform customization, bespoke ML model training, and unlimited quoting, and advanced compliance tools, ideal for larger insurance providers."
                    />
                </div>
            </section>

            {/* Call to Action & Footer */}
            <footer className="py-16 px-4 md:px-8 bg-black text-center text-gray-400 z-20">
                <h3 className="text-4xl font-bold mb-8 text-purple-400 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
                    Join Our Innovative Community
                </h3>
                <p className="mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                    Be a part of shaping the future of insurance with InsuAi. Join our vibrant community to share insights, provide feedback, and collaborate on the evolution of decentralized AI solutions.
                </p>
                <button
                    onClick={() => { setModalMessage("Joining community features coming soon! Stay tuned for updates."); setShowModal(true); }}
                    className="px-10 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold text-lg rounded-full shadow-xl hover:from-blue-700 hover:to-teal-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 relative overflow-hidden group"
                >
                    Join the InsuAi Community
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-full"></span>
                </button>
                <div className="flex flex-wrap justify-center space-x-6 md:space-x-10 mt-16 text-md font-medium">
                    <a href="#" className="hover:text-white transition-colors duration-200 transform hover:scale-105">Resources</a>
                    <a href="#" className="hover:text-white transition-colors duration-200 transform hover:scale-105">Updates</a>
                    <a href="#" className="hover:text-white transition-colors duration-200 transform hover:scale-105">Help Center</a>
                    <a href="#" className="hover:text-white transition-colors duration-200 transform hover:scale-105">Pricing</a>
                    <a href="#" className="hover:text-white transition-colors duration-200 transform hover:scale-105">Contact</a>
                    <a href="#" className="hover:text-white transition-colors duration-200 transform hover:scale-105">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors duration-200 transform hover:scale-105">Terms of Service</a>
                </div>
                <p className="mt-12 text-gray-600 text-xs tracking-wider">&copy; 2025 InsuAi. All rights reserved. Built with the future in mind.</p>
            </footer>

            {/* Tailwind CSS Animations */}
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounceIn {
                    0% { transform: scale(0.3); opacity: 0; }
                    50% { transform: scale(1.05); opacity: 1; }
                    70% { transform: scale(0.9); }
                    100% { transform: scale(1); }
                }
                @keyframes pulse-light {
                    0% {
                        opacity: 0.5;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.7;
                        transform: scale(1.05);
                    }
                    100% {
                        opacity: 0.5;
                        transform: scale(1);
                    }
                }
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-blob {
                    animation: blob 7s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045);
                }
                .animate-pulse-light {
                    animation: pulse-light 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                }
                .animate-bounce-in {
                    animation: bounceIn 1s ease-out forwards;
                }
                .animate-slide-in-up {
                    animation: slideInUp 0.5s ease-out forwards;
                }
                .animation-delay-500 { animation-delay: 0.5s; }
                .animation-delay-1000 { animation-delay: 1s; }
                .animation-delay-1500 { animation-delay: 1.5s; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
                .animation-delay-6000 { animation-delay: 6s; }
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
            `}</style>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        </div>
    );
};

// Main Application Page (Placeholder for Chatbot)
const MainPage = ({ userId, onSignOut }) => {
    const [messageInput, setMessageInput] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { sender: 'AI', text: 'Hello! I am InsuAi, your AI-powered insurance assistant. How can I help you today?' },
    ]);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef(null); // Ref for scrolling to the latest message

    // Scroll to the bottom of the chat when new messages arrive or loading state changes
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory, isLoading]);

    const handleSendMessage = async () => {
        if (messageInput.trim() === '') {
            setModalMessage("Please enter a message to send.");
            setShowModal(true);
            return;
        }

        const userMessage = { sender: 'User', text: messageInput };
        setChatHistory((prev) => [...prev, userMessage]);
        setMessageInput('');
        setIsLoading(true);

        try {
            // Simulate AI response using Gemini API call
            const prompt = `User: ${messageInput}\nAI:`;
            const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
            const apiKey = ""; // Canvas will provide this if empty
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();
            let aiResponseText = "I'm sorry, I couldn't process that. Please try again.";

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                aiResponseText = result.candidates[0].content.parts[0].text;
            } else {
                console.error("Unexpected API response structure:", result);
            }

            setChatHistory((prev) => [...prev, { sender: 'AI', text: aiResponseText }]);

        } catch (error) {
            console.error("Error calling Gemini API:", error);
            setChatHistory((prev) => [...prev, { sender: 'AI', text: 'Error: Could not get a response from the AI. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 to-black text-white font-inter flex flex-col relative overflow-hidden">
            {/* Background glowing elements (subtle for chat page) */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob-subtle"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500 rounded-full mix-blend-screen filter blur-2xl opacity-10 animate-blob-subtle animation-delay-3000"></div>

            {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
            <header className="bg-gradient-to-r from-purple-800 to-indigo-800 shadow-xl p-5 flex justify-between items-center rounded-b-xl border-b border-gray-700 z-10">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-400 drop-shadow-md">
                    InsuAi Assistant
                </h1>
                <div className="flex items-center space-x-4">
                    <button
                        onClick={onSignOut}
                        className="px-5 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                        Sign Out
                    </button>
                </div>
            </header>

            <main className="flex-grow flex flex-col p-6 max-w-4xl mx-auto w-full relative z-10">
                <div className="flex-grow overflow-y-auto p-4 md:p-6 bg-gray-800 bg-opacity-70 rounded-xl shadow-2xl mb-6 border border-gray-700 backdrop-blur-md custom-scrollbar">
                    {chatHistory.map((msg, index) => (
                        <div
                            key={index}
                            className={`mb-4 p-4 rounded-xl shadow-md transition-all duration-300 ease-in-out transform animate-slide-in-up ${
                                msg.sender === 'User'
                                    ? 'bg-gradient-to-br from-blue-600 to-indigo-600 ml-auto text-right text-white max-w-[85%] origin-bottom-right'
                                    : 'bg-gradient-to-br from-gray-700 to-gray-900 mr-auto text-left text-gray-100 max-w-[85%] origin-bottom-left'
                            }`}
                        >
                            <span className="font-semibold">{msg.sender}:</span> {msg.text}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="mb-4 p-4 rounded-xl shadow-md bg-gradient-to-br from-gray-700 to-gray-900 mr-auto text-left text-gray-100 max-w-[85%] animate-pulse-light">
                            <span className="font-semibold">AI:</span> Thinking...
                        </div>
                    )}
                    <div ref={chatEndRef} /> {/* Element to scroll into view */}
                </div>

                <div className="flex space-x-4">
                    <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSendMessage();
                            }
                        }}
                        placeholder="Ask InsuAi anything about insurance..."
                        className="flex-grow p-4 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-800 text-gray-100 placeholder-gray-400 shadow-lg transition-all duration-300 ease-in-out hover:border-purple-600"
                        disabled={isLoading}
                    />
                    <button
                        onClick={handleSendMessage}
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                        disabled={isLoading}
                    >
                        Send
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-xl"></span>
                    </button>
                </div>
            </main>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounceIn {
                    0% { transform: scale(0.3); opacity: 0; }
                    50% { transform: scale(1.05); opacity: 1; }
                    70% { transform: scale(0.9); }
                    100% { transform: scale(1); }
                }
                @keyframes pulse-light {
                    0% {
                        opacity: 0.5;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.7;
                        transform: scale(1.05);
                    }
                    100% {
                        opacity: 0.5;
                        transform: scale(1);
                    }
                }
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes blob-subtle {
                    0% { transform: translate(0px, 0px) scale(1); }
                    50% { transform: translate(20px, -30px) scale(1.05); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-blob {
                    animation: blob 7s infinite cubic-bezier(0.6, -0.28, 0.735, 0.045);
                }
                .animate-blob-subtle {
                    animation: blob-subtle 9s infinite cubic-bezier(0.4, 0.2, 0.6, 0.8);
                }
                .animate-pulse-light {
                    animation: pulse-light 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                }
                .animate-bounce-in {
                    animation: bounceIn 1s ease-out forwards;
                }
                .animate-slide-in-up {
                    animation: slideInUp 0.5s ease-out forwards;
                }
                .animation-delay-500 { animation-delay: 0.5s; }
                .animation-delay-1000 { animation-delay: 1s; }
                .animation-delay-1500 { animation-delay: 1.5s; }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-3000 { animation-delay: 3s; }
                .animation-delay-4000 { animation-delay: 4s; }
                .animation-delay-6000 { animation-delay: 6s; }
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }

                /* Custom Scrollbar for Chat */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(139, 92, 246, 0.5); /* purple-500 */
                    border-radius: 10px;
                    border: 2px solid rgba(255, 255, 255, 0.0);
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: rgba(139, 92, 246, 0.7); /* darker purple on hover */
                }
            `}</style>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
        </div>
    );
};

// Main App Component
function App() {
    const [currentPage, setCurrentPage] = useState('landing'); // 'landing' or 'main'
    // const [db, setDb] = useState(null); // Keep for potential future Firestore integration
    // const [auth, setAuth] = useState(null);
    // const [userId, setUserId] = useState('loading...');
    const [userId, setUserId] = useState('test-user'); // Hardcoded for testing
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        // Commented out Firebase initialization and authentication for testing
        /*
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};

        try {
            const app = initializeApp(firebaseConfig);
            const authInstance = getAuth(app);
            // const dbInstance = getFirestore(app); // No Firestore needed for this initial UI iteration

            setAuth(authInstance);
            // setDb(dbInstance); // Keep for potential future Firestore integration

            // Authenticate user
            const authenticateUser = async () => {
                if (typeof __initial_auth_token !== 'undefined') {
                    try {
                        await signInWithCustomToken(authInstance, __initial_auth_token);
                    } catch (error) {
                        console.error("Error signing in with custom token:", error);
                        // Fallback to anonymous if custom token fails
                        await signInAnonymously(authInstance);
                    }
                } else {
                    await signInAnonymously(authInstance);
                }
            };

            authenticateUser();

            // Listen for auth state changes
            const unsubscribe = onAuthStateChanged(authInstance, (user) => {
                if (user) {
                    setUserId(user.uid);
                } else {
                    // This might happen if sign-in fails or user signs out
                    setUserId(crypto.randomUUID()); // Use a random ID if not authenticated
                }
            });

            return () => unsubscribe(); // Cleanup auth listener
        } catch (error) {
            console.error("Firebase initialization or authentication failed:", error);
            setModalMessage(`Failed to initialize application: ${error.message}. Please try again.`);
            setShowModal(true);
            setUserId('error'); // Indicate an error state for user ID
        }
        */
    }, []);

    const handleSignOut = () => {
        // For testing, just reset userId
        setUserId('test-user');
    };

    const navigateTo = (page) => {
        setCurrentPage(page);
    };

    // Use a switch statement for page navigation
    const renderPage = () => {
        switch (currentPage) {
            case 'landing':
                return <LandingPage onStartApp={() => navigateTo('main')} />;
            case 'main':
                return <MainPage userId={userId} onSignOut={handleSignOut} />;
            default:
                return <LandingPage onStartApp={() => navigateTo('main')} />;
        }
    };

    return (
        <div className="App">
            {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
            {renderPage()}
            <h1 className="text-4xl text-red-500 font-bold">Tailwind is working!</h1>
        </div>
    );
}

export default App;