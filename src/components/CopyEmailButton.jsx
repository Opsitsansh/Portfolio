import { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "ansh4303@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return (
        <motion.button
            onClick={copyToClipboard}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 1.05 }}
            className="relative px-6 py-4 text-sm text-center
            rounded-full font-extralight bg-primary min-w-[12rem]
            cursor-pointer overflow-hidden flex items-center justify-center"
        >
            <AnimatePresence mode="wait">
                {copied ? (
                    <motion.div
                        className="flex items-center justify-center gap-2 w-full"
                        key="copied"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                        <img src="assets/copy-done.svg" className="w-5" alt="copy Icon" />
                        <span>Email has Copied</span>
                    </motion.div>
                ) : (
                    <motion.div
                        className="flex items-center justify-center gap-2 w-full"
                        key="copy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <img src="assets/copy.svg" className="w-5" alt="copy icon" />
                        <span>Copy Email Address</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.button>
    )
}

export default CopyEmailButton;