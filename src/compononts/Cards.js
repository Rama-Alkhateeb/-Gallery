import React, { useState } from "react";
import { data1 } from "../data";

const Data = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleImageClick = (index) => {
        setSelectedIndex(index);
    };

    const closeModal = () => {
        setSelectedIndex(null);
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: 'Check out this image!',
                url: data1[selectedIndex].img,
            }).catch((error) => console.error('Error sharing', error));
        } else {
            alert('Web Share API not supported in this browser.');
        }
    };

    const goToNextImage = () => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % data1.length);
    };

    const goToPreviousImage = () => {
        setSelectedIndex((prevIndex) => (prevIndex - 1 + data1.length) % data1.length);
    };

    return (
        <div className="gallery">
            {data1.map((item, index) => (
                <div className="image-2" key={item.id}>
                    <img 
                        src={item.img} 
                        alt={item.title} 
                        onClick={() => handleImageClick(index)} 
                        style={{ cursor: 'pointer' }} 
                    />
                </div>
            ))}

            {selectedIndex !== null && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img className="modal-content" src={data1[selectedIndex].img} alt="" />
                    <a href={data1[selectedIndex].img} download style={{ marginTop: '20px', display: 'block', color: 'white' }}>
                        <i className="fa-solid fa-download"></i>
                    </a>
                    <button onClick={handleShare} style={{ marginTop: '20px', display: 'block', color: 'white', background: 'none' }}>
                        <i className="fa-solid fa-share"></i>
                    </button>
                    
                    {/* أسهم التنقل بين الصور */}
                    <span className="arrow arrow-left"
                        onClick={(e) => { e.stopPropagation(); goToPreviousImage(); }}  
                        style={{ cursor: 'pointer', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'white' }}
                    >
                        &#10094; {/* السهم الأيسر */}
                    </span>
                    <span className="arrow arrow-right"
                        onClick={(e) => { e.stopPropagation(); goToNextImage(); }} 
                        style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: 'white' }}
                    >
                        &#10095; {/* السهم الأيمن */}
                    </span>
                </div>
            )}
        </div>
    );
};

export default Data;
