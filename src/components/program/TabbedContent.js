import { useState } from 'react';
import Summary from "./Summary";
import Description from "./Description";
import Schedule from "./Schedule";
import Workouts from "./Workouts";

const tabs = [
    { label: 'Summary', content: <Summary /> },
    { label: 'Description', content: <Description /> },
    // { label: 'Notes', content: <Notes /> },
    { label: 'Schedule', content: <Schedule /> },
    { label: 'Workouts', content: <Workouts /> },
];

export default function TabbedContent() {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (/** @type {null} */ event, /** @type {import("react").SetStateAction<number>} */ newValue) => {
        setActiveTab(newValue);
    };

    return (
        <div>
            <div className="border-b border-gray-900">
                <div className="flex">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`${activeTab === index
                                ? 'border-t bg-blue-900'
                                : 'border-t border-darkblue-300'
                                } px-4 py-2 hover:bg-darkblue-200 text-sm`}
                            onClick={() => handleChange(null, index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`${activeTab === index ? 'block' : 'hidden'} bg-gray-900 p-4`}
                >
                    {tab.content}
                </div>
            ))}
        </div>
    );
}
