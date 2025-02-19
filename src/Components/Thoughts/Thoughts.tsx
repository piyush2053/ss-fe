import { useEffect, useState } from "react";
import { fetchThoughts } from "../../Services/api";
import SplitText from "../TextAnimations/TextRise";
import { Spin, Button, Tooltip } from "antd";
import "../../index.css";
import Icon, { LoadingOutlined, ReloadOutlined } from "@ant-design/icons";

export default function Thoughts() {
    const [thought, setThought] = useState("");
    const [loading, setLoading] = useState(false);

    const FetchThoughts = async () => {
        setLoading(true);
        try {
            const res = await fetchThoughts();
            if (res) {
                setThought(res);
                localStorage.setItem("thought", res);
                localStorage.setItem("thoughtTimestamp", Date.now().toString());
            }
        } catch (error) {
            console.error("Error fetching thoughts:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        const storedThought = localStorage.getItem("thought") || "";
        const storedTimestamp = localStorage.getItem("thoughtTimestamp");
        
        if (storedThought.length > 0 && storedTimestamp) {
            setThought(storedThought);
        } else {
            FetchThoughts();
        }
    }, []);

    return (
        <div className="bg-grad-pp rounded-lg min-h-[150px] flex flex-col items-center justify-center p-3">
            {loading ? (
                <Spin size="large" indicator={<LoadingOutlined className="text-white" spin />} />
            ) : (
                <div className="flex flex-col items-center">
                    <p className="text-lg text-white font-bold text-center">Thought of the Day <Tooltip title="Refresh Thought of the Day"><ReloadOutlined onClick={FetchThoughts} className="text-sm ml-2"/></Tooltip></p>
                    <SplitText
                        text={thought || "Stay positive and keep learning!"}
                        className="text-md text-white text-center z-90"
                        delay={1}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={() => console.log('animation complete')}
                    />
                </div>
            )}
        </div>
    );
}
